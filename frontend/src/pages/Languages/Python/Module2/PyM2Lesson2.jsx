import ModuleBar from '../../../../components/ModuleBar';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';


const PyM2Lesson2 = () => {
    const codeString = 'for number in range(10): \n    if number == 7: \n        print("Found lucky number 7!") \n        break \n    elif number % 2 == 0: \n        continue \n    print(f"Odd number: {number}")'
    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Loops</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://youtu.be/jchkIsMyjr8"/> 
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">Type of loops</p>                    
                        </div>
                        <ul className='list-disc ml-8'>
                            <li>The for loop is used to iterate over a sequence (e.g., list, tuple, string) or a range of numbers.</li>
                            <li>The while loop repeats a block of code as long as the given condition is True.</li>
                        </ul>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">Control Statements</p>                    
                        </div>
                        <ul className='list-disc ml-8'>
                            <li>break Statement exits the loop prematurely when a certain condition is met.</li>
                            <li>continue Statement skips the current iteration and proceeds to the next one.</li>
                            <li>pass Statement does nothing and serves as a placeholder.</li>
                        </ul>
                        <p className='mt-4'>Example combining break and continue;</p>
                        <CodeSnippet codeString={codeString}/>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Practice Exercises</p>
                            <p className='text-gray-600 font-medium mt-1'>Open New File on your VScode</p>
                            <ol>
                                <li>1. Write a for loop to calculate the sum of all numbers in a list.</li>
                                <li>2. Write a program that uses a while loop to find the factorial of a number.</li>
                                <li>3. Use break and continue in a program to ask the user for integers until they enter -1. Skip any numbers that are not divisible by 3.</li>
                                <li>4. Create a multiplication table using nested loops.</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/python/module2/lesson1`}/>
                        <PageButton text="Next" url={`/${student_id}/python/module2/lesson3`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PyM2Lesson2;