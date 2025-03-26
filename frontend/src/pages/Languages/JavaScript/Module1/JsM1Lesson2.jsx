import ModuleBar from '../../../../components/JsModuleBar';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';


const JsM1Lesson2 = () => {
    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Uses of JavaScript</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://www.youtube.com/watch?v=UGRUevyHAe4"/> 
                    </div>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/javascript/module1/lesson1`}/>
                        <PageButton text="Next" url={`/${student_id}/javascript/module2/lesson1`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JsM1Lesson2;