import { useState } from "react";
import CodeEditor from "../../../components/CodeEditor";
import OutputConsole from "../../../components/OutputConsole";
import ModuleBar from "../../../components/JvModuleBar";
import axios from "axios";
import CodeFeedback from "../../../components/CodeFeedback";
import { BiSolidRightArrow } from "react-icons/bi";
import { useParams } from "react-router-dom";
import PageButton from "../../../components/PageButton";


const JavaEx2 = () => {
  const { student_id } = useParams();


  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [hintVisibility, setHintVisibility] = useState(false);


  const code = `public class Exercise {

    static void isUgly(int n) {
      int x = 0;
        while (n != 1) {
          if (n % 5 == 0) {
              n /= 5;
          } else if (n % 3 == 0) {
              n /= 3;
          } else if (n % 2 == 0) {
              n /= 2;
          } else {
              System.out.print("It is not an ugly number.");
              x = 1;
              break;
          }
        }
        if (x==0)
          System.out.print("It is an ugly number.");
    }

    public static void main(String[] args){
        // isUgly(235);
        // Should print "It is not an ugly number."
    }
  }`;


  /*
  const solution = `static void isUgly(int n) {
      int x = 0;
        while (n != 1) {
          if (n % 5 == 0) {
              n /= 5;
          } else if (n % 3 == 0) {
              n /= 3;
          } else if (n % 2 == 0) {
              n /= 2;
          } else {
              System.out.print("It is not an ugly number.");
              x = 1;
              break;
          }
        }
        if (x==0)
          System.out.print("It is an ugly number.");
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
        { input: '235', expectedOutput: "It is not an ugly number."},
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
        <h2 className="text-2xl font-semibold mb-4 text-rose-700">Exercise 2</h2>
        <p className="text-gray-700 text-sm">Write a Java program to check whether a given number is ugly. An ugly number is a positive number whose prime factors only include 2, 3, or 5.
        </p>
        <button className="flex items-center text-sm text-gray-600 hover:text-rose-700 focus:outline-none" onClick={() => setHintVisibility(!hintVisibility)}>
          <BiSolidRightArrow  className={`inline-block size- mr-1 transition-transform ${hintVisibility ? "rotate-90" : ""}`}/>
          <strong>Hint:</strong> 
        </button>
        {/* Hint Text with Slide-In Transition */}
        <div className={`transition-all duration-300 ease-in-out`}
          style={{ maxHeight: hintVisibility ? '100px' : '0', opacity: hintVisibility ? 1 : 0 }}>
          <div className="mt-1 text-xs text-gray-700">
             For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.
          </div>
        </div>

        <CodeEditor code={code} language="java" handleRunCode={handleRunCode} handleAutoGrade={handleAutoGrade}   />        
      </div>

      <div className="w-2/5 p-8 overflow-y-auto">
        <OutputConsole output={output} />
        <CodeFeedback feedback={feedback}/>
        <div className='flex justify-end mt-20'>
            <PageButton text="Next Exercise" url={`/${student_id}/javaex3`}/>
        </div>
      </div>
    </div>
  );
};

export default JavaEx2;


