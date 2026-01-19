import express from "express";
import { pool } from "../server.js"; // Import the PostgreSQL connection pool
import multer from "multer"; // Import Multer (a middleware for handling file uploads)


// Create a new router for user-related routes
const router = express.Router();

// Route to get all students from the database
router.get('/allstudent', async (request, response) => {
    try {
        // Fetch all students from the database
        const result = await pool.query('SELECT * FROM students');  
        
        // Send the student records as a JSON response
        response.json(result.rows);
    } catch (error) {
        // Handle errors and send a 500 status response
        response.status(500).json({ error: error.message });
    }
});


// Route to get a specific student by student_id
router.get('/:student_id', async (request, response) => {
    const { student_id } = request.params;

    try {
        // Fetch student details based on student_id
        const result = await pool.query('SELECT * FROM students WHERE student_id = $1', [student_id]);

        // Send student details as JSON response
        return response.status(200).json(result.rows[0]); 
    } catch (error) {
        // Handle errors and send a 500 status response
        return response.status(500).json({ error: error.message });
    }
});

// Route to add a new student (registration)
router.post('/register', async (request, response) => {
    const { full_name, email, password } = request.body;

    // Validate if required fields are provided
    if (!full_name || !email || !password) {
        return response.status(400).send("Please provide fullname, email, and password");
    }

    try {
        // Insert the new student into the database
        await pool.query(
            'INSERT INTO students (full_name, email, password_hash, last_accessed) VALUES ($1, $2, $3, CURRENT_TIMESTAMP)',
            [full_name, email, password]
        );

        // Retrieve the newly registered student's ID
        const registeredStudentId = await pool.query(
            'SELECT student_id FROM students WHERE full_name = $1 AND email = $2',
            [full_name, email]
        );

        return response.status(201).json({
            message: "Student registered successfully",
            registeredStudentId: registeredStudentId.rows[0].student_id
        });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

// Route to handle student login
router.post('/login', async (request, response) => {
    const { email, password } = request.body;

    // Validate if required fields are provided
    if (!email || !password) {
        return response.status(400).send("Please provide fullname and password");
    }

    try {
        // Check if the student exists with the given email and password
        const loggedStudent = await pool.query(
            'SELECT student_id, email FROM students WHERE email = $1 AND password_hash = $2',
            [email, password]
        );

        // If no user is found, return an error
        if (!loggedStudent) {
            return response.status(401).json({ error: "Invalid username or password" });
        }

        return response.json(loggedStudent.rows[0]); 
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});

// Route to update student details
router.put("/:student_id", async (request, response) => {
    const { student_id } = request.params;
    const { full_name, email, password_hash } = request.body;

    // Ensure at least one field is provided for update
    if (!full_name && !email && !password_hash) {
        return response.status(400).send("Please provide either full_name, email, or password_hash");
    }

    try {
        const updatedStudent = await pool.query(
            `UPDATE students SET full_name = $1, email = $2, password_hash = $3 WHERE student_id = $4 RETURNING *`,
            [full_name, email, password_hash, student_id]
        );

        if (updatedStudent.rowCount === 0) {
            return response.status(404).send("Student not found");
        }

        return response.status(200).json({ 
            message: "Student updated successfully", 
            updatedStudent: updatedStudent.rows[0] 
        });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});



// Route to delete a student from the database
router.delete("/:student_id", async (request, response) => {
    try {
        const { student_id } = request.params;

        // Delete related records first
        await pool.query('DELETE FROM enrollments WHERE student_id = $1', [student_id]);
        await pool.query('DELETE FROM progress WHERE student_id = $1', [student_id]);

        // Delete the student record
        const deletedStudent = await pool.query('DELETE FROM students WHERE student_id = $1 RETURNING student_id', [student_id]);

        if (!deletedStudent.rowCount) {
            return response.status(404).send("Student not found");
        }

        return response.status(200).send({ message: "Student deleted successfully" });
    } catch (error) {
        return response.status(500).json({ error: error.message });
    }
});


// Route to enroll a student in a course
router.post("/enroll", async (request, response) => {
    const { student_id, course_id } = request.body;

    if (!student_id || !course_id) {
        return response.status(400).send("Please provide both student_id and course_id");
    }

    try {
        // Insert into enrollments table
        const enrollment = await pool.query(
            `INSERT INTO enrollments (student_id, course_id) 
             VALUES ($1, $2) 
             ON CONFLICT (student_id, course_id) DO NOTHING 
             RETURNING *`,
            [student_id, course_id]
        );

        // Initialize student progress
        await pool.query(
            `INSERT INTO progress (student_id, course_id, progress_percentage) 
             VALUES ($1, $2, 0) 
             ON CONFLICT (student_id, course_id) DO NOTHING`,
            [student_id, course_id]
        );

        if (enrollment.rowCount === 0) {
            return response.status(400).send("Student is already enrolled in this course");
        }

        return response.status(201).json({
            message: "Student enrolled successfully and progress initialized",
            enrollment: enrollment.rows[0]
        });

    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});


// Route to check if a student is enrolled in any courses
router.get('/:student_id/enrollments', async (request, response) => {
    const { student_id } = request.params;

    try {
        // Fetch all courses the student is enrolled in
        const result = await pool.query(
            'SELECT course_id FROM enrollments WHERE student_id = $1',
            [student_id]
        );

        // Extract the course IDs from the result 
        const enrolledCourses = result.rows.map(row => row.course_id);
        response.json({ enrolledCourses });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

// Route to reset student progress
router.delete('/:student_id/progress/:course_id', async (request, response) => {
    const { student_id, course_id } = request.params;  // ✅ Use query parameters for DELETE & GET
    
    // Validate input
    if (!student_id || !course_id) {
        return response.status(400).send("Please provide student_id and course_id");
    }

    try {
        // Delete from progress table
        const progress = await pool.query(
            `DELETE FROM progress WHERE student_id = $1 AND course_id = $2 RETURNING *`,
            [student_id, course_id] 
        );

        // Delete from enrollment enrollment table
        const enrollment = await pool.query(
            `DELETE FROM enrollments WHERE student_id = $1 AND course_id = $2 RETURNING *`,
            [student_id, course_id]
        );

        if (progress.rowCount === 0) {
            return response.status(200).json({ message: "No progress found for the given student and course" });
        }

        if (enrollment.rowCount === 0) {
            return response.status(200).json({ message: "No enrollment found for the given student and course" });
        }

        return response.status(200).json({ 
            message: "Student progress and enrollment reset successfully",
            progress: progress.rows[0],
            enrollment: enrollment.rows[0]
        });

    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});

// Route to update student progress
router.put('/:student_id/progress', async (request, response) => {
    const { student_id } = request.params;
    const { course_id, progress_percentage } = request.body;

    if (!course_id || progress_percentage === undefined) {
        return response.status(400).json({ error: "Please provide course_id and progress_percentage" });
    }

    try {
        // Update progress in the database
        const progress = await pool.query(
            `UPDATE progress SET progress_percentage = $1
             WHERE student_id = $2 AND course_id = $3 RETURNING *`,
            [progress_percentage, student_id, course_id]
        );

        if (progress.rowCount === 0) {
            return response.status(404).json({ error: "Progress record not found" });
        }

        return response.status(200).json({ message: "Progress updated", progress: progress.rows[0] });
    } catch (error) {
        response.status(500).json({ error: error.message });
    }
});



// Route to fetch progress for a student in a course
router.get('/:student_id/progress/:course_id', async (request, response) => {
    const { student_id, course_id } = request.params;

    try {
        // Fetch progress from the database
        const progress = await pool.query(
            `SELECT progress.progress_percentage, courses.title 
             FROM progress
             JOIN courses ON progress.course_id = courses.course_id
             WHERE progress.student_id = $1 AND progress.course_id = $2`,
            [student_id, course_id]
        );

        if (progress.rowCount === 0) {
            return response.status(200).json({ progress_percentage: 0.00, message: `No progress found for student ${student_id} in course ${course_id}, returning 0`});
        }

        return response.status(200).json(progress.rows[0]);
    } catch (error) {
        console.error("Database error:", error);
        response.status(500).json({ error: error.message });
    }
});





// Configure multer storage settings
const storage = multer.diskStorage({
    // Define where the uploaded files should be stored
    destination: (request, file, cb) => {
        cb(null, "uploads/"); // Store files inside the "uploads/" directory
    },

    // Define how the uploaded file should be named
    filename: (request, file, cb) => {
        // Use the current timestamp + original filename to avoid name conflicts
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

// Create an upload instance with the configured storage settings
const upload = multer({ storage });

// API Endpoint to Upload a Profile Picture for a Student
router.put("/:student_id/upload", upload.single("profile_picture"), async (request, response) => {
    try {
        // Extract the student_id from the request URL parameters
        const { student_id } = request.params;

        // Check if a file was uploaded
        if (!request.file) {
            return response.status(400).json({ message: "No file uploaded" });
        }

        // Construct the image URL where the file is stored
        const imageUrl = `/uploads/${request.file.filename}`;

        // Update the student's profile picture in the database
        const updatedStudent = await pool.query(
            "UPDATE students SET profile_picture = $1 WHERE student_id = $2 RETURNING *", 
            [imageUrl, student_id]
        );

        // If no student was updated, return a 404 error
        if (updatedStudent.rowCount === 0) {
            return response.status(404).json({ message: "Student not found" });
        }

        // Send success response with the updated image URL
        response.status(200).json({ message: "Profile picture updated!", imageUrl });
        
    } catch (error) {
        // Handle any server errors
        console.error(error.message);
        response.status(500).json({ message: "Server error" });
    }
});


// Export the router
export default router;