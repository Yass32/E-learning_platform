import ModuleBar from '../../../../components/ModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
const PyM1Lesson1 = () => {
    const codeString = `print("Hello, World!")`;
    const { student_id } = useParams();


    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Python Basics</h2>   
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">What is Python?</p>
                            <p>Python is a high-level, interpreted programming language celebrated for its simplicity, readability, and versatility. Python offers a rich set of features that have contributed to its widespread popularity:</p>    
                        </div>
                        <ul className='list-disc ml-4'>
                            <li>Ease of Learning and Use</li>
                            <li>Interpreted Language</li>
                            <li>Dynamic Typing</li>
                            <li>Extensive Standard Library</li>
                            <li>Cross-Platform Compatibility</li>
                            <li>Community Support</li>
                        </ul>
                    </section>
        
                    

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">Applications of Python</p>                    
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                        <p>1. Web Development</p>
                        <p>2. Data Analysis and Visualization</p>
                        <p>3. Automation and Scripting </p>
                        <p>4. Artificial Intelligence and Machine Learning</p>
                        <p>5. Game Development</p>

                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Setting Up Python Environment</p>
                            <p className='text-gray-600 font-medium mt-1'>Installing Python</p>
                            <ol>
                                <li>1. Visit the official <a href='https://www.python.org/downloads/' className='text-rose-700 hover:underline'>Python website</a>.</li>
                                <li>2. Download the installer for your operating system (Windows, macOS, or Linux).</li>
                                <li>3. Run the installer:</li>
                                <ul className='list-disc ml-8'>
                                    <li>On Windows, ensure the option Add Python to PATH is selected.</li>
                                    <li>On macOS/Linux, follow the on-screen instructions for your terminal.</li>
                                </ul>
                            </ol>

                            <p className='text-gray-600 font-medium mt-1'>Installing an IDE</p>
                            <ul className='list-disc ml-4'>
                                <li>PyCharm:</li>
                                <ol>
                                    <li>1. Download from <a href='https://www.jetbrains.com/pycharm/download/?section=windows' className='text-rose-700 hover:underline'>JetBrains</a>.</li>
                                    <li>2. Install and configure it with your Python interpreter.</li>
                                </ol>
                                <li>VScode:</li>
                                <ol>
                                    <li>1. Download from <a href='https://code.visualstudio.com/Download' className='text-rose-700 hover:underline'>Visual Studio Code</a>.</li>
                                    <li>2. Install the Python extension for enhanced functionality.</li>
                                </ol>
                            </ul>

                            <p className='text-gray-600 font-medium mt-1'>Writing Your First Python Program</p>
                            <ol>
                                <li>1. Open your installed IDE.</li>
                                <li>2. Create a new file and save it as hello.py.</li>
                                <li>3. Write the following code:</li>
                                <CodeSnippet codeString={codeString}/>
                                <li>4. Run the file to see the output: Hello, World!</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/python/module1/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PyM1Lesson1;