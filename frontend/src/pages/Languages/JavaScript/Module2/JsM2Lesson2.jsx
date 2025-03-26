import ModuleBar from '../../../../components/JsModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';


const JsM2Lesson2 = () => {
    const codeString = `let x = 10, y = 5;
console.log(x + y); // 15
console.log(x > y); // true
console.log(true && false); // false
`;

    const codeString1 = `(10 + 5) * 2 === 30 && 15 % 4 > 2`;

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
                        <p>Operators perform actions on variables and values.</p>
                    </div>

                    <section>
                        <p className="mt-4 font-medium text-gray-600">Common JavaScript Operators</p>
                        <div className="mt-2 bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="overflow-x-auto">
                                <table className="table-auto mt-3 w-full border border-gray-300 rounded-lg text-left">
                                    <thead className="bg-gray-800 text-white">
                                        <tr>
                                            <th className="px-4 py-2 border border-gray-300">Type</th>
                                            <th className="px-4 py-2 border border-gray-300">Operators</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">Arithmetic</td>
                                            <td className="px-4 py-2 border border-gray-300">	+, -, *, /, %</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">Comparison</td>
                                            <td className="px-4 py-2 border border-gray-300">==, ===, !=, {'>'}, {'<'} </td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">Logical</td>
                                            <td className="px-4 py-2 border border-gray-300">&&, ||</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4">
                            <p className='font-medium mt-1 text-gray-600'>Example;</p>
                            <CodeSnippet codeString={codeString} language="javascript"/>
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Practice Exercises</p>
                            <p className='text-gray-600 font-medium mt-1'>What will this code out? true or false?</p>
                            <CodeSnippet codeString={codeString1} language="javascript"/>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/javascript/module2/lesson1`}/>
                        <PageButton text="Next" url={`/${student_id}/javascript/module2/lesson3`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JsM2Lesson2;