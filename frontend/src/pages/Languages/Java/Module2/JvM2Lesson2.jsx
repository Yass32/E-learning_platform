import ModuleBar from '../../../../components/JvModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';


const JvM2Lesson2 = () => {
    const codeString = `public class MathOperations {
    static int multiply(int a, int b) {
        return a * b;
    }

    static double multiply(double a, double b) {
        return a * b;
    }

    public static void main(String[] args) {
        System.out.println(multiply(5, 10));   // Calls int version
        System.out.println(multiply(2.5, 4.0)); // Calls double version
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
                        <h2 className="text-3xl font-bold text-rose-700">Method Overloading</h2>
                    </div>

                    <div className="mt-4 flex mx-auto">
                        <YouTubeEmbed  url="https://youtu.be/km8xnlSRtWg"/> 
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">Example of Method Overloading</p>  
                            <p>Method overloading allows multiple methods to have the same name but different parameters.</p>
                            <p className='font-medium mt-1 text-gray-600'>Example;</p>
                            <CodeSnippet codeString={codeString} language="java"/>
                            <p className='mt-2'>The <code>multiply()</code>  method is overloaded to handle both integers and doubles.</p>            
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold text-gray-600">Practice Exercises</p>
                            <ol>
                                <li>1. What is method overloading? How does it improve code flexibility?</li>
                                <li>2. Write a Java program that implements method overloading for finding the area of a square and a rectangle.</li>
                                <li>3. Modify the <code>multiply() </code> method to accept three numbers as arguments.</li>
                                <li>4. Write a method that returns the maximum of three numbers.</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/java/module2/lesson1`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JvM2Lesson2;