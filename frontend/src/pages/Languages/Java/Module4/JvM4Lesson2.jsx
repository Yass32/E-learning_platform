import ModuleBar from '../../../../components/JvModuleBar';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';


const JvM4Lesson2 = () => {
    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Throwing Custom Exceptions</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://youtu.be/OIozDnGYqIU"/> 
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Practice Exercises</p>
                            <ol>
                                <li>1. What is the purpose of exception handling in Java?</li>
                                <li>2. What is the difference between checked and unchecked exceptions?</li>
                                <li>3. Write a Java program to catch an <code>ArrayIndexOutOfBoundsException</code>.</li>
                                <li>4. What is the difference between <code>ArithmeticException</code> and <code>ArrayIndexOutOfBoundsException</code>?</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/java/module4/lesson2`}/>
                        <PageButton text="Start Quiz" url={`/${student_id}/jvquizpage`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JvM4Lesson2;