import ModuleBar from '../../../../components/ModuleBar';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';


const PyM1Lesson2 = () => {
    const codeString = 'name = "Alice"       # A string variable \nage = 25             # An integer variable \nheight = 5.7         # A float variable \nis_student = True    # A boolean variable'
    const codeString2 = 'birth_year = input("Enter your birth year: ") \ncurrent_year = 2024 \nage = current_year - int(birth_year)  \nprint(f"You are {age} years old.")'
    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Variables & Data Types</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://www.youtube.com/watch?v=OH86oLzVzzw"/> 
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">What are variables</p>                    
                        </div>
                        <p>
                        A variable is a name assigned to a value stored in memory. Variables make it easy to reuse and manipulate data. In Python, variables are created when you assign a value to them:
                        </p>
                        <CodeSnippet codeString={codeString}/>
                    </section>
        
                    

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Basic Data Types</p>                    
                        </div>

                        <div className='grid grid-cols-2 gap-4'>
                        <p>1. String</p>
                        <p>2. Integers</p>
                        <p>3. Float </p>
                        <p>4. Boolean</p>
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">Practice Exercises</p>
                            <p className='text-gray-600 font-medium mt-1'>Open New File on your VScode</p>
                            <ol>
                                <li>1. Declare variables for the following:</li>
                                <ul className='list-disc ml-8'>
                                    <li>Your name as a string.</li>
                                    <li>Your age as an integer.</li>
                                    <li>Your height in meters as a float.</li>
                                    <li>Whether you are a student as a boolean.</li>
                                </ul>
                                <li>2. Use the type() function to check the types of these variables.</li>
                                <li>3. Convert the following:</li>
                                <ul className='list-disc ml-8'>
                                    <li>The string &quot;50&quot; to an integer.</li>
                                    <li>The number 20 to a string.</li>
                                    <li>The integer 1 to a boolean.</li>
                                </ul>
                                <li>4. Write a program that asks the user for their birth year, calculates their age, and prints the result:</li>
                                <CodeSnippet codeString={codeString2}/>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/python/module1/lesson1`}/>
                        <PageButton text="Next" url={`/${student_id}/python/module1/lesson3`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PyM1Lesson2;