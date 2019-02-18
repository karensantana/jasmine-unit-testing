Testing Notes

You define a set of specs with:
describe('description', function(){

});

You define a spec using: 
it('Tittle of spec', function(){
        //TODO: Expectations
});

You define a single Expectation with: 

 expect(calculator.total).toBe(5); //expected value

 Spec with all true expectations -> Passing spec
 Spec with one or more false expectations -> failing expect

 Disable spec: A spec that report as pending and will not be executed.
 Common cases for this: 
    1.Changes in the code.
    2.TDD -> Test driven developement: when you write the specs first and then the code to make the test paas.

    This is how to put a pending Spec:
    xit('should add numbers to total', function(){...

    You can also disable the suit: All specs within the disabled suite will be marked as pending.

------------------------------------------------------------------------------------------------------
    Matchers

    A matcher it is just a funtion.
    Implements a boolean comparison between the actual value and the expected value.
    -->boolean comparison: true / false.
    -> actual value with the expected value.

    *A matcher is responsible for reporting to jasmine if the expectation is true or false. -> passing or failing Spec.
    https://jasmine.github.io/api/3.3/matchers.html

    **When you are working with two objects, arrays they are compare by reference, so you need a deep comparison in your spec to check if they are equal.

    ----------------------------------------------------------------------------------------------------

    Organizing your specs

    *describe --> helps you keep your specs organized

    *Through naming conventions
        -Create a spec file with the same name that matches the source file you are unit Testing
        calculator.js --> calculator.spec.js

    *Keep the folder structure:

    *By nesting suites

    // The spec testing Lifecycle

    Setup and Teardown

        Setup --> Where you place prerequisites for your specs.
            ----> It executes before specs are run.
            beforeEach --> Executed before each spec (it) in the suite (describe) in which it is called.
            beforeAll --> Executed ONCE before all the specs (it) in the suite (describe) in which it is called.

    Teardown --> Clean up steps for your specs.
            ---> It executes after specs are run.
            afterEach --> Executed after every single specs (it) in the suite (describe) in which it is called.
            afterAll --> Executed just ONCE after all specs.

            Executed in time clock

            Describe () //Example with two specs (by me).

            1--beforeAll()
            2--beforeEach()
            3-It()
            4--afterEach()
            5--beforeEach()
            6--It()
            7--afterEach()
            8--afterAll()


        Spys-----------

        What is a Spy? 
        Spies create test doubles and help us isolate dependencies for true unit testing.
        *A test double is an object that can stand in for a real object in a tes, similar to how a stunt double stands in for an actor in a movie.

        -Jasmine has test double functions called spies.
        -A spy can stub any function and tracks calls to it and all arguments.
        -A Spy only exists in the describe or it block in which it is defined, and will be removed after each spec.

        There are special matchers for interacting with spies:
                -toHaveBeenCalled
                -to toHaveBeenCalledWith
                -toHaveBeenCallTimes






