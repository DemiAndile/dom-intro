describe('settingBill' , function(){
     let billSettings = FactoryBillSettings(); 
    it('should count the total amount of calls' , function(){
        // var billSettings = FactoryBillSettings()
        billSettings.setCallTotal(3);
        billSettings.setCallTotal(3);

        assert.equal(billSettings.getCallTotal('call'), 6);
    });

    it('should return the total amount of sms' , function(){
        billSettings.setSmsTotal(6);
        billSettings.setSmsTotal(6);
        assert.equal(billSettings.getSmsTotal('sms'), 12);
    }); 
})