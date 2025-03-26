import ModuleBar from '../../../../components/JsModuleBar';
import PageButton from '../../../../components/PageButton';
import CodeSnippet from '../../../../components/CodeSnippet';
import { useParams } from 'react-router-dom';


const JsM5Lesson2 = () => {
    const codeString = `function greet(name, callback) {
    console.log("Hello " + name);
    callback();
}
greet("Alice", () => console.log("Callback executed!"));
`;

    const codeString2 = `let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data loaded!"), 3000);
});

fetchData.then(console.log).catch(console.error);
`;

    const codeString3 = `async function fetchData() {
    return "Data received!";
}
async function main() {
    let data = await fetchData();
    console.log(data);
}
main();
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
                        <h2 className="text-3xl font-bold text-rose-700">Promises & Callbacks</h2>   
                    </div>

                    <section>
                        <div className="mt-8 ">
                            <p className="mt-2 font-semibold">What is Callback?</p>
                            <p>A callback function is a function passed as an argument to another function.</p>
                            <p className='font-medium mt-1 text-gray-600'>Example;</p>
                            <CodeSnippet codeString={codeString} language="javascript"/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-8 ">
                            <p className="mt-2 font-semibold">What is a Promise?</p>
                            <p>A Promise is an object representing a future operation that might succeed or fail.</p>
                            <p className='font-medium mt-1 text-gray-600'>Example;</p>
                            <CodeSnippet codeString={codeString2} language="javascript"/>
                            <p>The message &quot;Data loaded!&quot; appears after 3 seconds</p>
                        </div>
                    </section>

                    <section>
                        <div className="mt-8 ">
                            <p className="mt-2 font-semibold">What is Async/Await?</p>
                            <p><code>async/await</code> makes asynchronous code look more like synchronous code.</p>
                            <p className='font-medium mt-1 text-gray-600'>Example;</p>
                            <CodeSnippet codeString={codeString3} language="javascript"/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Practice Exercises</p>
                            <ol>
                                <li>1. What is a callback function?</li> 
                                <li>2. What are the three states of a Promise?</li>
                                <li>3. How is await different from .then()?</li>
                                <li>4. Write a function that takes a number and a callback function, then doubles the number inside the callback.</li>
                            </ol>
                        </div>
                    </section>


                    




                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/javascript/module5/lesson1/`}/>
                        <PageButton text="Start Quiz" url={`/${student_id}/jsquizpage`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JsM5Lesson2