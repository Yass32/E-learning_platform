import ModuleBar from '../../../../components/JsModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
const JsM3Lesson1 = () => {
    const codeString = `let person = {
    name: "Alice",
    age: 30,
    greet: function() {
        console.log("Hello, " + this.name);
    }
};
person.greet(); // Hello, Alice`;

    const codeString2 = `let scoreboard = {
  teamA: 'Code',
  teamB: 'Cademy',
  scoreA: 0,
  scoreB: 0,
  incrementScoreA: function () {
    scoreboard.scoreA++;
  },
  incrementScoreB: function(){
    scoreboard.scoreB++;
  }
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
                        <h2 className="text-3xl font-bold text-rose-700">Objects in JavaScript</h2>   
                    </div>

                    <section>
                        <div className="mt-8 ">
                            <p className="text-gray-600 mt-2 font-semibold">What is an Object?</p>
                            <p>Objects are like arrays, but values are accessed by named properties, not just numbers. An object’s property can also be set to a function. Because they are associated with an object, these functions are called methods.</p>
                        </div>
                    </section>
        

                    <section>
                        <div className="mt-4 ">
                            <CodeSnippet codeString={codeString} language="javascript"/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-6 ">
                            <p className='font-medium text-gray-600'>For Example</p>
                            <CodeSnippet codeString={codeString2} language="javascript"/>
                            <p>In the example above, the variable scoreboard stores an object with six property-value pairs. The keys teamA and teamB store string values. The keys scoreA and scoreB store number values, and the last two keys, incrementScoreA and incrementScoreB store functions. The value of a property can be accessed, logged, used, and/or overwritten. New property-value pairs can be created as well.</p>       
                        </div>
                    </section>
                    


                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Practice Exercises</p>
                            <ol>
                                <li>1. How do you create an object in JavaScript?</li>
                                <li>2. How can you access and modify object properties?</li>
                                <li>3. Explain how to access and modify the age property of an object named person.</li>
                                <li>4. How do you add a new property to an existing object?</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/javascript/module3/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JsM3Lesson1