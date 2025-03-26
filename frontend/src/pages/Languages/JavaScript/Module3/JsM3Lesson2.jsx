import ModuleBar from '../../../../components/JsModuleBar';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
import CodeSnippet from '../../../../components/CodeSnippet';


const JsM3Lesson2 = () => {

    const codeString = `class BankAccount {
    #balance; // Private variable

    constructor(initialBalance) {
        this.#balance = initialBalance;
    }

    getBalance() {
        return this.#balance;
    }
}

let account = new BankAccount(500);
console.log(account.getBalance()); // 500
`;

    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Encapsulation</h2>   
                    </div>

                    <section>
                        <div className="mt-4 flex mx-auto">
                                <YouTubeEmbed url="https://www.youtube.com/watch?v=ZYa_NiOUTQo"/> 
                        </div>
                    </section>
                    


                    <section>
                        <div className="mt-8 ">
                            <p className="text-gray-600 mt-2 font-semibold">Understanding Encapsulation</p>
                            <p>Encapsulation means hiding internal details and exposing only necessary parts.</p>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <CodeSnippet codeString={codeString} language="javascript"/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Practice Exercises</p>                            
                            <ol>
                                <li>1. What are the benefits of using encapsulation in JavaScript?</li>
                                <li>2. What is the difference between public and private properties?</li>
                                <li>3. How can you restrict access to certain properties or methods in a class?</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/javascript/module3/lesson1`}/>
                        <PageButton text="Next" url={`/${student_id}/javascript/module3/lesson3`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JsM3Lesson2;