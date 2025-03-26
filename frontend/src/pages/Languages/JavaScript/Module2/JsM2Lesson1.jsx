import ModuleBar from '../../../../components/JsModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
const JsM2Lesson1 = () => {
    const codeString = `let name = "Alice";  // String
let age = 25;        // Number
let isStudent = true; // Boolean
let x = null;         // Null
let y; // Undefined
let sym = Symbol("symbol"); // Symbol
let fruits = ["apple", "banana", "cherry"]; // Array
let person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"}; // Object
function myFunction(a, b) { return a * b; } // Function`;
    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Variables & Data Types</h2>   
                    </div>

                    <section>
                        <div className="mt-8 ">
                            <p>A variable is a container that stores a value. In JavaScript, we use var, let, and const to declare variables.</p>
                        </div>
                        <ul className='list-disc ml-8'>
                            <li><code>let</code> → Used for changeable values.</li>
                            <li><code>const</code> → Used for constant (unchangeable) values.</li>
                        </ul>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">Data Types</p>  
                            <p>JavaScript has two categories of data types:</p>                  
                        </div>
                        <ul className='list-disc ml-8'>
                            <li>Primitive (stores single values): string, number, boolean, null, undefined, symbol.</li>
                            <li>Reference (stores objects and collections): array, object, function</li>
                        </ul>
                    </section>
        
                    <section>
                        <div className="mt-4">
                            <p className='font-medium mt-1 text-gray-600'>Example;</p>
                            <CodeSnippet codeString={codeString} language="javascript"/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Practice Exercises</p>
                            <ol>
                                <li>1. What is the difference between let and const?</li>
                                <li>2. What type of value is null in JavaScript?</li>
                                <li>3. When is a variable undefined and when is a variable null</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/javascript/module2/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JsM2Lesson1