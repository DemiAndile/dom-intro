
function FactoryCalculateBill() {

    var billTotal = 0.00; // global variable 
    // sms , call ,sms 
    function billString(billType) {

        var billItems = billType.split(',');
        billTotal = 0.00; //reset bill total
        for (var i = 0; i < billItems.length; i++) {
            var billItem = billItems[i].trim();
            if (billItem === "call") {
                billTotal = billTotal + 2.75;
            }
            else if (billItem === "sms") {
                billTotal = billTotal + 0.75;
            }
        }
        return billTotal;
    }

    function colorIndicator(totalBill) {

        if (totalBill > 20.00 && totalBill < 30.00) {
            return "warning";
        }

        if (totalBill > 30.00) {
            return "danger";
        }
    }
     
    return {  //  expose methods or variables
        billString,
        colorIndicator
    }
}
