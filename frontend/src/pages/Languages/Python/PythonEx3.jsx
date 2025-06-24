import { useState, useEffect } from "react";
import CodeEditor from "../../../components/CodeEditor";
import OutputConsole from "../../../components/OutputConsole";
import ModuleBar from "../../../components/ModuleBar";
import axios from "axios";
import CodeFeedback from "../../../components/CodeFeedback";
import { useParams } from "react-router-dom";
import PageButton from "../../../components/PageButton";
import AIHint from "../../../components/AIHint";

const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

const PythonEx3 = () => {
  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [hintVisibility, setHintVisibility] = useState(false);
  const [hint, setHint] = useState("");

  const { student_id } = useParams();


  const code = `# Write your lots_of_math function here:

def lots_of_math(a, b, c, d):
  # Write your code here

  
# Uncomment these function calls to test your lots_of_math function:
# print(lots_of_math(1, 2, 3, 4))
# should print 3, -1, -3, 0
# print(lots_of_math(1, 1, 1, 1))
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


    useEffect(() => {
      const fetchHint = async () => {
        try {
          console.log(typeof(code));
          console.log("Fetching hint for code:", code);
          const response = await axios.post(`${VITE_BACKEND_URL}/api/hint`, { code });
          console.log("Hint response:", response.data);
          setHint(response.data.hint);
        } catch (error) {
          console.error("Error getting hint:", error);
          if (error.response?.status === 429) {
            console.log("Rate limit exceeded. Try again later or upgrade your plan.");
            setHint("You can store the result of each mathematical operation into a variable and use them as the results in step 4. For example: <code>first_result = a + b</code>. Also, remember that you can take the modulo of a number with %.");
          }
        }
      };

      if (hintVisibility) {
        fetchHint();
      }
    }, [hintVisibility]);
  
    const handleRunCode = async (code) => {
    axios.post(`${VITE_BACKEND_URL}/api/executecode`, {
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
        axios.post(`${VITE_BACKEND_URL}/api/autograde`, {
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
        <h2 className="text-3xl font-semibold mb-4 text-rose-700">Exercise 3</h2>
        <p className="text-gray-700">Create a function named <code>lots_of_math()</code>that has 4 parameters named <code>a</code>, <code>b</code>, <code>c</code>, and <code>d</code>. The function should print 3 lines and return 1 value. First, print the sum of <code>a</code> and <code>b</code>. Second, print <code>c</code> minus <code>d</code>. Third, print the first number printed, multiplied by the second number printed. Finally, return the third number printed modulo <code>a</code>.</p>
        <AIHint hint={hint} setHintVisibility={setHintVisibility} hintVisibility={hintVisibility} />
        <CodeEditor code={code} language="python" handleRunCode={handleRunCode} handleAutoGrade={handleAutoGrade}/>
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
