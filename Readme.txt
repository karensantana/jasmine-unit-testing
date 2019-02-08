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



