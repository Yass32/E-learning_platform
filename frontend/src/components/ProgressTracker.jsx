/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;


const ProgressTracker = ({ children, totalLessons, lesson_id, course_id }) => {
    // Get student_id from the URL parameters
    const { student_id } = useParams();

    useEffect(() => {
        // Step 1: Validate that all required parameters are present
        if (!student_id || !lesson_id || !totalLessons || !course_id) {
            console.error("Missing required parameters:", { student_id, lesson_id, totalLessons, course_id });
            return; // Stop execution if any parameter is missing
        }

        // Step 2: Retrieve the list of completed lessons for this student from local storage
        const completedLessons = JSON.parse(localStorage.getItem(`completedLessons_${student_id}`)) || [];
        console.log("Completed Lessons:", completedLessons);

        // Step 3: If the lesson is already completed, do nothing and return
        if (completedLessons.includes(lesson_id)) return;

        // Step 4: Add the current lesson to the completed lessons list
        const updatedLessons = [...completedLessons, lesson_id];

        // Step 5: Save the updated list back to local storage
        localStorage.setItem(`completedLessons_${student_id}`, JSON.stringify(updatedLessons));

        // Step 6: Calculate the progress percentage
        const progressPercentage = (updatedLessons.length / totalLessons) * 100;
        console.log(`Progress: ${progressPercentage}%`);

        // Step 7: Send the updated progress to the backend API
        try {
            axios.put(`${VITE_BACKEND_URL}/students/${student_id}/progress`, {
                course_id: Number(course_id),  // Convert to number
                progress_percentage: parseFloat(progressPercentage.toFixed(2)) // Round to 2 decimal places
            })
            .then((response) => console.log(response.data)) // Log the response if successful
        } 
        catch (error) {
            // Step 8: Handle and log any errors from the API request
            console.error("Error updating progress:", error);
            console.error("Response data:", error.response.data);
            console.error("Response status:", error.response.status);
            console.error("Response headers:", error.response.headers);
        }
    }, [student_id, lesson_id, totalLessons, course_id]); // Dependency array ensures this runs when any of these values change

    // Step 9: Render children components inside this component
    return <>{children}</>;
};

export default ProgressTracker;
