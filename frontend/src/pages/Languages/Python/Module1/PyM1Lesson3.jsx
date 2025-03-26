import ModuleBar from '../../../../components/ModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';

const PyM1Lesson3 = () => {
    const codeString = 'number = 15 \nprint((number > 10) and (number < 20))  # Output: True'
    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Operators</h2>   
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">What are python operators</p>                    
                        </div>
                        <p>Python operators are symbols or keywords used to perform operations on variables and values. They are fundamental in programming and are categorized into various types based on their functionality.</p>
                    </section>

                    <section>
                        <p className="mt-6 font-semibold text-lg">Arithmetic Operators</p>
                        <p className="text-gray-600">Arithmetic operators are used to perform mathematical operations such as addition, subtraction, multiplication, and division.</p>
                        <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="overflow-x-auto">
                                <table className="table-auto mt-3 w-full border border-gray-300 rounded-lg text-left">
                                    <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th className="px-4 py-2 border border-gray-300">Operator</th>
                                        <th className="px-4 py-2 border border-gray-300">Description</th>
                                        <th className="px-4 py-2 border border-gray-300">Example</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">+</td>
                                        <td className="px-4 py-2 border border-gray-300">Addition</td>
                                        <td className="px-4 py-2 border border-gray-300">5 + 3 = 8</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">-</td>
                                        <td className="px-4 py-2 border border-gray-300">Subtraction</td>
                                        <td className="px-4 py-2 border border-gray-300">10 - 4 = 6</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">*</td>
                                        <td className="px-4 py-2 border border-gray-300">Multiplication</td>
                                        <td className="px-4 py-2 border border-gray-300">7 * 6 = 42</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">/</td>
                                        <td className="px-4 py-2 border border-gray-300">Division</td>
                                        <td className="px-4 py-2 border border-gray-300">25 / 5 = 5</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">{'//'}</td>
                                        <td className="px-4 py-2 border border-gray-300">Floor Division</td>
                                        <td className="px-4 py-2 border border-gray-300">10 // 3 = 3</td>
                                    </tr>

                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">%</td>
                                        <td className="px-4 py-2 border border-gray-300">Modulus</td>
                                        <td className="px-4 py-2 border border-gray-300">10 % 3 = 1</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">**</td>
                                        <td className="px-4 py-2 border border-gray-300">Exponentiation</td>
                                        <td className="px-4 py-2 border border-gray-300">2 ** 3 = 8</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section>
                        <p className="mt-6 font-semibold text-lg">Comparison Operators</p>
                        <p className="text-gray-600">Comparison operators are used to compare two values and return a boolean (True or False).</p>
                        <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="overflow-x-auto">
                                <table className="table-auto mt-3 w-full border border-gray-300 rounded-lg text-left">
                                    <thead className="bg-gray-800 text-white">
                                    <tr>
                                        <th className="px-4 py-2 border border-gray-300">Operator</th>
                                        <th className="px-4 py-2 border border-gray-300">Description</th>
                                        <th className="px-4 py-2 border border-gray-300">Example</th>
                                    </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">==</td>
                                        <td className="px-4 py-2 border border-gray-300">Equal to</td>
                                        <td className="px-4 py-2 border border-gray-300">5 == 3 = False</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">!=</td>
                                        <td className="px-4 py-2 border border-gray-300">Not equal to</td>
                                        <td className="px-4 py-2 border border-gray-300">5 != 2 = True</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">&gt;</td>
                                        <td className="px-4 py-2 border border-gray-300">Greater than</td>
                                        <td className="px-4 py-2 border border-gray-300">5 &gt; 10 = False</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">&lt;</td>
                                        <td className="px-4 py-2 border border-gray-300">Less than</td>
                                        <td className="px-4 py-2 border border-gray-300">10 &lt; 5 = False</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">&gt;=</td>
                                        <td className="px-4 py-2 border border-gray-300">Greater than or equal to</td>
                                        <td className="px-4 py-2 border border-gray-300">10 &gt;= 10 = True</td>
                                    </tr>
                                    <tr className="hover:bg-gray-100">
                                        <td className="px-4 py-2 border border-gray-300 text-center">&lt;=</td>
                                        <td className="px-4 py-2 border border-gray-300">Less than or equal to</td>
                                        <td className="px-4 py-2 border border-gray-300">15 &lt;= 7 = False</td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>


                    <section>
                        <p className="mt-6 font-semibold text-lg">Logical & Bitwise Operators</p>
                        <p className="text-gray-600">Operators are used to perform operations on values and variables. These are the special symbols that carry out arithmetic and logical computations. The value the operator operates on is known as the Operand.</p>
                        <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="overflow-x-auto">
                                <table className="table-auto mt-3 w-full border border-gray-300 rounded-lg text-left">
                                    <thead className="bg-gray-800 text-white">
                                        <tr>
                                            <th className="px-4 py-2 border border-gray-300">Operator</th>
                                            <th className="px-4 py-2 border border-gray-300">Description</th>
                                            <th className="px-4 py-2 border border-gray-300">Example</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">and</td>
                                            <td className="px-4 py-2 border border-gray-300">Returns True if both statements are true</td>
                                            <td className="px-4 py-2 border border-gray-300">{"(5 > 3) and (7 > 5) = True"}</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">or</td>
                                            <td className="px-4 py-2 border border-gray-300">Returns True if at least one statement is true</td>
                                            <td className="px-4 py-2 border border-gray-300">{"(5 > 10) or (10 > 5) = True"}</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">not</td>
                                            <td className="px-4 py-2 border border-gray-300">Reverses the result</td>
                                            <td className="px-4 py-2 border border-gray-300">{"not(5 > 3) = False"}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Practice Exercises</p>
                            <p className='text-gray-600 font-medium mt-1'>Open New File on your VScode</p>
                            <ol>
                                <li>1. Perform arithmetic operations with variables x = 15 and y = 4. Print the results of addition, subtraction, multiplication, division, modulus, exponentiation, and floor division.</li>
                                <li>2. Compare the following values and print the results:</li>
                                <ul className='list-disc ml-8'>
                                    <li>{"a = 10, b = 20: Use ==, !=, >, <, >=, <="}</li>
                                </ul>
                                <li>3. Write a program using logical operators to check if a number is within a range. For example:</li>
                                <CodeSnippet codeString={codeString}/>
                            </ol>
                        </div>
                    </section>
                    <div className='flex justify-between mt-8'>
                    <PageButton text="Previous" url={`/${student_id}/python/module1/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
      
    );
};

export default PyM1Lesson3;