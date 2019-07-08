describe('settingBill' , function(){
     let billSettings = FactoryBillSettings(); 
    it('' , function(){
        var billSettings = FactoryBillSettings()
         billSettings.setCallTotal("call");
        //  billSettings.setCallTotal();

        // billSettings.getSmsTotal();
        assert.equal(billSettings.setCallCostSettings(), billSettings.getCallTotal());
     });

    // it('should return the total amount of sms' , function(){
    //     billSettings.setSmsTotal(6);
    //     billSettings.setSmsTotal(6);
    //     assert.equal(billSettings.getSmsTotal(), 12);
    // }); 

})