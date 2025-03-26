// Import required modules
import express from "express"; // Web framework for building APIs
import { exec } from "child_process"; // Module to execute shell commands
import fs from "fs"; // Module for file system operations
import { v4 as uuidv4 } from "uuid"; // Library to generate unique IDs

// Create a new router to handle routes related to code execution
const router = express.Router();

// Define an API endpoint to execute user-provided code
router.post("/executecode", (request, response) => {

    // Extract the programming language and code from the request body
    const { language, code } = request.body;

    console.log(language); // Log the language for debugging purposes
    console.log(code); // Log the code for debugging purposes

    // Validate that both language and code are provided
    if (!language || !code) {
        return response.status(400).json({ error: "Language and code are required." });
    }

    // List of supported programming languages
    const supportedLanguages = ["python", "javascript", "java"];
    if (!supportedLanguages.includes(language)) {
        // If the provided language is not supported, return an error
        return response.status(400).json({ error: "Unsupported language." });
    }

    // Generate a unique file name (only works for py & js) based on the programming language
    const fileName = language === "java" ? "Exercise.java" : `${uuidv4()}.${language === "python" ? "py" : "js"}`;


    // Write the provided code to a temporary file
    fs.writeFile(fileName, code, (err) => {
        if (err) {
            // If an error occurs while writing the file, return an error response
            return response.status(500).json({ error: "Error writing to file." });
        }

        // Build the execution command based on the programming language
        let command = "";
        if (language === "python") {
            // For Python, use the python3 interpreter
            command = `python3 ${fileName}`;
        } else if (language === "javascript") {
            // For JavaScript, use the Node.js runtime
            command = `node ${fileName}`;
        } else if (language === "java") {
            // For Java, compile the code and then run it
            command = `javac -source 1.8 -target 1.8 Exercise.java && java Exercise`;
        }

        // Execute the command
        exec(command, (error, stdout, stderr) => {
            // Clean up the temporary file after execution
            fs.unlink(fileName, () => {}); // Delete the code file

            // If the language is Java, also delete the compiled .class file
            if (language === "java") {
                const classFile = fileName.replace(".java", ".class");
                fs.unlink(classFile, () => {});
            }

            // Check if there was an error during execution
            if (error) {
                // If there was an error, return the error output
                return response.status(400).json({ error: stderr || "Execution error." });
            }

            // If execution was successful, return the program's output
            response.json({ output: stdout });
        });
    });
});

// Export the router to be used in the main application
export default router;
