CREATE TABLE instructors (
    instructor_id INT PRIMARY KEY AUTO_INCREMENT, -- Unique ID for each instructor
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL, -- Email must be unique
    password_hash TEXT NOT NULL, -- Store hashed passwords
    course_taught ENUM('Python', 'JavaScript', 'Java') NOT NULL, -- Restricts values to specific courses
);

CREATE TABLE students (
    student_id INT PRIMARY KEY AUTO_INCREMENT, -- Unique ID for each student
    full_name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL, -- Email must be unique
    password_hash TEXT NOT NULL, -- Store hashed passwords
    enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP -- Date the student joined the platform
);

CREATE TABLE courses (
    course_id INT PRIMARY KEY AUTO_INCREMENT, -- Unique course ID
    title ENUM('Python', 'JavaScript', 'Java') NOT NULL,
    description TEXT, -- Optional course description
    instructor_id INT NOT NULL, -- Reference to the instructor teaching the course
    FOREIGN KEY (instructor_id) REFERENCES instructors(instructor_id) ON DELETE CASCADE
);

CREATE TABLE enrollment (
    enrollment_id INT PRIMARY KEY AUTO_INCREMENT, -- Unique enrollment ID
    student_id INT NOT NULL, -- Reference to the student
    course_id INT NOT NULL, -- Reference to the course
    enrollment_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Date of enrollment
    FOREIGN KEY (student_id) REFERENCES students(student_id),
    FOREIGN KEY (course_id) REFERENCES courses(course_id),
    UNIQUE(student_id, course_id) -- ensure a student cannot enroll in the same course multiple times
);

-- Create the progress table
CREATE TABLE progress (
    progress_id INT PRIMARY KEY AUTO_INCREMENT, -- Auto-increment for unique progress IDs
    student_id INT NOT NULL, -- Student ID
    course_id INT NOT NULL, -- Course ID
    progress_percentage TINYINT DEFAULT 0, -- Default to incomplete
    last_accessed TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- Automatically set to the current time
    FOREIGN KEY (student_id) REFERENCES students(student_id), -- Reference the students table
    FOREIGN KEY (course_id) REFERENCES courses(course_id) -- Reference the courses table
);
