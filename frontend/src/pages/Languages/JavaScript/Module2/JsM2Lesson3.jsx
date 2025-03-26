import ModuleBar from '../../../../components/JsModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';

const JsM2Lesson3 = () => {
    const codeString1 = `let isPublicSchool = false;
let inState = true;
if (isPublicSchool && inState) {
  console.log('Student qualifies for in-state tuition.')
} else if (isPublicSchool || inState){
  console.log('Student may qualify for financial support.')
} else {
  console.log('Student does not qualify for financial support.')
}`;

    const codeString2 = `let day = "Monday";
switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("Another day.");
}`;


    const { student_id } = useParams();


    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Conditional</h2>   
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">What are Conditionals?</p>                    
                        </div>
                        <p>Conditionals control the flow of execution based on conditions.</p>
                        <p>Conditional statements (if, else if, and else) execute code if a set of conditions are met.
                        It’s often helpful to think about conditional statements in spoken language:
                        “If condition A is true, let’s follow a set of instructions, otherwise, if it is false, let’s do something else.”
                        </p>
                    </section>
        
                    

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">1. if -lese if - else statement</p>
                            <p>Conditional statements can also be used to check more than one condition:</p>
                            <CodeSnippet codeString={codeString1} language="javascript"/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">2. switch statement</p>
                            <CodeSnippet codeString={codeString2} language="javascript"/>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/javascript/module2/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
      
    );
};

export default JsM2Lesson3;