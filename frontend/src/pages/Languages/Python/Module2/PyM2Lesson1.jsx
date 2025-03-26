import ModuleBar from '../../../../components/ModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
const PyM2Lesson1 = () => {
    const codeString = '# Define a variable \nnumber = 10 \n# Check the value of the variable \nif number > 0: \n    print("The number is positive.") \nelif number == 0: \n    print("The number is zero.") \nelse: \n    print("The number is negative.") ';
    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Conditional Statements</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://youtu.be/eKz_kf2ZbME"/> 
                    </div>

                    <section>
                        <div className="mt-8 ">
                            <p>Conditional statements allow a program to execute certain pieces of code based on specified conditions. They form the foundation of decision-making in programming.</p>
                            <p>Conditional keywords in Python:</p> 
                        </div>
                        <ul className='list-disc ml-4'>
                            <li>if: Executes a block of code if the condition is True.</li>
                            <li>elif (else if): Checks another condition if the previous one is False.</li>
                            <li>else: Executes a block of code if none of the conditions are True.</li>
                        </ul>
                    </section>
        

                    <section>
                        <div className="mt-2">
                            <p className='font-medium mt-1 text-gray-600'>Example;</p>
                            <CodeSnippet codeString={codeString}/>
                        </div>
                    </section>

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/python/module2/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PyM2Lesson1