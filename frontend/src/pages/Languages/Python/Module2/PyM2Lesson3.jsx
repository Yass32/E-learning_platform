import ModuleBar from '../../../../components/ModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';

const PyM2Lesson3 = () => {
    const codeString1 = 'squares = [x**2 for x in range(10)] \nprint(squares)  #[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]'
    const codeString2 = 'even_squares = {x: x**2 for x in range(10) if x % 2 == 0} \nprint(even_squares)  #{0: 0, 2: 4, 4: 16, 6: 36, 8: 64}' 
    const codeString3 = 'unique_squares = {x**2 for x in range(10)} \nprint(unique_squares)  #{0, 1, 4, 9, 16, 25, 36, 49, 64, 81}'
    const { student_id } = useParams();


    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Comprehensions</h2>   
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">What are Comprehensions</p>                    
                        </div>
                        <p>Comprehensions provide a concise way to construct new sequences (like lists, dictionaries, or sets) from existing iterables. This lesson focuses on list comprehensions, dictionary comprehensions, and set comprehensions.</p>
                        
                    </section>
        
                    

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">1. List Comprehensions</p>
                            <p>List comprehensions allow you to create lists in a single line of code by embedding a loop and an optional condition within square brackets.</p>
                            <CodeSnippet codeString={codeString1}/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">2. Dictionary Comprehensions</p>
                            <p>Dictionary comprehensions create dictionaries in a concise way, similar to list comprehensions, but using curly braces {}.</p>
                            <CodeSnippet codeString={codeString2}/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">3. Set Comprehensions</p>
                            <p>Set comprehensions create sets using curly braces {}. They are similar to list comprehensions but ensure that all elements are unique.</p>
                            <CodeSnippet codeString={codeString3}/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Practice Exercises</p>
                            <p className='text-gray-600 font-medium mt-1'>Open New File on your VScode</p>
                            <ol>
                                <li>1. Create a list of cubes for numbers from 1 to 10.</li>
                                <li>2. Create a dictionary mapping numbers to their factorials (e.g., {'{'} 1: 1, 2: 2, 3: 6, ... {'}'}).</li>
                                <li>3. Create a set of all unique characters in a given string.</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/python/module2/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
      
    );
};

export default PyM2Lesson3;