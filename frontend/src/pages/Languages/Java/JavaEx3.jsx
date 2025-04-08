import { useState } from "react";
import CodeEditor from "../../../components/CodeEditor";
import OutputConsole from "../../../components/OutputConsole";
import ModuleBar from "../../../components/JvModuleBar";
import axios from "axios";
import CodeFeedback from "../../../components/CodeFeedback";
import { BiSolidRightArrow } from "react-icons/bi";
import { useParams } from "react-router-dom";
import PageButton from "../../../components/PageButton";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const JavaEx3 = () => {
  const { student_id } = useParams();


  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [hintVisibility, setHintVisibility] = useState(false);

  const code = `public class Exercise {

    public static int calculateSum(int n) {
      // Base case: sum of 0 is 0
      if (n == 0) {
        return 0;
      }

      // Recursive case: add n with the sum of (n-1)
      return n + calculateSum(n - 1);
    }

    public static void main(String[] args) {
      // System.out.println("Sum of numbers from 1 to " + 5 + " is: " + calculateSum(5));
      // Should print "Sum of numbers from 1 to 5 is: 15"

      // System.out.println("Sum of numbers from 1 to " + 10 + " is: " + calculateSum(10));
      // Should print "Sum of numbers from 1 to 10 is: 55"
    }
  }`;

/*
const solution = `public static int calculateSum(int n) {
      // Base case: sum of 0 is 0
      if (n == 0) {
        return 0;
      }

      // Recursive case: add n with the sum of (n-1)
      return n + calculateSum(n - 1);
    }`;
*/
  
    const handleRunCode = async (code) => {
    axios.post(`${VITE_BACKEND_URL}/api/executecode`, {
      language: "java",
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
          language: "java",
          code,
          testCases: [
            { input: "5", expectedOutput: "Sum of numbers from 1 to 5 is: 15" },
            { input: "10", expectedOutput: "Sum of numbers from 1 to 10 is: 55" },
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
        <p className="text-gray-700 text-sm">            Write a Java recursive method to calculate the sum of all numbers from 1 to n.</p>
        <button className="flex items-center text-gray-600 hover:text-rose-700 focus:outline-none" onClick={() => setHintVisibility(!hintVisibility)}>
          <BiSolidRightArrow  className={`inline-block size- mr-1 transition-transform ${hintVisibility ? "rotate-90" : ""}`}/>
          <strong>Hint:</strong> 
        </button>
        {/* Hint Text with Slide-In Transition */}
        <div className={`transition-all duration-300 ease-in-out`}
          style={{ maxHeight: hintVisibility ? '100px' : '0', opacity: hintVisibility ? 1 : 0 }}>
          <div className="mt-1 text-xs text-gray-700">
            <p>1. The base case is when n is 0, the sum is 0.</p>
            <p>2. The recursive case is to add n with the sum of (n-1).</p>
          </div>
        </div>
        <CodeEditor code={code} language="java" handleRunCode={handleRunCode} handleAutoGrade={handleAutoGrade}   />
        
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

export default JavaEx3;
