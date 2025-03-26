import ModuleBar from '../../../../components/ModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
const PyM4Lesson1 = () => {
    const codeString = '# Empty list \nmy_list = [] \n \n# List with elements \nmy_list = [1, 2, 3, "apple", True]';
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
                        <h2 className="text-3xl font-bold text-rose-700">Lists & Tuples</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://youtu.be/hdzxzBRXKJ0"/> 
                    </div>

                    <section>
                        <div className="mt-8 ">
                            <p>In Python, lists and tuples are two of the most commonly used data structures for organizing and storing collections of data. While they share some similarities, they differ in key aspects such as mutability and use cases. This lesson provides an in-depth exploration of lists and tuples, their operations, and practical examples.</p>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">Lists</p>
                            <p>A list in Python is a mutable, ordered sequence of items. Lists can hold items of any data type, including other lists, making them incredibly versatile.</p>
                            <CodeSnippet codeString={codeString}/>
                            <p className='font-medium mt-1 text-gray-600'>Basic List operations:</p>
                            <ul className='list-disc ml-8'>
                                <li>append(): Adds a single element to the end of the list</li>
                                <li>extend(): Adds multiple elements to the end of the list</li>
                                <li>remove(): Removes the first occurence of a value</li>
                                <li>pop(): Removes an element at a specified index (or the last element by default) and returns it.</li>
                                <li>sort(): Sorts the list in ascending order</li>
                            </ul>
                            
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">Tuples</p>
                            <p>A tuple in Python is an immutable, ordered sequence of items. Once a tuple is created, its elements cannot be changed, making tuples ideal for data that should not be modified.</p>
                            <CodeSnippet codeString={codeString2}/>  
                            <p className='font-medium mt-1 text-gray-600'>Basic Tuple operations:</p>
                            <ul className='list-disc ml-8'>
                                <li>Concatenation</li>
                                <li>Repetition</li>
                                <li>Slicing</li>
                            </ul>        
                        </div>
                    </section>

                    <section>
                        <p className="mt-6 font-semibold text-lg">Differences between Lists and Tuples</p>
                        <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="overflow-x-auto">
                                <table className="table-auto mt-3 w-full border border-gray-300 rounded-lg text-left">
                                    <thead className="bg-gray-800 text-white">
                                        <tr>
                                            <th className="px-4 py-2 border border-gray-300">Feature</th>
                                            <th className="px-4 py-2 border border-gray-300">List</th>
                                            <th className="px-4 py-2 border border-gray-300">Tuple</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">Mutability</td>
                                            <td className="px-4 py-2 border border-gray-300">Mutable</td>
                                            <td className="px-4 py-2 border border-gray-300">Immutable</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">Syntax</td>
                                            <td className="px-4 py-2 border border-gray-300">Square brackets []</td>
                                            <td className="px-4 py-2 border border-gray-300">Parentheses ()</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">Performance</td>
                                            <td className="px-4 py-2 border border-gray-300">Slower due to mutability</td>
                                            <td className="px-4 py-2 border border-gray-300">Faster due to immutability</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">Use Cases</td>
                                            <td className="px-4 py-2 border border-gray-300">Dynamic collections</td>
                                            <td className="px-4 py-2 border border-gray-300">Fixed, constant data</td>
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

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/python/module4/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PyM4Lesson1;