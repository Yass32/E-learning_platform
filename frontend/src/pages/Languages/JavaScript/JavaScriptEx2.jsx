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


const JavaScriptEx2 = () => {
  const { student_id } = useParams();


  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [hintVisibility, setHintVisibility] = useState(false);


  const code = `function fizzbuzz(n) {
  // Write your code here

}

// Uncomment these function calls to test your same_name function:

// console.log(fizzbuzz(10));
// should return [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz']`;


  /*
  const solution = `let result = [];
  
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      result.push("FizzBuzz");
    } else if (i % 3 === 0) {
      result.push("Fizz");
    } else if (i % 5 === 0) {
      result.push("Buzz");
    } else {
      result.push(i);
    }
  }
  
  return result;`;
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
        { input: '10', expectedOutput: "[1,2,\"Fizz\",4,\"Buzz\",\"Fizz\",7,8,\"Fizz\",\"Buzz\"]" },
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

  

  return (
    <div className="flex h-screen bg-gray-100">
      <ModuleBar />
      <div className="flex flex-col w-3/5 p-8 overflow-y-auto">
        <h2 className="text-3xl font-semibold mb-4 text-rose-700">Exercise 2</h2>
        <p className="text-gray-700">Write a <code>fizzbuzz()</code>  function that takes in a number, <code>n</code>, and returns an array of the numbers from 1 to<code>n</code>. For multiples of three, use <code>&quot;Fizz&quot;</code> instead of the number, and for the multiples of five, use <code>&quot;Buzz&quot;</code> . For numbers that are multiples of both three and five, use <code>&quot;FizzBuzz&quot;</code> .</p>
        <button className="flex items-center text-sm text-gray-600 hover:text-rose-700 focus:outline-none" onClick={() => setHintVisibility(!hintVisibility)}>
          <BiSolidRightArrow  className={`inline-block size- mr-1 transition-transform ${hintVisibility ? "rotate-90" : ""}`}/>
          <strong>Hint:</strong> 
        </button>
        {/* Hint Text with Slide-In Transition */}
        <div className={`transition-all duration-300 ease-in-out`}
          style={{ maxHeight: hintVisibility ? '100px' : '0', opacity: hintVisibility ? 1 : 0 }}>
          <div className="mt-1 text-xs text-gray-700">
            <p>Use the modulo operator (%) to check if a number is divisible by another number.</p>
          </div>
        </div>

        <CodeEditor code={code} language="javascript" handleRunCode={handleRunCode} handleAutoGrade={handleAutoGrade}   />        
      </div>

      <div className="w-2/5 p-8 overflow-y-auto">
        <OutputConsole output={output} />
        <CodeFeedback feedback={feedback}/>
        <div className='flex justify-end mt-20'>
            <PageButton text="Next Exercise" url={`/${student_id}/javascriptex3`}/>
        </div>
      </div>
    </div>
  );
};

export default JavaScriptEx2;


