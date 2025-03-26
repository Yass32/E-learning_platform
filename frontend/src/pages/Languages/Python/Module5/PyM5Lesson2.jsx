import ModuleBar from '../../../../components/ModuleBar';
import YouTubeEmbed from '../../../../components/YoutubeEmbed';
import PageButton from '../../../../components/PageButton';
import CodeSnippet from '../../../../components/CodeSnippet';
import { useParams } from 'react-router-dom';


const PyM5Lesson2 = () => {
    const codeString = 'class BankAccount: \n    def __init__(self, owner, balance): \n        self.owner = owner          # Public attribute \n        self.__balance = balance    # Private attribute \n \n    # Getter for balance \n    def get_balance(self): \n        return self.__balance \n    # Setter for balance \n    def set_balance(self, amount): \n        if amount >= 0: \n            self.__balance = amount \n        else: \n            raise ValueError("Balance cannot be negative!") \n \n# Usage \naccount = BankAccount("Alice", 1000) \nprint(account.owner)              # Access public attribute \nprint(account.get_balance())      # Access private attribute using getter \naccount.set_balance(1200)         # Update private attribute using setter \nprint(account.get_balance())';
    const codeString2 = 'class Animal: \n    def __init__(self, name): \n        self.name = name \n \n    def speak(self): \n        return f"{self.name} makes a sound." \n \nclass Dog(Animal): \n    def speak(self): \n        return f"{self.name} barks." \n \n# Usage \ndog = Dog("Buddy") \nprint(dog.speak())  # Output: Buddy barks.';
    const codeString3 = 'class Shape: \n    def area(self): \n        raise NotImplementedError("Subclasses must implement this method.") \n \nclass Circle(Shape): \n    def __init__(self, radius): \n        self.radius = radius \n \n    def area(self): \n        return 3.14 * self.radius ** 2 \n \nclass Rectangle(Shape): \n    def __init__(self, width, height): \n        self.width = width \n        self.height = height \n    def area(self): \n        return self.width * self.height \n \n# Usage \nshapes = [Circle(5), Rectangle(4, 6)] \nfor shape in shapes: \n    print(shape.area())';
    const codeString4 = 'from abc import ABC, abstractmethod \n \nclass Vehicle(ABC): \n    @abstractmethod \n    def start_engine(self): \n        pass \n \n    @abstractmethod \n    def stop_engine(self): \n        pass \n \nclass Car(Vehicle): \n    def start_engine(self): \n        return "Car engine started." \n \n    def stop_engine(self): \n        return "Car engine stopped." \n \nclass Motorcycle(Vehicle): \n    def start_engine(self): \n        return "Motorcycle engine started." \n    def stop_engine(self): \n        return "Motorcycle engine stopped." \n \n# Usage \nvehicles = [Car(), Motorcycle()] \nfor vehicle in vehicles: \n    print(vehicle.start_engine()) \n    print(vehicle.stop_engine())';
    const { student_id } = useParams();

    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">OOP principles</h2>   
                    </div>

                    <div className="mt-4 flex mx-auto">
                            <YouTubeEmbed url="https://youtu.be/m_MQYyJpIjg"/> 
                    </div>

                    <section>
                        <div className="mt-8 ">
                            <p>Object-Oriented Programming (OOP) is a paradigm that organizes software design around data, or objects, rather than functions and logic. It allows for modular, reusable, and scalable code. The four main principles of OOP are encapsulation, inheritance, polymorphism, and abstraction. This document focuses on these principles with detailed explanations and examples.</p>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">1. Encapsulation</p>
                            <p>Encapsulation is the process of bundling data (attributes) and methods (functions) that operate on the data into a single unit, called a class. It also involves restricting direct access to some components of an object to ensure control over the internal state.</p>
                            <p className='font-medium mt-1 text-gray-600'>Key Concepts:</p>
                            <ul className='list-disc ml-8'>
                                <li>Private Attributes: Use double underscores (__) to make an attribute private.</li>
                                <li>Getters and Setters: Provide controlled access to private attributes using methods.</li>
                            </ul>
                            <CodeSnippet codeString={codeString}/>                            
                        </div>
                    </section>

                    
                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">2. Inheritance</p>
                            <p>Inheritance allows a class (child class) to acquire properties and behaviors (methods) of another class (parent class). It promotes code reuse and establishes a hierarchical relationship between classes.</p>
                            <p className='font-medium mt-1 text-gray-600'>Key Concepts:</p>
                            <ul className='list-disc ml-8'>
                                <li>Single Inheritance: A child class inherits from one parent class.</li>
                                <li>Multiple Inheritance: A child class inherits from more than one parent class.</li>
                            </ul>
                            <CodeSnippet codeString={codeString2}/>                            
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">3. Polymorphism</p>
                            <p>Polymorphism allows objects of different classes to be treated as objects of a common super class. It enables a single interface to represent different underlying forms (data types).</p>
                            <p className='font-medium mt-1 text-gray-600'>Key Concepts:</p>
                            <ul className='list-disc ml-8'>
                                <li>Method Overriding: A child class provides a specific implementation of a method already defined in its parent class.</li>
                                <li>Dynamic Binding: The method that is called is determined at runtime based on the object.</li>
                            </ul>
                            <CodeSnippet codeString={codeString3}/>                            
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">4. Abstraction</p>
                            <p>Abstraction is the process of hiding the implementation details of a class and exposing only the essential features to the user. It focuses on what an object does rather than how it does it. In Python, abstraction is achieved using abstract base classes (ABCs).</p>
                            <p className='font-medium mt-1 text-gray-600'>Key Concepts:</p>
                            <ul className='list-disc ml-8'>
                                <li>Abstract Base Classes (ABC): Defined in the abc module.</li>
                                <li>Abstract Methods: Methods declared but not implemented in the base class.</li>
                            </ul>
                            <CodeSnippet codeString={codeString4}/> 
                            <p className="mt-4 ">By mastering these principles, developers can create modular, maintainable, and efficient code.</p>                           
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/python/module5/lesson1/`}/>
                        <PageButton text="Start Quiz" url={`/${student_id}/quizpage`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default PyM5Lesson2