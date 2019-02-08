const  customMatchers = {
    toBeCalculator: function(){
        return {
            compare: function(actual){
                const result = {
                    pass: true,
                    message: ""
                }
                if (result.pass) {

                }else{
                    result.message = "Expected" + actual + "to be instance of Calculator";
                }
                
                return result;
            }
        }
    }
};