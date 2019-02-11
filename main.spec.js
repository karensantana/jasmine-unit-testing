describe('main.js', function(){
    describe('calculate()', function(){
        xit('validates expression');
        xit('calls add');
        xit('calls subtract');
        xit('calls multiply');
        xit('calls divide');
        xit('validates operation');
        xit('calls updateResult');
    });

    describe('updateResult()', function(){
        let element;                                  //To be available
        beforeAll(function(){
            element =  document.createElement('div'); //We need an actual Dom element to exist in order to test it
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
        });

        afterAll(function(){
            element = document.getElementById('result'); //Clean up to remove the element from the spec runner html
            document.body.removeChild(element);
        });
        it('adds result to DOM', function(){
           updateResult("5");

           expect(element.innerText).toBe("5");
        });
    });
});