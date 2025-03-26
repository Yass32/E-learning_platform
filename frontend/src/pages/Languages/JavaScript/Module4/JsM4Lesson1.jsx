import ModuleBar from '../../../../components/JsModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
const JavaScriptM4Lesson1 = () => {
    const codeString = `<html>
    <body>
        <h1 id="title">Welcome</h1>
        <button id="btn">Click Me</button>
    </body>
</html>
`;
    const codeString2 = `Document
 └── <html>
      ├── <body>
      │    ├── <h1 id="title">Welcome</h1>
      │    ├── <button id="btn">Click Me</button>
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
                        <h2 className="text-3xl font-bold text-rose-700">Understanding the D.O.M</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://youtu.be/NO5kUNxGIu0"/> 
                    </div>

                    <section>
                        <div className="mt-8 ">
                            <p>The DOM is a tree-like representation of an HTML page that JavaScript can manipulate.</p>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Example:</p>
                            <p>Consider this HTML structure:</p>
                            <CodeSnippet codeString={codeString} language="html"/>       
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p>The DOM represents this as:</p>
                            <CodeSnippet codeString={codeString2} language="html"/>       
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Why is the DOM important?</p>
                            <p>With the DOM, JavaScript can:</p>
                            <ul className='list-disc ml-8'>
                                <li>Change text and styles dynamically.</li>
                                <li>Handle user interactions like clicks and input.</li>
                                <li>Add and remove elements in real time.</li>
                            </ul>
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Practice Exercises</p>
                            <ol>
                                <li>1. What is the DOM in JavaScript?</li>
                                <li>2. How does JavaScript interact with the DOM?</li>
                                <li>3. What method is used to select an element by its ID?</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/javascript/module4/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JavaScriptM4Lesson1;