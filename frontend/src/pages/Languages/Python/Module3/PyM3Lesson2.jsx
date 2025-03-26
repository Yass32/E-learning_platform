import ModuleBar from '../../../../components/ModuleBar';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';


const PyM3Lesson2 = () => {

    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Python Modules</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://youtu.be/1RuMJ53CKds"/> 
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Practice Exercises</p>
                            <p className='font-medium mt-1 text-gray-600'>Open New File on your VScode</p>
                            
                            <ol>
                                <li>1. Write a script to list all files and directories in the current working directory using os.listdir().</li>
                                <li>2. Create and remove a directory named test_folder.</li>
                                <li>3. Write a function that calculates the area of a circle using math.pi.</li>
                                <li>4. Use math.factorial to find the factorial of 5.</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/python/module3/lesson1`}/>
                        <PageButton text="Next" url={`/${student_id}/python/module3/lesson3`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PyM3Lesson2;