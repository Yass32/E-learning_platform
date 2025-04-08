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

const JavaScriptEx3 = () => {
  const { student_id } = useParams();


  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [hintVisibility, setHintVisibility] = useState(false);

  const code = `function scoreSorter(scores) {
  // Write your code here


}

// Uncomment this function call to test your scoreSorter function:

// console.log(scoreSorter([1, 2, 3, 9999, 13]));
// should return [9999, 13, 3, 2, 1]`;

/*
const solution = `let n = scores.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (scores[j] < scores[j + 1]) {
        let temp = scores[j];
        scores[j] = scores[j + 1];
        scores[j + 1] = temp;
      }
    }
  }

  return scores;`;
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
            { input: [1, 2, 3, 9999, 13], expectedOutput: "[9999,13,3,2,1]" },
          ],
          pointsPerTestCase: 10,
        })
          .then((response) => {
            console.log(JSON.stringify(response.data, null, 2));
            setFeedback(response.data.results);
          })
          .catch((error) => {
            console.error(error);
            setFeedback("Error in auto-grading.");
          });
    };
    console.log(feedback);

  

  return (
    <div className="flex h-screen bg-gray-100">
      <ModuleBar />
      <div className="flex flex-col w-3/5 p-8 overflow-y-auto">
        <h2 className="text-3xl font-semibold mb-4 text-rose-700">Exercise 3</h2>
        <p className="text-gray-700">Write a <code>scoreSorter()</code> function that will take a list of unsorted scores . It should return a sorted list of all of the scores, in descending order from high to low. </p>
        <button className="flex items-center text-sm text-gray-600 hover:text-rose-700 focus:outline-none" onClick={() => setHintVisibility(!hintVisibility)}>
          <BiSolidRightArrow  className={`inline-block size- mr-1 transition-transform ${hintVisibility ? "rotate-90" : ""}`}/>
          <strong>Hint:</strong> 
        </button>
        {/* Hint Text with Slide-In Transition */}
        <div className={`transition-all duration-300 ease-in-out`}
          style={{ maxHeight: hintVisibility ? '100px' : '0', opacity: hintVisibility ? 1 : 0 }}>
          <div className="mt-1 text-xs text-gray-700">
            <p>Use the Bubble Sort algorithm to sort the scores in descending order.</p>
          </div>
        </div>
        <CodeEditor code={code} language="javascript" handleRunCode={handleRunCode} handleAutoGrade={handleAutoGrade}   />
        
      </div>
      <div className="w-2/5 p-8">
        <OutputConsole output={output} />
        <CodeFeedback feedback={feedback}/>
        <div className='flex justify-end mt-20'>
            <PageButton text="Complete Course" url={`/${student_id}/profilepage`}/>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptEx3;
