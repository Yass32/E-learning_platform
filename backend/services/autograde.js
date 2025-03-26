// Import required modules
import express from "express"; // Web framework for creating APIs
import { exec } from "child_process"; // Allows executing system commands
import fs from "fs"; // Used to read/write files
import { v4 as uuidv4 } from "uuid"; // Generates unique IDs
import path from "path"; // Handles file paths

// Create an Express router for handling autograding requests
const router = express.Router();

// Define a POST route at "/autograde" for handling code submissions
router.post("/autograde", (request, response) => {
    console.log("Received autograde request:", request.body);

    // Extract the language, code, test cases, and points per test case from the request body
    const { language, code, testCases, pointsPerTestCase = 10 } = request.body;

    // ✅ Step 1: Validate the input
    if (!language || !code || !Array.isArray(testCases)) {
        return response.status(400).json({ error: "Language, code, and test cases are required." });
    }

    // ✅ Step 2: Check if the language is supported
    const supportedLanguages = ["python", "javascript", "java"];
    if (!supportedLanguages.includes(language)) {
        return response.status(400).json({ error: "Unsupported language." });
    }

    // ✅ Step 3: Create a unique temporary file name (only works for py & js) for the submitted code
    //const fileExtension = language === "python" ? "py" : language === "javascript" ? "js" : "java";
    //const fileName = `${uuidv4()}.${fileExtension}`;
    const fileName = language === "java" ? "Exercise.java" : `${uuidv4()}.${language === "python" ? "py" : "js"}`;

    // ✅ Step 4: Write the submitted code into the file
    fs.writeFile(fileName, code, (err) => {
        if (err) {
            console.error(`Error writing code file: ${err}`);
            return response.status(500).json({ error: "Failed to write code file." });
        }
        console.log(`Code file created: ${fileName}`);

        // ✅ Step 5: Determine the execution command based on the language
        const scriptFilePath = path.resolve(fileName);
        let command = "";

        if (language === "python") {
            command = `python "${scriptFilePath}"`; // Run Python script
        } else if (language === "javascript") {
            command = `node "${scriptFilePath}"`; // Run JavaScript script
        } else if (language === "java") {
            command = `javac -source 1.8 -target 1.8 Exercise.java && java Exercise`;
        }

        console.log("Executing command:", command);

        // ✅ Step 6: Execute the code file and capture the output
        exec(command, (error, stdout, stderr) => {
            console.log("Raw Output (stdout):", stdout);

            // ✅ Step 7: Clean up the temporary code file
            fs.unlink(fileName, () => console.log(`Deleted code file: ${fileName}`));

            // ✅ Step 8: Clean up compiled Java files if needed
            if (language === "java") {
                const classFile = fileName.replace(".java", ".class");
                fs.unlink(classFile, () => console.log(`Deleted class file: ${classFile}`));
            }

            // ✅ Step 9: Normalize and split the output into lines
            let output = stdout.trim(); // Get raw output
            console.log("Trimmed Output:", output); 

            // If the output is an array (detected by starting with "["), convert it to a JSON string
            if (output.startsWith("[") && output.endsWith("]")) {
                try {
                    output = JSON.stringify(eval(output)); // Convert array to JSON format
                } catch (e) {
                    console.error("Error parsing output as JSON:", e);
                }
            }
            console.log("array Output:", output); 

            // Split into lines for further processing
            const outputLines = output.replace(/\r\n/g, "\n").split("\n");
            console.log("Output Lines:", outputLines);


            let index = 0; // Tracks current position in outputLines
            let totalScore = 0; // Stores total points scored

            // ✅ Step 10: Compare the output for each test case
            const results = testCases.map(({ input, expectedOutput }) => {
                let actualOutput;

                // If expected output has multiple lines, extract that many lines from stdout
                if (expectedOutput.includes("\n")) {
                    const numLines = expectedOutput.split("\n").length;
                    actualOutput = outputLines.slice(index, index + numLines).join("\n");
                    index += numLines; // Move index forward
                } else {
                    actualOutput = outputLines[index] || ""; // Handle missing lines gracefully
                    index += 1;
                }

                // Check if actual output matches expected output
                const isCorrect = actualOutput.trim() === expectedOutput.trim();

                if (isCorrect) totalScore += pointsPerTestCase; // Add points if correct

                return {
                    inputString: input,
                    expectedOutput,
                    actualOutput,
                    error: error ? stderr : null, // Store any errors
                    isCorrect,
                    pointsAwarded: isCorrect ? pointsPerTestCase : 0,
                };
            });

            // ✅ Step 11: Calculate percentage score
            const percentageScore = (totalScore / (testCases.length * pointsPerTestCase)) * 100;

            // ✅ Step 12: Return the grading results as JSON response
            return response.json({ results, totalScore, percentageScore });
        });
    });
});

// ✅ Step 13: Export the router to use in other parts of the application
export default router;
