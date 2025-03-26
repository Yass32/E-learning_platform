import ModuleBar from '../../../../components/JsModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import { useParams } from 'react-router-dom';

const JsM3Lesson3 = () => {

    const codeString = `class Animal {
    speak() {
        console.log("Animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("Woof!");
    }
}

let myDog = new Dog();
myDog.speak(); // Woof!
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
                        <h2 className="text-3xl font-bold text-rose-700">Inheritence</h2>   
                    </div>

                    <section>
                        <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://www.youtube.com/watch?v=DqUPa0D2N78"/> 
                        </div>
                    </section>
                    


                    <section>
                        <div className="mt-8 ">
                            <p className="text-gray-600 mt-2 font-semibold">What is Inheritance?</p>
                            <p>Inheritance allows a child class to reuse properties and methods from a parent class.</p>
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
                                <li>1. How do you create a class that inherits from another class in JavaScript?</li>
                                <li>2. What is the extends keyword used for in JavaScript?</li>
                                <li>3. How do you call a parent class constructor from a child class?</li>
                                <li>4. How can you access a parent class method from a child class?</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/javascript/module3/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
      
    );
};

export default JsM3Lesson3