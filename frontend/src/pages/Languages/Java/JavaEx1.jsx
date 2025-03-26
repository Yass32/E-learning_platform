import { useState } from "react";
import CodeEditor from "../../../components/CodeEditor";
import OutputConsole from "../../../components/OutputConsole";
import ModuleBar from "../../../components/JvModuleBar";
import axios from "axios";
import CodeFeedback from "../../../components/CodeFeedback";
import { BiSolidRightArrow } from "react-icons/bi";
import { useParams } from "react-router-dom";
import PageButton from "../../../components/PageButton";

const JavaEx1 = () => {

  const { student_id } = useParams();


  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [hintVisibility, setHintVisibility] = useState(false);

  const code = `public class Exercise {

    public static String getDayName(int day) {
        String dayName = "";
        switch (day) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default:dayName = "Invalid day range";
        }

        return dayName;
    }

    public static void main(String[] args)
    {
        // System.out.println(getDayName(2));
        // Should print "Tuesday"

        // System.out.println(getDayName(6));
        // Should print "Saturday"
    }
  }`;

    /*
    const solution = `public static String getDayName(int day) {
        String dayName = "";
        switch (day) {
            case 1: dayName = "Monday"; break;
            case 2: dayName = "Tuesday"; break;
            case 3: dayName = "Wednesday"; break;
            case 4: dayName = "Thursday"; break;
            case 5: dayName = "Friday"; break;
            case 6: dayName = "Saturday"; break;
            case 7: dayName = "Sunday"; break;
            default:dayName = "Invalid day range";
        }

        return dayName;
    }`;
    */


  
    const handleRunCode = async (code) => {
    axios.post("http://localhost:3000/api/executecode", {
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
        axios.post("http://localhost:3000/api/autograde", {
          language: "java",
          code,
          testCases: [
            { input: "2", expectedOutput: "Tuesday" },
            { input: "6", expectedOutput: "Saturday" },
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
        <h2 className="text-2xl font-semibold mb-4 text-rose-700">Exercise 1</h2>
        <p className="text-gray-700 text-sm">Write a Java program that takes a number from the user and generates an integer between 1 and 7. It displays the weekday name.
For example: <br/>Input: 3 <br/> Output: Wednesday</p>
        <button className="flex items-center text-sm text-gray-600 hover:text-rose-700 focus:outline-none" onClick={() => setHintVisibility(!hintVisibility)}>
          <BiSolidRightArrow  className={`inline-block size- mr-1 transition-transform ${hintVisibility ? "rotate-90" : ""}`}/>
          <strong>Hint:</strong> 
        </button>
        {/* Hint Text with Slide-In Transition */}
        <div className={`transition-all duration-300 ease-in-out`}
          style={{ maxHeight: hintVisibility ? '100px' : '0', opacity: hintVisibility ? 1 : 0 }}>
          <div className="mt-1 text-xs text-gray-700">
            Use a switch statement to check the number and display the corresponding day of the week.
          </div>
        </div>
        <CodeEditor code={code} language="java" handleRunCode={handleRunCode} handleAutoGrade={handleAutoGrade}   />
        
      </div>
      <div className="w-2/5 p-8">
        <OutputConsole output={output} />
        <CodeFeedback feedback={feedback}/>
        <div className='flex justify-end mt-20'>
            <PageButton text="Next Exercise" url={`/${student_id}/javaex2`}/>
        </div>
      </div>
    </div>
  );
};

export default JavaEx1;
