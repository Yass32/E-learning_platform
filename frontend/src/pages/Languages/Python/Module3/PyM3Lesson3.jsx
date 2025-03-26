import ModuleBar from '../../../../components/ModuleBar';
import CodeSnippet from '../../../../components/CodeSnippet';
import PageButton from '../../../../components/PageButton';
import { useParams } from 'react-router-dom';

const PyM3Lesson3 = () => {
    const codeString1 = 'try: \n    # Code that might raise an exception \n    pass \nexcept ExceptionType: \n    # Code to handle the exception \n    pass \nfinally: \n    # Code that executes no matter what \n    pass'
    const codeString2 = 'try: \n    num = int(input("Enter a number: ")) \n    result = 10 / num \nexcept ValueError: \n    print("Please enter a valid integer.") \nexcept ZeroDivisionError: \n    print("Division by zero is not allowed.") \nelse: \n    print(f"Result: {result}")' 
    const codeString3 = 'def check_positive(number): \n    if number < 0: \n        raise ValueError("Number must be positive!") \n \ntry: \n    check_positive(-5) \nexcept ValueError as e: \n    print(e)'

    const { student_id } = useParams();


    return (
        <>
            <div className="flex h-screen">
                {/* Sidebar (Left) */}
                <ModuleBar/>
        
                {/* Full-Width Right Column */}
                <main className="flex-1 bg-gray-100 p-8 overflow-auto">
                    <div className="mb-4">
                        <h2 className="text-3xl font-bold text-rose-700">Exception Handling</h2>   
                    </div>

                    <section>
                        <div className="mt-4 ">
                            <p className="mt-2 font-semibold">What is Exception Handling</p>                    
                        </div>
                        <p>Exception handling in Python is a mechanism to catch and handle errors or exceptions that occur during program execution. This ensures the program can continue running or exit gracefully instead of crashing unexpectedly.</p>
                        
                    </section>
        

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">try, except, and finally Blocks</p>
                            <p>The try block contains code that might raise an exception. If an exception occurs, the except block handles it. The finally block contains code that executes regardless of whether an exception occurred or not. It is often used for cleanup actions like closing files or releasing resources.</p>
                            <CodeSnippet codeString={codeString1}/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">Handling Multiple Exceptions</p>
                            <p>You can handle different exceptions using multiple except blocks.</p>
                            <CodeSnippet codeString={codeString2}/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">Raising Exceptions</p>
                            <p>Python allows you to raise exceptions manually using the raise keyword. This is useful for validating input or enforcing specific rules.</p>
                            <CodeSnippet codeString={codeString3}/>
                        </div>
                    </section>

                    <section>
                        <div className="mt-4 ">
                            <p className="text-gray-600 mt-2 font-semibold">Best Practices for exception handling</p>
                            <ol>
                                <li>1. Be specific</li>
                                <li>2. Use else for Success Paths</li>
                                <li>3. Clean up resources with finally</li>
                                <li>3. Avoid silent failures</li>
                            </ol>
                        </div>
                    </section>

                    <div className='flex justify-between mt-8'>
                        <PageButton text="Previous" url={`/${student_id}/python/module3/lesson2`}/>
                    </div>
                </main>
            </div>
        </>
      
    );
};

export default PyM3Lesson3