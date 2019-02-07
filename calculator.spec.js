describe('calculator.js',function(){

    xit('should add numbers to total', function(){
        //TODO: Expectations
        //expect 5+5 to be 10
        const calculator = new Calculator();
        calculator.add(5);

        expect(calculator.total).toBe(5); //expected value
    });

    it('should subtract numbers from total', function(){
        //TODO: Expectations
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);

        expect(calculator.total).toBe(25);
    });

    it('should multiply total by number', function(){
        //TODO: Expectations
        const calculator = new Calculator();
        calculator.total = 10;
        calculator.multiply(2);

        expect(calculator.total).toBe(20);
    });

    it('should divide total by number', function(){
        //TODO: Expectations
        const calculator = new Calculator();
        calculator.total = 20;
        calculator.divide(10);
        
        expect(calculator.total).toBe(2);
    })
});