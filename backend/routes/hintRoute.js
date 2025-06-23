// Import necessary modules
import express from "express"; // Express framework for handling HTTP routes
import { getAIHint } from "../services/aiHintGenerator.js"; // Import the AI recommendation function

// Create an Express router instance
const router = express.Router();

// Define a POST route for generating AI recommendations
router.post('/hint', async (request, response) => {
    try {
        // Extract the user's code from the request body
        const { code } = request.body;

        // Log the received answers for debugging
        console.log("User's code received:", code);

        // Call the AI hint function with the user's answers
        const hint = await getAIHint(code);

        // Log the AI-generated hint for debugging
        console.log("AI hint generated in hintRoute:", hint);

        // Check if a hint was successfully generated
        if (!hint) {
            throw new Error("Failed to generate AI hint."); // Throw an error if recommendation is empty
        }

        // Send the AI hint back to the client as a JSON response
        return response.status(200).json({ hint });

    } catch (error) {
        // Handle errors that occur during processing
        console.error("Error in hint route:", error);

        // Send a 500 status response with an error message
        return response.status(500).json({ error: "Something went wrong" });
    }
});

// Export the router to be used in other parts of the application
export default router;
