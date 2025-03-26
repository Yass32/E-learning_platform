import ModuleBar from '../../../../components/ModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
const PyM3Lesson1 = () => {
    const codeString = '# General syntax of a function \ndef function_name(parameters): \n    """Optional documentation string (docstring).""" \n    # Code block \n    return value  # Optional return statement';
    const codeString2 = 'def square(number): \n    """Returns the square of a number.""" \n    return number ** 2 \n\n# Calling the function \nresult = square(4)\nprint(result)  #Output: 16'
    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Functions</h2>   
                    </div>

                    <section>
                        <div className="mt-8 ">
                            <p>Functions are reusable blocks of code that perform a specific task. They help organize code, reduce redundancy, and improve readability. Functions in Python are defined using the def keyword, followed by the function name and parentheses.</p>
                        </div>
                    </section>
        

                    <section>
                        <div className="mt-4 ">
                            <p className='font-medium mt-1'>Defining Functions</p>
                            <CodeSnippet codeString={codeString}/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">Function Arguements</p>
                            <p>Functions can accept arguments (inputs) to process specific data. Types of arguements:</p>                
                        </div>
                        <ul className='list-disc ml-8'>
                            <li>Positional Arguments: Arguments passed in order.</li>
                            <li>Keyword Arguments: Arguments passed by explicitly naming the parameter.</li>
                            <li>Default Arguments: Arguments with a default value if none is provided.</li>
                            <li>Variable-length Arguments: Accept an arbitrary number of arguments.</li>
                        </ul>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className='font-medium mt-1 text-gray-600'>Returning Values</p>
                            <p>Functions can return values using the return statement</p>
                            <CodeSnippet codeString={codeString2}/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Practice Exercises</p>
                            <p className='font-medium mt-1 text-gray-600'>Open New File on your VScode</p>
                            <ol>
                                <li>1. Write a function multiply that takes two positional arguments and returns their product.</li>
                                <li>2. Write a function describe_city that takes a city&apos;s name and country as keyword arguments and prints &quot;City is in Country&quot;.</li>
                                <li>3. Write a function power that takes a number and an optional exponent (default is 2) and returns the result.</li>
                                <li>4. Write a function average that takes a variable number of numerical arguments and returns their average.</li>
                                <li>5. Write a function min_max that takes a list of numbers and returns the smallest and largest numbers.</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/python/module3/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PyM3Lesson1