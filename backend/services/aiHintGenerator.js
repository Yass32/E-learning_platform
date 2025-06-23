// Import necessary modules
import axios from 'axios'; // Axios is used to make HTTP requests
import dotenv from 'dotenv'; // dotenv helps manage environment variables

dotenv.config(); // Load environment variables from a .env file

// Function to get AI hint based on user code and feedback
export const getAIHint = async (code) => {
    // Log API key and URL for debugging
    console.log("OPENROUTER_API_KEY:", process.env.OPENROUTER_API_KEY);
    console.log("API_URL:", process.env.API_URL); // Log the generated prompt for debugging

    try {
        // Check if the API key is available in environment variables
        if (!process.env.OPENROUTER_API_KEY) {
            console.error("Missing OPENROUTER_API_KEY in environment variables");
            throw new Error("API configuration error"); // Stop execution if key is missing
        }

        // Log the outgoing API request
        console.log("Making request to OpenRouter API...");

        // Send a POST request to the AI API
        const response = await axios.post(
            process.env.API_URL, // API endpoint from environment variables
            {  
                model: "deepseek/deepseek-r1-0528:free", // AI model to use
                messages: [
                    { role: "system", content: "Give a short, non-spoiler hint to guide the user. Focus on logic, not full answers."}, // System role description
                    { role: "user", content: code } 
                ],
                temperature: 0.3 // Lower value for more consistent responses
            },
            {  
                headers: {
                    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`, // Pass API key in the request
                    "Content-Type": "application/json" // Specify that we are sending JSON data
                }
            }
        );

        // Check if the response contains the expected AI output
        if (!response?.data?.choices?.[0]?.message?.content) {
            console.error("Invalid response structure:", response?.data);
            throw new Error("Received invalid response from AI service");
        }

        // Extract the AI-generated hint
        let aiResponse = response.data.choices[0].message.content;

        // Handle empty AI response
        if (!aiResponse) {
            console.error("Empty content in OpenRouter API response");
            throw new Error("Empty content received from AI service");
        }

        // Remove unexpected formatting characters (like LaTeX artifacts)
        aiResponse = aiResponse.replace(/\\boxed\{|\}/g, "").trim();
        
        // Log the final AI response
        console.log("AI response received:", aiResponse);

        return aiResponse; // Return the AI-generated hint
        
    } catch (error) {
        // Catch and log any errors during the process
        console.error("OpenRouter API Error:", error.message || "Unknown error");

        // If the error comes from the API response, log additional details
        if (error.response) {
            console.error("Response Status:", error.response.status); // HTTP status code
            console.error("Response Data:", error.response.data); // Error details from the API
        }
        
        // Throw a new error to indicate failure
        throw new Error("Failed to generate AI hint: " + (error.message || "Unknown error"));
    }
};
