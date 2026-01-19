// Import necessary modules
import axios from 'axios'; // Axios is used to make HTTP requests
import dotenv from 'dotenv'; // dotenv helps manage environment variables

dotenv.config(); // Load environment variables from a .env file

// Function to get AI-powered programming field recommendation
export const getAIRecommendation = async (userAnswers) => {
    // Create a text prompt for the AI based on the user's answers
    const prompt = `
    Based on the following user answers, suggest the best programming field and language.
    Then, provide a **concise** learning path with 3 simple steps.

    User Answers:
    ${JSON.stringify(userAnswers)}

    IMPORTANT: Return your response in plain text format without ANY markdown, LaTeX, code blocks, or special formatting. 
    DO NOT use \`\`\`, latex commands, or any other special formatting.
    
    Your response should DIRECTLY start with "Recommended Field:" and follow this exact structure:
    
    Recommended Field: [Field Name]
    Best Programming Language: [Language Name]
    Why This is a Good Fit: [Short explanation]
    Suggested Learning Path:
    1. Step 1
    2. Step 2
    3. Step 3
    `;

    console.log("OPENROUTER_API_KEY:", process.env.OPENROUTER_API_KEY);
    console.log("API_URL:", process.env.API_URL); // Log the generated prompt for debugging

    try {
        // Check if the API key is available in environment variables
        if (!process.env.OPENROUTER_API_KEY) {
            console.error("Missing OPENROUTER_API_KEY in environment variables");
            throw new Error("API configuration error"); // Stop execution if key is missing
        }

        // Log the API request (excluding sensitive data)
        console.log("Making request to OpenRouter API...");

        // Send a POST request to OpenRouter AI to get the recommendation
        const response = await axios.post(
            process.env.API_URL, // Use the API URL from environment variables
            {  
                model: "xiaomi/mimo-v2-flash:free", // AI model to use
                messages: [
                    { role: "system", content: "You are an AI assistant that provides concise and well-structured programming recommendations."}, // System role description
                    { role: "user", content: prompt } // User's request to the AI
                ],
                temperature: 0.3 // Lower temperature means more deterministic responses
            },
            {  
                headers: {
                    "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`, // Pass API key in the request
                    "Content-Type": "application/json" // Specify that we are sending JSON data
                }
            }
        );

        // Validate if the response contains the expected AI output
        if (!response?.data?.choices?.[0]?.message?.content) {
            console.error("Invalid response structure:", response?.data);
            throw new Error("Received invalid response from AI service");
        }

        // Extract the AI-generated response text
        let aiResponse = response.data.choices[0].message.content;

        // Handle case where the AI response is empty
        if (!aiResponse) {
            console.error("Empty content in OpenRouter API response");
            throw new Error("Empty content received from AI service");
        }

        // Remove unexpected formatting characters (like LaTeX artifacts)
        aiResponse = aiResponse.replace(/\\boxed\{|\}/g, "").trim();
        
        // Log the final AI response
        console.log("AI response received:", aiResponse);

        return aiResponse; // Return the cleaned AI-generated recommendation
        
    } catch (error) {
        // Catch and log any errors during the process
        console.error("OpenRouter API Error:", error.message || "Unknown error");

        // If the error comes from the API response, log additional details
        if (error.response) {
            console.error("Response Status:", error.response.status); // HTTP status code
            console.error("Response Data:", error.response.data); // Error details from the API
        }
        
        // Throw a new error to indicate failure
        throw new Error("Failed to generate AI recommendation: " + (error.message || "Unknown error"));
    }
};
