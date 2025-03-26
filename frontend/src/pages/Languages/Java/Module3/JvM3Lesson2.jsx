import ModuleBar from '../../../../components/JvModuleBar';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';
import CodeSnippet from '../../../../components/CodeSnippet';


const JvM3Lesson2 = () => {

    const codeString = `// abstract class
abstract class GFG {
    // abstract methods declaration
    abstract void add();
    abstract void mul();
    abstract void div();
}`;

    const codeString2 = `// Encapsulation using private modifier
// Employee class contains private data
// called employee id and employee name
class Employee {
    private int empid;
    private String ename;

    // Setter methods
    public void set_id(int empid) { 
      this.empid = empid; 
    }

    public void set_name(String ename)
    {
        this.ename = ename;
    }

    // Getter methods
    public int get_id() { 
      return empid; 
    }

    public String get_name() { 
      return ename; 
    }
}

public class Geeks {
    public static void main(String args[])
    {
        Employee e = new Employee();
        e.set_id(78);
        e.set_name("John");

        System.out.println("Employee id: " + e.get_id());
        System.out.println("Employee Name: " + e.get_name());

        // Output
        // Employee id: 78
        // Employee Name: John
    }
}
`;

    const codeString3 = `//base class or parent class or super class
class A{
  //parent class methods
  void method1(){}
  void method2(){}
}

//derived class or child class or base class
class B extends A{  //Inherits parent class methods
  //child class methods
  void method3(){}
  void method4(){}
}
`;

    const codeString4 = `// Java Program to Demonstrate
// Method Overloading and Overriding

// Parent Class
class Parent {
    // Method Declared
    public void func(){
        System.out.println("Parent Method func");
    }

    // Method Overloading
    public void func(int a){
        System.out.println("Parent Method func " + a);
    }
}

// Child Class
class Child extends Parent {
    // Method Overriding
    @Override 
      public void func(int a){
        System.out.println("Child Method " + a);
    }
}

// Main Method
public class Main {
    public static void main(String args[]){
        Parent obj1 = new Parent();
        obj1.func();
        obj1.func(5);

        Child obj2 = new Child();
        obj2.func(4);
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
                        <h2 className="text-3xl font-bold text-rose-700">OOP Principles</h2> 
                        <p>Object-Oriented Programming refers to programming languages that use objects in programming. They use objects as a primary source to implement what is to happen in the code. Objects are seen by the viewer or user, performing tasks you assign.</p>  
                    </div>


                    <section>
                        <div className="mt-8 ">
                            <p className="text-gray-600 mt-2 font-semibold">1. Abstraction</p>
                            <p>Data Abstraction may also be defined as the process of identifying only the required characteristics of an object, ignoring the irrelevant details. The trivial or non-essential units are not displayed to the user. Ex: A car is viewed as a car rather than its individual components.</p>
                            <CodeSnippet codeString={codeString} language="java"/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-8 ">
                            <p className="text-gray-600 mt-2 font-semibold">2. Encapsulation</p>
                            <p>It is defined as the wrapping up of data under a single unit. It is the mechanism that binds together the code and the data it manipulates. Another way to think about encapsulation is that it is a protective shield that prevents the data from being accessed by the code outside this shield. </p>
                            <CodeSnippet codeString={codeString2} language="java"/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-8 ">
                            <p className="text-gray-600 mt-2 font-semibold">3. Inheritance</p>
                            <p>Inheritance is an important pillar of OOP (Object Oriented Programming). It is the mechanism in Java by which one class is allowed to inherit the features (fields and methods) of another class. We are achieving inheritance by using extends keyword.</p>
                            <CodeSnippet codeString={codeString3} language="java"/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-8 ">
                            <p className="text-gray-600 mt-2 font-semibold">4. Polymorphism</p>
                            <p>It refers to the ability of object-oriented programming languages to differentiate between entities with the same name efficiently. It basically means having multiple behaviors with the same method name.</p>
                            <CodeSnippet codeString={codeString4} language="java"/>
                        </div>
                    </section>


                    <section>
                        <div className="mt-4 ">
                            <p className=" mt-2 font-semibold">Practice Exercises</p>                            
                            <ol>
                                <li>1. What is the difference between encapsulation and inheritance?</li>
                                <li>2. Write a Java program that implements inheritance with a &quot;Vehicle&quot; and &quot;Car&quot; class.</li>
                            </ol>
                        </div>
                    </section>


                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/java/module3/lesson1`}/>
                        <PageButton text="Next" url={`/${student_id}/java/module3/lesson3`}/>
                    </div>
                </main>
            </div>
        </>
    );
};

export default JvM3Lesson2;