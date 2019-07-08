function FactoryBillSettings(){

    var callsTotalS = 0;
    var smsTotals = 0;
    var callCostSettings = 0;
    var smsCostSettings = 0;
    var warningLevel = 0;
    var criticalLevel = 0;
    var totals = 0;
    var totalCost = 0;

    function setCallTotal(price) {
        callsTotalS += price;
    }
    function setSmsTotal(price) {
        smsTotals += price;
    }
    function setCallCostSettings(price){
        callCostSetting += price;
    }9*
    function setSmsCostSettings(price){
        smsCostSetting += price;
    }
    
    function getSmsTotal() {
        return smsTotals.toFixed(2);
    }
    function getCallTotal() {
        return callsTotalS;
    }
    function setCallCostSettings() {
        return callCostSettings.toFixed(2);
    }
    function setSmsCostSettings() {

        return smsCostSettings.toFixed(2);
    }
    
    function setTotal() {
        totalCost = callsTotalS + smsTotals
    }
    function getTotals() {
        return totalCost.toFixed(2);
    }
    
    function criticalLevel() {
        return totalCost >= criticalLevelSetting;
    }
    function warningLevel() {
        return totalCost >= warningLevelSetting;
    }
    function updateSettings(critical, warning) {
        criticalLevelSetting = critical;
        warningLevelSetting = warning;
    }
    
    return {  //  expose methods or variables
        setCallTotal,
        setSmsTotal,
        setCallCostSettings,
        setSmsCostSettings,
        getSmsTotal,
        getCallTotal,
        setTotal,
        getTotals,
        criticalLevel,
        warningLevel,
        updateSettings

    }
}