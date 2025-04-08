import { useState } from "react";
import CodeEditor from "../../../components/CodeEditor";
import OutputConsole from "../../../components/OutputConsole";
import ModuleBar from "../../../components/JsModuleBar";
import axios from "axios";
import CodeFeedback from "../../../components/CodeFeedback";
import { BiSolidRightArrow } from "react-icons/bi";
import { useParams } from "react-router-dom";
import PageButton from "../../../components/PageButton";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const JavaScriptEx1 = () => {

  const { student_id } = useParams();


  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [hintVisibility, setHintVisibility] = useState(false);

  const code = `function statsFinder(array) {
  // Write your code here
  
}

// Uncomment these function calls to test your same_name function:

// console.log(statsFinder([500, 400, 400, 375, 300, 350, 325, 300]))
// Should return [368.75, 400]`;

    /*
    const solution = `let mean = 0;
let frequency = {};
let maxFrequency = 0;
let mode = null;

for (let i = 0; i < array.length; i++) {
  mean += array[i];

  if (frequency[array[i]]) {
    frequency[array[i]] += 1;
  } else {
    frequency[array[i]] = 1;
  }

  if (frequency[array[i]] > maxFrequency) {
    maxFrequency = frequency[array[i]];
    mode = array[i];
  } else if (frequency[array[i]] === maxFrequency) {
    continue;
  }
}

mean = mean / array.length;

return [mean, mode];`;
    */


  
    const handleRunCode = async (code) => {
    axios.post(`${VITE_BACKEND_URL}/api/executecode`, {
      language: "javascript",
      code,
    })
      .then((response) => {
        setOutput(response.data.output || `Error: ${response.data.error}`);
      })
      .catch((error) => {
        console.error(error);
        setOutput("Error executing code.");
      });
    };

    const handleAutoGrade = async (code) => {
        axios.post(`${VITE_BACKEND_URL}/api/autograde`, {
          language: "javascript",
          code,
          testCases: [
            { input: "[500, 400, 400, 375, 300, 350, 325, 300]", expectedOutput: "[368.75,400]" },
          ],
          pointsPerTestCase: 10,
        })
          .then((response) => {
            console.log(JSON.stringify(response.data, null, 2));
            setFeedback(response.data.results); // Set the raw array directly
          })
          .catch((error) => {
            console.error(error);
            setFeedback("Error in auto-grading.");
          });
          
    };

    console.log(feedback)

  

  return (
    <div className="flex h-screen bg-gray-100">
      <ModuleBar />
      <div className="flex flex-col w-3/5 p-8 overflow-y-auto">
        <h2 className="text-3xl font-semibold mb-4 text-rose-700">Exercise 1</h2>
        <p className="text-gray-700">Create a <code>statsFinder()</code> function that takes in a list of numbers and returns a list containing the mean and mode, in that order. As a reminder, the mean is the average of the values and the mode is the most occurring value. If there are multiple modes, return the mode that occurs first.</p>
        <button className="flex items-center text-sm text-gray-600 hover:text-rose-700 focus:outline-none" onClick={() => setHintVisibility(!hintVisibility)}>
          <BiSolidRightArrow  className={`inline-block size- mr-1 transition-transform ${hintVisibility ? "rotate-90" : ""}`}/>
          <strong>Hint:</strong> 
        </button>
        {/* Hint Text with Slide-In Transition */}
        <div className={`transition-all duration-300 ease-in-out`}
          style={{ maxHeight: hintVisibility ? '100px' : '0', opacity: hintVisibility ? 1 : 0 }}>
          <div className="mt-1 text-xs text-gray-700">
            The mean is calculated by adding all the numbers in the list and dividing by the number of elements.<br/>
            The mode is the number that appears most frequently in the list. You can use a dictionary to keep track of the frequency of each number.<br/>
          </div>
        </div>
        <CodeEditor code={code} language="javascript" handleRunCode={handleRunCode} handleAutoGrade={handleAutoGrade}   />
        
      </div>
      <div className="w-2/5 p-8">
        <OutputConsole output={output} />
        <CodeFeedback feedback={feedback}/>
        <div className='flex justify-end mt-20'>
            <PageButton text="Next Exercise" url={`/${student_id}/javascriptex2`}/>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptEx1;
