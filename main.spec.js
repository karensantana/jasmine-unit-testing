describe('main.js', function(){
    describe('calculate()', function(){
        it('validates expression when the first number is invalid', function(){
            spyOn(window, 'updateResult');  
            /**Here we are creating an spy, 
             replace the updateResult method and explicitly don't do anything. 
             If there are some other calls to methods, using the spy you don't call them explicity, you just check if they are been called.
            we are isolating the updateResult dependency, so even if updateResult is not working, 
            the spec is going to be valid.**/   

            calculate('a+3');
            expect(window.updateResult).toHaveBeenCalled();                                           //We have to check if our spy its been called, because this is part of method's  responsibility.
            expect(window.updateResult).toHaveBeenCalledWith("Operation not recognized!");
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        });

        it('validates expression when the second number is invalid', function(){
            spyOn(window, 'updateResult');   
            
            calculate('3+a');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("Operation not recognized!");
            expect(window.updateResult).toHaveBeenCalledTimes(1);

        });

        it('validates expression when the operator is invalid', function(){
            spyOn(window, 'updateResult');   
            
            calculate('3a');
            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("Operation not recognized!");
            expect(window.updateResult).toHaveBeenCalledTimes(1);                   
        });

        it('calls add', function(){
            const spy = spyOn(Calculator.prototype, 'add');             //When you are working with prototype you have to reference the Class.

            calculate('3+4');
            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(3);
            expect(spy).toHaveBeenCalledWith(4);
        });

        it('calls subtract', function(){
            const spy = spyOn(Calculator.prototype, 'subtract');             //When you are working with prototype you have to reference the Class.
            const spyAdd = spyOn(Calculator.prototype, 'add');
            calculate('3-4');
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spyAdd).toHaveBeenCalledTimes(1);
            expect(spyAdd).toHaveBeenCalledWith(3);                          //You call always add with the first number
            expect(spy).toHaveBeenCalledWith(4);
        });

        it('calls multiply', function(){
            const spy = spyOn(Calculator.prototype, 'multiply');             
            const spyAdd = spyOn(Calculator.prototype, 'add');
            calculate('3*4');
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spyAdd).toHaveBeenCalledTimes(1);
            expect(spyAdd).toHaveBeenCalledWith(3);                          
            expect(spy).toHaveBeenCalledWith(4);
        });

        it('calls divide', function(){
            const spy = spyOn(Calculator.prototype, 'divide');             
            const spyAdd = spyOn(Calculator.prototype, 'add');
            calculate('3/4');
            expect(spy).toHaveBeenCalledTimes(1);
            expect(spyAdd).toHaveBeenCalledTimes(1);
            expect(spyAdd).toHaveBeenCalledWith(3);                          
            expect(spy).toHaveBeenCalledWith(4);
        });
        
        it('calls updateResult', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callThrough();

            calculate('5*5');

            expect(window.updateResult).toHaveBeenCalledTimes(1);
            expect(window.updateResult).toHaveBeenCalledWith(25);

        });

        it('calls updateResult fake', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callFake(function(number){
                return 'it works!';
            });

            calculate('5*5');

            expect(window.updateResult).toHaveBeenCalledTimes(1);
            expect(window.updateResult).toHaveBeenCalledWith('it works!');

        });

        it('calls updateResult return', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.returnValue('Whatever it returns'); //What you put here is what multiply returns

            calculate('5*5');

            expect(window.updateResult).toHaveBeenCalledTimes(1);
            expect(window.updateResult).toHaveBeenCalledWith('Whatever it returns');

        });

        it('calls updateResult return multiple values', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.returnValues(null,'Whatever it returns'); 

            calculate('5*5');
            calculate('3*5');

            expect(window.updateResult).toHaveBeenCalledTimes(2);
            expect(window.updateResult).toHaveBeenCalledWith('Whatever it returns');

        });

        it('does not handle errors', function(){
            spyOn(Calculator.prototype, 'multiply').and.throwError('some error');

            expect(function(){ calculate('5*5')}).toThrowError('some error');


        });
    });

    describe('updateResult()', function(){
        let element;                                   //To be available
        beforeAll(function(){
            element =  document.createElement('div');   //We need an actual Dom element to exist in order to test it
            element.setAttribute('id', 'result');
            document.body.appendChild(element);
        });

        afterAll(function(){
            element = document.getElementById('result');  //Clean up to remove the element from the spec runner html
            document.body.removeChild(element);
        });
        it('adds result to DOM', function(){
           updateResult("5");

           expect(element.innerText).toBe("5");
        });
    });

    describe('showVersion()', function(){
       it('calls calculator.version', function(){
          spyOn(document, 'getElementById').and.returnValue({     //When using Properties, explicity you need to assign the spy to a variable, 
               innerText: null                                                  //in order to not to loose the Object description 
           });
           
           const spy = spyOnProperty(Calculator.prototype, 'version', 'get');
           showVersion();

           expect(spy).toHaveBeenCalled();
       }) 
    });
});