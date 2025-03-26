import ModuleBar from '../../../../components/JsModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';

const JsM5Lesson1 = () => {
    const codeString = `console.log("Start");
setTimeout(() => console.log("This appears later"), 2000);
console.log("End");
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
                        <h2 className="text-3xl font-bold text-rose-700">Understanding Asynchronous JavaScript</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://youtu.be/qRW_n6tSccU"/> 
                    </div>


                    <section>
                        <div className="mt-8 ">
                            <p className="mt-2 font-semibold">What is Asynchronous Programming</p>
                            <p>Asynchronous programming allows JavaScript to Perform tasks without blocking the main thread; and handle time-consuming operations like API calls.</p>
                            <p className='font-medium mt-1 text-gray-600'>Example;</p>
                            <CodeSnippet codeString={codeString} language="javascript"/>
                            <p>The &quot;This appears later&quot; message apears after 2 seconds</p>
                        </div>
                    </section>

                    <section>
                        <div className="mt-8 ">
                            <p className="mt-2 font-semibold">What is Async/Await</p>
                            <p>Asynchronous programming allows JavaScript to Perform tasks without blocking the main thread; and handle time-consuming operations like API calls.</p>
                            <p className='font-medium mt-1 text-gray-600'>Syntax</p>
                            <CodeSnippet codeString={codeString3} language="javascript"/>
                            <p>The &quot;This appears later&quot; message apears after 2 seconds</p>
                        </div>
                    </section>

             




                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Practice Exercises</p>
                            <ol>
                                <li>1. What does asynchronous mean in JavaScript?</li> 
                                <li>2. What function delays execution in JavaScript?</li>
                                <li>3. Modify the above code to delay the message by 5 seconds.</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/javascript/module5/lesson2/`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JsM5Lesson1;