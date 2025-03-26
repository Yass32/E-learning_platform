import ModuleBar from '../../../../components/JvModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
import ImageCarousel from '../../../../components/ImageCarousel';
const JvM4Lesson1 = () => {
    const codeString = `// Java program to demonstrates handling
// the exception using try-catch block
import java.io.*;

class Geeks {
    public static void main(String[] args)
    {
        int n = 10;
        int m = 0;

        try {
            // Code that may throw an exception
            int ans = n / m;
            System.out.println("Answer: " + ans);
        }
        catch (ArithmeticException e) {
            // Handling the exception
            System.out.println(
                "Error: Division by zero is not allowed!");
        }
        finally {
            System.out.println(
                "Program continues after handling the exception.");
        }
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
                        <h2 className="text-3xl font-bold text-rose-700">Exception Handling in Java</h2>  
                        <p className='mt-4'>Exception handling in Java allows developers to effectively manage runtime errors using mechanisms such as .allows developers to manage runtime errors effectively by using mechanisms like try-catch block , finally block , throwing Exceptions , Custom Exception handling, etc.</p> 
                        <p className='mt-4'>An Exception is an unwanted or unexpected event that occurs during the execution of a program (ie, at runtime ) and disrupts the normal flow of the program&apos;s instructions. It occurs when something unexpected things happen, like accessing an invalid index, dividing by zero, or trying to open a file that does not exist.</p>
                    </div>

                    <section>
                        <div className="mt-8 w-full">
                            <ImageCarousel/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Example:</p>
                            <CodeSnippet codeString={codeString} language="java"/>       
                        </div>
                    </section>


                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/java/module4/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JvM4Lesson1;