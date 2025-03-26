import ModuleBar from '../../../../components/JvModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
const JvM1Lesson1 = () => {
    const codeString = `public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}`;
    
    const { student_id } = useParams();


    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Java Basics</h2>   
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">What is Java?</p>
                            <p>Java is a high-level, object-oriented programming language developed by James Gosling at Sun Microsystems in 1995. It is one of the most widely used languages for building applications across multiple platforms. Java follows the principle of &quot;Write Once, Run Anywhere&quot; (WORA) due to the Java Virtual Machine (JVM), which allows Java programs to run on any operating system without modification.</p>    
                        </div>
                    </section>
                    
        
                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Key Features of Java</p>
                            <ul className='list-disc ml-4'>
                                <li><span className='font-medium'>Platform Independence:</span> Java code runs on any OS (Windows, Linux, Mac) via the JVM.</li>
                                <li><span className='font-medium'>Object-Oriented:</span> Everything in Java is based on classes and objects.</li>
                                <li><span className='font-medium'>Robust and Secure:</span> Java has built-in security features like the Security Manager and exception handling.</li>
                                <li><span className='font-medium'>Automatic Memory Management:</span> Uses Garbage Collection to handle memory allocation.</li>
                                <li><span className='font-medium'>Multithreading:</span> Java allows multiple threads to run simultaneously for faster execution.</li>
                            </ul>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Applications of Java</p>
                            <ul className='list-disc ml-4'>
                                <li>Web Applications: Using frameworks like Spring, Hibernate.</li>
                                <li>Mobile Applications: Android development with Java and Kotlin.</li>
                                <li>Enterprise Applications: Banking and e-commerce systems.</li>
                                <li>Game Development: Popular for Android games.</li>
                            </ul>                 
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold text-gray-600">Setting Up Java Environment</p>
                            <p className='font-medium mt-1'>Before writing Java code, you need to set up a Java development environment.</p>
                            <ol> 
                                <li>1. Install Java Development Kit (JDK)</li>
                                <ul className='list-disc ml-8'>
                                    <li>Download JDK from <a href='https://www.oracle.com/java/technologies/downloads/?er=221886' className='text-rose-700 hover:underline'>Oracle</a>  website or install OpenJDK.</li>
                                    <li>Install it and set up the JAVA_HOME environment variable.</li>
                                </ul>
                                <li>2. Install an IDE (Integrated Development Environment)</li>
                                <ul className='list-disc ml-8'>
                                    <li>IntelliJ IDEA (Best for professional development)</li>
                                    <li>Eclipse (Popular for enterprise development)</li>
                                    <li>VSCode with Java Extensions</li>
                                </ul>
                            </ol>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">Writing Your First Java Program</p>
                            <p>Let us write a simple &quot;Hello, World!&quot; program in Java.</p>
                            <CodeSnippet codeString={codeString} language="java"/>
                            <div className="mt-4 ">
                                <p className="mt-2 font-semibold text-gray-600">Explanation</p>
                                <ul className='list-disc ml-4'>
                                    <li><code>public class HelloWorld</code> → Defines a class named HelloWorld.</li>
                                    <li><code>public static void main(String[] args)</code> → This is the main method, which acts as the entry point for Java programs.</li>
                                    <li><code>System.out.println(&quot;Hello, World!&quot;);</code> → Prints text to the console.</li>
                                </ul>                 
                            </div>

                        </div>
                    </section>

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/java/module1/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JvM1Lesson1;