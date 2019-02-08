describe('calculator.js',function(){

    it('should add numbers to total', function(){
        //TODO: Expectations
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

    it('should initialize the total', function(){
        const calculator = new Calculator();

        expect(calculator.total).toBeFalsy();
        expect(calculator.total).toBe(0);
    });

    it('has constructor', function(){
        const calculator = new Calculator();
        const calculator2 = new Calculator();

        expect(calculator).toEqual(calculator2);
    });

    it('has common operations', function(){
        const calculator = new Calculator();

        expect(calculator.add).toBeDefined();
        expect(calculator.subtract).toBeDefined();
        expect(calculator.multiply).toBeDefined();
        expect(calculator.divide).toBeDefined();
    });

    it('does not handle NaN', function(){
        const calculator = new Calculator();
        calculator.total = 20;
        calculator.multiply('a');

       expect(calculator.total).toBeNaN(); 
    });

    it('handles divide by zero', function(){
        const calculator = new Calculator();

        expect(function(){ calculator.divide(0)}).toThrow();
        expect(function(){ calculator.divide(0)}).toThrowError(Error);
        expect(function(){ calculator.divide(0)}).toThrowError(Error, 'Can not divide by zero!');
    });

    it('can be instantiated', function(){
        const calculator = new Calculator();

        expect(calculator).toBeCalculator();
    });
    it('returns total', function(){
        const calculator = new Calculator();
        calculator.total = 50;

        expect(calculator.add(20)).toBe(70);
        expect(calculator.total).toMatch(/-?\d+/);
    });
});