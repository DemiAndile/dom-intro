
describe('calculateBill' , function(){
    let calculateBill = FactoryCalculateBill();  //  creating an instance so that you have access to closures that are defined inside the factory function 

    it('should return zero if i dont specify my bill type' , function(){
        var billType = ""
        assert.deepEqual(calculateBill.billString(billType), 0.00);
    }); 
    
    it('should return zero point seventyfive if bill type equals to sms' , function(){
        var billType = "sms"
        assert.deepEqual(calculateBill.billString(billType), 0.75);
    }); 

    it('should return the total amount of the bill types ' , function(){
        var billType = "sms,call"
        assert.deepEqual(calculateBill.billString(billType), 3.50);
    }); 


    it('should return undefined because of the amount' , function(){
        var billType = "sms";
        var totalBill = calculateBill.billString(billType)
        assert.deepEqual(calculateBill.colorIndicator(totalBill), undefined);
    }); 

    it('should return orange if it exceed R20' , function(){
        var billType = "sms,call,sms,call,call,sms,sms,call,sms,call,call,sms,call";
        var totalBill = calculateBill.billString(billType)
        assert.deepEqual(calculateBill.colorIndicator(totalBill), "warning");
    }); 
 

});