import CodeSnippet from '../../../../components/CodeSnippet';
import ModuleBar from '../../../../components/JvModuleBar';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';


const JsM1Lesson2 = () => {
    const codeString = `int num = 10;
double newNum = num; // Implicit casting (int → double)
`;

    const codeString2 = `double pi = 3.14159;
int newPi = (int) pi; // Explicit casting (double → int)
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
                        <h2 className="text-3xl font-bold text-rose-700">Syntax & Data Types</h2>   
                    </div>


                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold ">Java Syntax Rules</p>
                            <ul className='list-disc ml-4'>
                                <li>Java is case-sensitive (MyVariable and myvariable are different).</li>
                                <li>Every Java program must be inside a class.</li>
                                <li>Every statement ends with a semicolon (;).</li>
                                <li>The main() method is the entry point for execution.</li>
                            </ul>                 
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold text-gray-600">Variables in Java</p>
                            <p>A variable is used to store data in Java.</p>
                            <CodeSnippet codeString={`datatype variableName = value;`} language="java"/>
                        </div>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold text-gray-600">Constants in Java</p>
                            <p>A constant is a variable whose value cannot change. Java uses the <code>final</code> keyword to declare constants.</p>
                            <CodeSnippet codeString={`final double PI = 3.14159;`} language="java"/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold text-gray-600">Java Data Types</p>
                            <p className='mt-1'>Java has two main types of data:</p>
                            <ol> 
                                <li>1. Primitive Data Types (Basic Types)</li>
                                <ul className='list-disc ml-8'>
                                    <li><code>int</code>  → Integer numbers (e.g., 10, -5)</li>
                                    <li><code>double</code>  → Floating-point numbers (e.g., 3.14, 0.98)</li>
                                    <li><code>char</code>  → Single character (e.g., &apos;A&apos;, &apos;b&apos;)</li>
                                    <li><code>boolean</code>  → True/False values</li>
                                </ul>
                                <li>2. Non-Primitive Data Types (Reference Types)</li>
                                <ul className='list-disc ml-8'>
                                    <li><code>String</code>  → A sequence of characters</li>
                                    <li><code>Array</code>  → A collection of values</li>
                                    <li><code>Class, Interface</code>  → Used in OOP</li>
                                </ul>
                            </ol>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Type Conversion and Casting</p>
                            <p>Java allows implicit (automatic) and explicit (manual) conversion between types.</p>
                        </div>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold text-gray-600">Implicit Type Conversion (Widening Casting)</p>
                            <p>Smaller types (e.g., int) can be automatically converted to larger types (e.g., double).</p>
                            <CodeSnippet codeString={codeString} language="java"/>
                        </div>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold text-gray-600">Explicit Type Conversion (Narrowing Casting)</p>
                            <p>Larger types need to be manually converted into smaller types.</p>
                            <CodeSnippet codeString={codeString2} language="java"/>
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Practice Exercises</p>
                            <ol>
                                <li>1. What are the differences between primitive and non-primitive data types?</li>
                                <li>2. What is the default value of an int variable in Java?</li>
                                <li>3. Write a Java program to store your name, age, and favorite number in variables and print them.</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/java/module1/lesson1`}/>
                        <PageButton text="Next" url={`/${student_id}/java/module1/lesson3`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JsM1Lesson2;