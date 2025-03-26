import ModuleBar from '../../../../components/JvModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
const JvM2Lesson1 = () => {
    const codeString = `// Creating a method
// that prints a message
public class Method {
    // Method to print message
    public void printMessage() {
        System.out.println("Hello, Geeks!");
    }

    public static void main(String[] args) {
        // Create an instance of the Method class
        Method m = new Method();
        m.printMessage();  // Calling the method
    }
}
`;

    const codeString2 = `public class Calculator {
    // This method takes two integers as arguments 
    // and returns their sum.
    static int add(int a, int b) {
        return a + b;
    }

    public static void main(String[] args) {
        // We call add(5, 10) inside main().
        int sum = add(5, 10); 
        System.out.println("Sum: " + sum);
    }
}
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
                        <h2 className="text-3xl font-bold text-rose-700">Defining Methods</h2>   
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">What is a Method?</p>  
                            <p>Java Methods are blocks of code that perform a specific task. A method allows us to reuse code, improving both efficiency and organization. All methods in Java must belong to a class. Methods are similar to functions and expose the behavior of objects.</p>
                            <CodeSnippet codeString={codeString} language="java"/>              
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Methods with Parameters</p>  
                            <p>Information can be passed to methods as a parameter. Parameters act as variables inside the method.
                                Parameters are specified after the method name, inside the parentheses. You can add as many parameters as you want, just separate them with a comma.
                            </p>
                            <CodeSnippet codeString={codeString2} language="java"/>              
                        </div>
                    </section>
        

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold text-gray-600">Practice Exercises</p>
                            <ol>
                                <li>1. What are the advantages of using methods in Java?</li>
                                <li>2. Write a Java program with a method that calculates the square of a number.</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/java/module2/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JvM2Lesson1