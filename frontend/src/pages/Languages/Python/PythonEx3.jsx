import { useState } from "react";
import CodeEditor from "../../../components/CodeEditor";
import OutputConsole from "../../../components/OutputConsole";
import ModuleBar from "../../../components/ModuleBar";
import axios from "axios";
import CodeFeedback from "../../../components/CodeFeedback";
import { BiSolidRightArrow } from "react-icons/bi";
import { useParams } from "react-router-dom";
import PageButton from "../../../components/PageButton";

const PythonEx3 = () => {
  const { student_id } = useParams();


  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [hintVisibility, setHintVisibility] = useState(false);

  const code = `# Write your lots_of_math function here:

def lots_of_math(a, b, c, d):
  first = a + b
  second = c - d
  third = first * second
  fourth = third % a
  print(first)
  print(second)
  print(third)
  return fourth
# Uncomment these function calls to test your lots_of_math function:
#print(lots_of_math(1, 2, 3, 4))
# should print 3, -1, -3, 0
#print(lots_of_math(1, 1, 1, 1))
# should print 2, 0, 0, 0`;

/*
const solution = `def lots_of_math(a, b, c, d):
  first = a + b
  second = c - d
  third = first * second
  fourth = third % a
  print(first)
  print(second)
  print(third)
  return fourth`;
*/
  
    const handleRunCode = async (code) => {
    axios.post("http://localhost:3000/api/executecode", {
      language: "python",
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
          language: "python",
          code,
          testCases: [
            { input: "1\n2\n3\n4", expectedOutput: "3\n-1\n-3\n0" },
            { input: "1\n1\n1\n1", expectedOutput: "2\n0\n0\n0" },
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

  

  return (
    <div className="flex h-screen bg-gray-100">
      <ModuleBar />
      <div className="flex flex-col w-3/5 p-8 overflow-y-auto">
        <h2 className="text-2xl font-semibold mb-4 text-rose-700">Exercise 3</h2>
        <p className="text-gray-700 text-sm">Create a function named <code>lots_of_math()</code>that has 4 parameters named <code>a</code>, <code>b</code>, <code>c</code>, and <code>d</code>. The function should print 3 lines and return 1 value. First, print the sum of <code>a</code> and <code>b</code>. Second, print <code>c</code> minus <code>d</code>. Third, print the first number printed, multiplied by the second number printed. Finally, return the third number printed modulo <code>a</code>.</p>
        <button className="flex items-center text-sm text-gray-600 hover:text-rose-700 focus:outline-none" onClick={() => setHintVisibility(!hintVisibility)}>
          <BiSolidRightArrow  className={`inline-block size- mr-1 transition-transform ${hintVisibility ? "rotate-90" : ""}`}/>
          <strong>Hint:</strong> 
        </button>
        {/* Hint Text with Slide-In Transition */}
        <div className={`transition-all duration-300 ease-in-out`}
          style={{ maxHeight: hintVisibility ? '100px' : '0', opacity: hintVisibility ? 1 : 0 }}>
          <div className="mt-1 text-xs text-gray-700">
            You can store the result of each mathematical operation into a variable and use them as the results in step 4. For example: <code>first_result = a + b</code>. Also, remember that you can take the modulo of a number with %.
          </div>
        </div>
        <CodeEditor code={code} language="python" handleRunCode={handleRunCode} handleAutoGrade={handleAutoGrade}   />
        
      </div>
      <div className="w-2/5 p-8 overflow-y-auto">
        <OutputConsole output={output} />
        <CodeFeedback feedback={feedback}/>
        <div className='flex justify-end mt-20'>
            <PageButton text="Complete Course" url={`/${student_id}/profilepage`}/>
        </div>
      </div>
    </div>
  );
};

export default PythonEx3;
