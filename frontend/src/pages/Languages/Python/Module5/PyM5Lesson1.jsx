import ModuleBar from '../../../../components/ModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';

const PyM5Lesson1 = () => {
    const codeString ='class ClassName: \n    # Class attributes (shared across all instances) \n    attribute = "Value" \n \n    # Constructor method \n    def __init__(self, param1, param2): \n        self.param1 = param1  # Instance attribute \n        self.param2 = param2 \n \n    # Instance method \n    def method(self): \n        return f"Attributes: {self.param1}, {self.param2}"';
    const codeString2 = 'class Person: \n   def __init__(self, first_name, last_name): \n        self.first_name = first_name \n        self.last_name = last_name \n \n   def full_name(self): \n        return f"{self.first_name} {self.last_name}" \n \n# Creating objects \nperson1 = Person("John", "Doe") \nperson2 = Person("Jane", "Smith") \n \n# Accessing attributes and methods \nprint(person1.full_name())  # Output: John Doe \nprint(person2.full_name())  # Output: Jane Smith';
    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Classes & Objects</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://youtu.be/f0TrMH9s-VE"/> 
                    </div>


                    <section>
                        <div className="mt-8 ">
                            <p className="mt-2 font-semibold">Defining a Class</p>
                            <p>A class is defined using the class keyword followed by the class name. The class body contains attributes and methods that define its behavior and properties.</p>
                            <p className='font-medium mt-1 text-gray-600'>Syntax</p>
                            <CodeSnippet codeString={codeString}/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4">
                            <p className="mt-2 font-semibold">Creating objects</p>
                            <p>Objects are instances of a class, created by calling the class as if it were a function. When an object is instantiated, the __init__ method (constructor) is automatically called to initialize its attributes.</p>
                            <p className='font-medium mt-1 text-gray-600'>Example: Instantiating Objects</p>
                            <CodeSnippet codeString={codeString2}/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold text-gray-600">Special Methods</p>
                            <p>Python provides special methods, also known as &quot;magic methods&quot; or &quot;dunder methods&quot; (double underscore), to customize class behavior.</p>
                            <ul className='list-disc ml-8'>
                                <li>__init__: Initializes the object.</li>
                                <li>__str__: Provides a string representation of the object.</li>
                                <li>__repr__: Provides anunambiguous representation of the object.</li>
                            </ul>  
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">Practice Exercises</p>
                            <p className='font-medium mt-1 text-gray-600'>Open New File on your VScode</p>
                            <ol>
                                <li>1. Define a class Employee with the following:</li>
                                <ul className='list-disc ml-8'>
                                    <li>A class attribute company set to &quot;TechCorp&quot;.</li>
                                    <li>An __init__ method that initializes name and position as instance attributes.</li>
                                    <li>A method introduce that returns a string introducing the employee, their position, and the company.</li>
                                </ul>  
                                <li>2. Create two objects of the Employee class, assign values to their instance attributes, and call the introduce method for each object.</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/python/module5/lesson2/`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PyM5Lesson1;