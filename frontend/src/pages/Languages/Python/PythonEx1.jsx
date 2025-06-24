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

const PythonEx1 = () => {
  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [hintVisibility, setHintVisibility] = useState(false);
  const [hint, setHint] = useState("");

  const { student_id } = useParams();


  const code = `# Write your same_name function here: 
def same_name(your_name, my_name):
  # Write your code here

# Uncomment these function calls to test your same_name function:
#print(same_name('Colby', 'Colby'))
# should print True
#print(same_name('Tina', 'Amber'))
# should print False`;

    /*
    const solution = `def same_name(your_name, my_name):
      return your_name==my_name`;
    */



    useEffect(() => {
      const fetchHint = async () => {
        try {
          const response = await axios.post(`${VITE_BACKEND_URL}/api/hint`, { code });
          console.log("Hint response:", response.data);
          setHint(response.data.hint);
        } catch (error) {
          console.error("Error getting hint:", error);
          if (error.response?.status === 429) {
            console.log("Rate limit exceeded. Try again later or upgrade your plan.");
            setHint("In Python, strings can be compared using the <code>==</code> operator.")
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
            { input: "Colby\nColby", expectedOutput: "True" },
            { input: "Tina\nAmber", expectedOutput: "False" },
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
        <h2 className="text-3xl font-semibold mb-4 text-rose-700">Exercise 1</h2>
        <p className="text-gray-700">Create a function named <code>same_name()</code> that has two parameters named <code>your_name</code> and <code>my_name</code>. If our names are identical, return <code>True</code>. Otherwise, return <code>False</code>.</p>
        <AIHint hint={hint} setHintVisibility={setHintVisibility} hintVisibility={hintVisibility} />
        <CodeEditor code={code} language="python" handleRunCode={handleRunCode} handleAutoGrade={handleAutoGrade}   />
        
      </div>
      <div className="w-2/5 p-8">
        <OutputConsole output={output} />
        <CodeFeedback feedback={feedback}/>
        <div className='flex justify-end mt-20'>
            <PageButton text="Next Exercise" url={`/${student_id}/pythonex2`}/>
        </div>
      </div>
    </div>
  );
};

export default PythonEx1;
