import ModuleBar from '../../../../components/JvModuleBar';
import PageButton from '../../../../components/PageButton';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import { useParams } from 'react-router-dom';

const JvM3Lesson3 = () => {

    const { student_id } = useParams();


    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Interfaces & Abstract Class</h2>   
                    </div>

                    <section>
                        <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://youtu.be/w7qNBi6RRY4"/> 
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Practice Exercises</p>                            
                            <ol>
                                <li>1. What is the difference between an interface and an abstract class?</li>
                                <li>2. Write a Java interface for a &quot;Shape&quot; with a method <code>area()</code> .</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/java/module3/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
      
    );
};

export default JvM3Lesson3