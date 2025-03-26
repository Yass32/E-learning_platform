import ModuleBar from '../../../../components/JvModuleBar';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
import CodeSnippet from '../../../../components/CodeSnippet';


const JvM1Lesson3 = () => {
    const codeString = `int a = 5, b = 10;
System.out.println(a + b * 2);
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
                        <h2 className="text-3xl font-bold text-rose-700">Java Operators</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://youtu.be/tx1QIp0P6W8"/> 
                    </div>

                    <section>
                        <div className="mt-6 ">
                            <p className="mt-2 font-semibold text-gray-600">Practice Exercises</p>
                            <ol>
                                <li>1. What is the difference between == and = in Java?</li>
                                <li>2. What will be the output of:</li>
                                <CodeSnippet codeString={codeString} language="java"/>
                                <li>3. Write a Java program to check if a number is even or odd using the modulus (%) operator.</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/java/module1/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JvM1Lesson3;