import { useState } from "react";
import CodeEditor from "../../../components/CodeEditor";
import OutputConsole from "../../../components/OutputConsole";
import ModuleBar from "../../../components/ModuleBar";
import axios from "axios";
import CodeFeedback from "../../../components/CodeFeedback";
import { BiSolidRightArrow } from "react-icons/bi";
import { useParams } from "react-router-dom";
import PageButton from "../../../components/PageButton";


const PythonEx2 = () => {
  const { student_id } = useParams();


  const [output, setOutput] = useState("");
  const [feedback, setFeedback] = useState([]);
  const [hintVisibility, setHintVisibility] = useState(false);


  const code = `#Write your function here

def max_num(nums):
  maximum = nums[0]
  for number in nums:
    if number > maximum:
      maximum = number
  return maximum


#Uncomment the line below when your function is done
#print(max_num([50, -10, 0, 75, 20]))`;


  /*
  const solution = `def max_num(nums):
maximum = nums[0]
for number in nums:
  if number > maximum:
    maximum = number
return maximum`;
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
        { input: '[50, -10, 0, 75, 20]', expectedOutput: "75" },
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
        <p className="text-gray-700 text-sm">Create a function named <code>max_num()</code> that takes a list of numbers named <code>nums</code>  as a parameter. The function should return the largest number in <code>nums</code>. The function should return the largest number in <code>nums</code></p>
        <button className="flex items-center text-sm text-gray-600 hover:text-rose-700 focus:outline-none" onClick={() => setHintVisibility(!hintVisibility)}>
          <BiSolidRightArrow  className={`inline-block size- mr-1 transition-transform ${hintVisibility ? "rotate-90" : ""}`}/>
          <strong>Hint:</strong> 
        </button>
        {/* Hint Text with Slide-In Transition */}
        <div className={`transition-all duration-300 ease-in-out`}
          style={{ maxHeight: hintVisibility ? '100px' : '0', opacity: hintVisibility ? 1 : 0 }}>
          <div className="mt-1 text-xs text-gray-700">
            Create a variable called <code>maximum</code> to track the max number, and have it start as the first element in the list. Loop through all of the numbers in the list, and if a number is ever greater than the current max number, the max number should be re-set to that number.
          </div>
        </div>

        <CodeEditor code={code} language="python" handleRunCode={handleRunCode} handleAutoGrade={handleAutoGrade}   />        
      </div>

      <div className="w-2/5 p-8">
        <OutputConsole output={output} />
        <CodeFeedback feedback={feedback}/>
        <div className='flex justify-end mt-20'>
            <PageButton text="Next Exercise" url={`/${student_id}/pythonex3`}/>
        </div>
      </div>
    </div>
  );
};

export default PythonEx2;


