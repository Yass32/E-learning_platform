import ModuleBar from '../../../../components/ModuleBar';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import PageButton from '../../../../components/PageButton';
import CodeSnippet from '../../../../components/CodeSnippet';
import { useParams } from 'react-router-dom';


const PyM4Lesson2 = () => {
    const codeString = '# Empty dictionary \nmy_dict = {} \n \n# Dictionary with elements \nmy_dict = {"name": "Alice", "age": 25, "is_student": True}';
    const codeString2 = '# Empty tuple \nmy_tuple = () \n \n# Tuple with elements \nmy_tuple = (1, 2, 3, "apple", True)';
    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Dictionaries & Sets</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://youtu.be/sZ_KUpt-zus"/> 
                    </div>

                    <section>
                        <div className="mt-8 ">
                            <p>Dictionaries and sets are essential data structures in Python, each serving unique purposes. Dictionaries allow you to store key-value pairs for fast lookups, while sets store unordered, unique elements, making them ideal for operations involving distinct data.</p>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Dictionaries</p>
                            <p>A dictionary in Python is an unordered collection of key-value pairs. Keys must be unique and immutable (e.g., strings, numbers, tuples), whereas values can be of any data type.</p>
                            <CodeSnippet codeString={codeString}/>
                            <p className='font-medium mt-1 text-gray-600'>Basic Dictionary operations:</p>
                            <ul className='list-disc ml-8'>
                                <li>Adding Key-Value Pairs</li>
                                <li>Updating Values</li>
                                <li>Removing Key-Value Pairs</li>
                                <li>Clearing the Dictionary</li>
                            </ul>
                            
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Set</p>
                            <p>A set in Python is an unordered collection of unique elements. Sets are useful for removing duplicates, performing mathematical operations, and testing membership.</p>
                            <CodeSnippet codeString={codeString2}/>  
                            <p className='font-medium mt-1 text-gray-600'>Basic Set operations:</p>
                            <ul className='list-disc ml-8'>
                                <li>Concatenation</li>
                                <li>Repetition</li>
                                <li>Slicing</li>
                            </ul>        
                        </div>
                    </section>

                    <section>
                        <p className="mt-6 font-semibold text-lg">Differences between Dictionaries and Sets</p>
                        <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="overflow-x-auto">
                                <table className="table-auto mt-3 w-full border border-gray-300 rounded-lg text-left">
                                    <thead className="bg-gray-800 text-white">
                                        <tr>
                                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                                            <th className="px-4 py-2 border border-gray-300">Dictionary</th>
                                            <th className="px-4 py-2 border border-gray-300">Set</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">Structure</td>
                                            <td className="px-4 py-2 border border-gray-300">Key-Value pairs</td>
                                            <td className="px-4 py-2 border border-gray-300">Unordered collection of unique elements</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">Order</td>
                                            <td className="px-4 py-2 border border-gray-300">Ordered</td>
                                            <td className="px-4 py-2 border border-gray-300">Unordered</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">Duplicated</td>
                                            <td className="px-4 py-2 border border-gray-300">Unique keys, values can be duplicated</td>
                                            <td className="px-4 py-2 border border-gray-300">No duplicates</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">Access</td>
                                            <td className="px-4 py-2 border border-gray-300">Accessed by keys</td>
                                            <td className="px-4 py-2 border border-gray-300">No directing indexing</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">Practice Exercises</p>
                            <p className='font-medium mt-1 text-gray-600'>Open New File on your VScode</p>
                            <ol>
                                <li>1. Create a list of numbers and perform the following operations:</li>
                                <ul className='list-disc ml-8'>
                                    <li>Add a new number to the list.</li>
                                    <li>Remove a number from the list.</li>
                                    <li>Slice the list to get the first three numbers.</li>
                                </ul>
                                



  
                                <li>2. Create a tuple of strings and perform the following operations:</li>
                                <ul className='list-disc ml-8'>
                                    <li>Concatenate it with another tuple.</li>
                                    <li>Slice the tuple to get the last two elements.</li>
                                </ul>  
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/python/module4/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PyM4Lesson2;