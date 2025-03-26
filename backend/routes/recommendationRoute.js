// Import necessary modules
import express from "express"; // Express framework for handling HTTP routes
import { getAIRecommendation } from "../services/openrouterService.js"; // Import the AI recommendation function

// Create an Express router instance
const router = express.Router();

// Define a POST route for generating AI recommendations
router.post('/recommendation', async (request, response) => {
    try {
        // Extract the user's answers from the request body
        const { answers } = request.body;

        // Log the received answers for debugging
        console.log("User answers received:", answers);

        // Call the AI recommendation function with the user's answers
        const recommendation = await getAIRecommendation(answers);

        // Log the AI-generated recommendation for debugging
        console.log("AI recommendation generated in recommendationRoute:", recommendation);

        // Check if a recommendation was successfully generated
        if (!recommendation) {
            throw new Error("Failed to generate AI recommendation."); // Throw an error if recommendation is empty
        }

        // Send the AI recommendation back to the client as a JSON response
        return response.status(200).json({ recommendation });

    } catch (error) {
        // Handle errors that occur during processing
        console.error("Error in recommendation route:", error);

        // Send a 500 status response with an error message
        return response.status(500).json({ error: "Something went wrong" });
    }
});

// Export the router to be used in other parts of the application
export default router;
