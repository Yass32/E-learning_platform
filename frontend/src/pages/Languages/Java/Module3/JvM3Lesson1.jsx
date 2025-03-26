import ModuleBar from '../../../../components/JvModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
const JvM3Lesson1 = () => {
    const codeString = `class Car {
    String brand;
    int speed;

    void display() {
        System.out.println("Brand: " + brand + ", Speed: " + speed);
    }
}
`;

    const codeString2 = `public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // Object creation
        myCar.brand = "Toyota";
        myCar.speed = 120;
        myCar.display();
    }
}
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
                        <h2 className="text-3xl font-bold text-rose-700">Classes and Objects</h2>
                        <p>In Java, classes and objects are basic concepts of Object Oriented Programming (OOPs) that are used to represent real-world concepts and entities. The class represents a group of objects having similar properties and behavior. For example, the animal type Dog is a class while a particular dog named Tommy is an object of the Dog class.</p>
                    </div>

                    <section>
                        <div className="mt-8 ">
                            <p className="text-gray-600 mt-2 font-semibold">1. Java Classes</p>
                            <p>A class in Java is a set of objects which shares common characteristics and common properties. It is a user-defined blueprint or prototype from which objects are created.</p>
                            <CodeSnippet codeString={codeString} language="java"/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-8 ">
                            <p className="text-gray-600 mt-2 font-semibold">2. Java Objects</p>
                            <p>An object in Java is a basic unit of Object-Oriented Programming and represents real-life entities. Objects are the instances of a class that are created to use the attributes and methods of a class.</p>
                            <CodeSnippet codeString={codeString2} language="java"/>
                        </div>
                    </section>

                    <section>
                        <p className="mt-10 font-medium text-gray-600">Difference Between Java Classes and Objects</p>
                        <div className=" bg-gray-100 p-4 rounded-lg shadow-md">
                            <div className="overflow-x-auto">
                                <table className="table-auto mt-3 w-full border border-gray-300 rounded-lg text-left">
                                    <thead className="bg-gray-800 text-white">
                                        <tr>
                                            <th className="px-4 py-2 border border-gray-300">Classes</th>
                                            <th className="px-4 py-2 border border-gray-300">Objects</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-white">
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">Class is the blueprint of an object. It is used to create objects</td>
                                            <td className="px-4 py-2 border border-gray-300">An object is an instance of the class</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center"> No memory is allocated when a class is declared</td>
                                            <td className="px-4 py-2 border border-gray-300">Memory is allocated as soon as an object is created</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">A class is a group of similar objects</td>
                                            <td className="px-4 py-2 border border-gray-300">An object is a real-world entity</td>
                                        </tr>
                                        <tr className="hover:bg-gray-100">
                                            <td className="px-4 py-2 border border-gray-300 text-center">A class can only be declared once</td>
                                            <td className="px-4 py-2 border border-gray-300">Objects can be created many times</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </section>
                    


                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold text-gray-600">Practice Exercises</p>
                            <ol>
                                <li>1. Explain the relationship between classes and objects.</li>
                                <li>2. Write a Java program that defines a &quot;Student&quot; class with name, age, and marks as attributes.</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-end mt-8'>
                        <PageButton text="Next" url={`/${student_id}/java/module3/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JvM3Lesson1