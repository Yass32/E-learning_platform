import ModuleBar from '../../../../components/JsModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
const JsM1Lesson1 = () => {
    const codeString = `console.log("Running JavaScript in the browser!");`;
    const codeString1 = `//Create a file named script.js:
console.log("Hello from a JS file!");

//Link it in index.html:
<script src="script.js"></script>`;
    
    const { student_id } = useParams();


    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Introduction to JavaScript</h2>   
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">What is JavaScript?</p>
                            <p>JavaScript (JS) is a high-level, interpreted, and dynamically typed programming language primarily used for web development. It allows developers to add interactivity, handle user input, and manipulate web pages dynamically.</p>    
                        </div>
                    </section>
                    
        
                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">Why is JavaScript Important?</p>
                            <ul className='list-disc ml-4'>
                                <li>Client-side & server-side: JS runs in web browsers and backend (Node.js).</li>
                                <li>Cross-platform: Works on desktops, mobile devices, and web applications.</li>
                                <li>Event-driven: Responds to user actions like clicks, typing, and scrolling.</li>
                            </ul>                 
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Setting Up JavaScript Environment</p>
                            <p className='text-gray-600 font-medium mt-1'>Follow these steps</p>
                            <ol>
                                <li>1. Installing Node.js & VS Code. Visit the official Python website.</li>
                                <ul className='list-disc ml-8'>
                                    <li>Download and instal <a href='https://nodejs.org/en/download' className='text-rose-700 hover:underline'>Node.js</a></li>
                                    <li>Install <a href='https://code.visualstudio.com/Download' className='text-rose-700 hover:underline'>Visual Studio Code</a></li>
                                </ul>
                                <li>2. Running JavaScript</li>
                                <ul className='list-disc ml-8'>
                                    <li>In Browser Console: Open Developer Tools (F12 → Console) then Type:</li>
                                    <CodeSnippet codeString={codeString} language="javascript"/>
                                    <li>In a JavaScript File</li>
                                    <CodeSnippet codeString={codeString1} language="javascript"/>
                                </ul>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/javascript/module1/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JsM1Lesson1;