import ModuleBar from '../../../../components/JsModuleBar';
import PageButton from '../../../../components/PageButton';
import CodeSnippet from '../../../../components/CodeSnippet';
import { useParams } from 'react-router-dom';


const JsM4Lesson2 = () => {
    const codeString = `document.getElementById("title").innerText = "Updated Title!";
`;

    const codeString2 = `document.getElementById("title").style.color = "red";
`;

    const codeString3 = `let newParagraph = document.createElement("p");
newParagraph.innerText = "This is a new paragraph!";
document.body.appendChild(newParagraph);
`;

    const codeString4 = `document.getElementById("btn").addEventListener("click", function() {
    document.getElementById("title").innerText = "Button Clicked!";
});
`;
    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Selecting and Manipulating Elements</h2>   
                    </div>

                    


                    <section>
                        <p className="mt-6 font-semibold text-lg">Methods for Selecting Elements</p>
                        <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="overflow-x-auto">
                                <table className="table-auto mt-3 w-full border border-gray-300 rounded-lg text-left">
                                    <thead className="bg-gray-800 text-white">
                                        <tr>
                                            <th className="px-4 py-2 border border-gray-300">Method</th>
                                            <th className="px-4 py-2 border border-gray-300">Description</th>
                                            <th className="px-4 py-2 border border-gray-300">Example</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">getElementById</td>
                                            <td className="px-4 py-2 border border-gray-300">Selects an element by ID</td>
                                            <td className="px-4 py-2 border border-gray-300">document.getElementById(&quot;title&quot;)</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">getElementByClassName</td>
                                            <td className="px-4 py-2 border border-gray-300">Selects elements by class (returns a list)</td>
                                            <td className="px-4 py-2 border border-gray-300">document.getElementsByClassName(&quot;box&quot;)</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">querySelector</td>
                                            <td className="px-4 py-2 border border-gray-300">Selects the first matching element</td>
                                            <td className="px-4 py-2 border border-gray-300">document.querySelector(&quot;.container&quot;)</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Modifying Elements</p>
                            <p className='font-medium mt-2 text-gray-600'>Changing Text</p>
                            <CodeSnippet codeString={codeString} language="javascript"/>
                            <p className='font-medium mt-2 text-gray-600'>Changing Text</p>
                            <CodeSnippet codeString={codeString2} language="javascript"/>
                            <p className='font-medium mt-2 text-gray-600'>Changing Text</p>
                            <CodeSnippet codeString={codeString3} language="javascript"/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">Handling Events</p>
                            <p>What are Events?</p>
                            <ul className='list-disc ml-8'>
                                <li>Clicking a button <code>(click)</code></li>
                                <li>Typing in a form <code>(input, keydown)</code> </li>
                                <li>Moving the mouse <code>(mouseover)</code> </li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Handling Click Events</p>
                            <p>Changing Text on Button Click</p>
                            <CodeSnippet codeString={codeString4} language="javascript"/>
                        </div>
                    </section>



                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Practice Exercises</p>
                            <ol>
                                <li>1. What method selects the first element that matches a CSS selector?</li>
                                <li>2. How do you change the color of a text element in JavaScript?</li>
                                <li>3. How do you add an event listener to a button?</li>
                                <li>4. Write JavaScript code that changes the background color when a button is clicked.</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/javascript/module4/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JsM4Lesson2;