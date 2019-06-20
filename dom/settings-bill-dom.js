var billItemTypeWithSettings = document.querySelector(".billItemTypeWithSettings");
var callTotalSettings = document.querySelector(".callTotalSettings");
var smsTotalSettings = document.querySelector(".smsTotalSettings");
var totalSettings = document.querySelector(".totalSettings");
var callCostSetting = document.querySelector(".callCostSetting");
var smsCostSetting = document.querySelector(".smsCostSetting");
var warningLevelSetting = document.querySelector(".warningLevelSetting");
var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
var updateSettingsBtn = document.querySelector(".updateSettings");
var settingsBillAddBtnElement = document.querySelector(".settingsBillAddBtn");
var myRadios = document.querySelectorAll('.billItemTypeWithSettings');

let billSettings = FactoryBillSettings(); 


settingsBillAddBtnElement.disabled = true;


function updateBillSettings() {
    settingsBillAddBtnElement.disabled = false;

     var warningLevel = Number(warningLevelSetting.value);
     var criticalLevel = Number(criticalLevelSetting.value);
     billSettings.updateSettings(criticalLevel, warningLevel)


    
    
        if(billSettings.getTotals() >= criticalLevel) {
            totalSettings.classList.add("danger");
            totalSettings.classList.remove("warning");
                 
            settingsBillAddBtnElement.disabled = true;
             }

             else if(billSettings.getTotals() >= warningLevel && billSettings.getTotals() < criticalLevel) {
                totalSettings.classList.add("warning");
                totalSettings.classList.remove("danger");

                
            }
            else {
                totalSettings.classList.remove("warning");
                totalSettings.classList.remove("danger");
             }
  

 }

 function settingBillTotalBtn() {
    var warningLevelSetting = document.querySelector(".warningLevelSetting");
    var criticalLevelSetting = document.querySelector(".criticalLevelSetting");
   
    callCostSettings = Number(callCostSetting.value);
    
    SMScostSettings = Number(smsCostSetting.value);
    warningLevel = Number(warningLevelSetting.value);
    criticalLevel = Number(criticalLevelSetting.value);

    billSettings.updateSettings(criticalLevel, warningLevel)
     for (var i = 0; i < myRadios.length; i++) {
         var elem = myRadios[i];
         if (elem.checked == true) {
             if (elem.value === "call") {
                 //callsTotalS += Number(callCostSettings)
                 billSettings.setCallTotal(callCostSettings)
             } else if (elem.value === "sms") {
                 //smsTotals += Number(SMScostSettings)
                 billSettings.setSmsTotal(SMScostSettings)
             }

    callTotalSettings.innerHTML = billSettings.getCallTotal(callCostSettings);
    smsTotalSettings.innerHTML = billSettings.getSmsTotal();
     totalCost = billSettings.setTotal();
    totalSettings.innerHTML = billSettings.getTotals();

         }
     }


        if(billSettings.getTotals() >= criticalLevel) {
                 totalSettings.classList.remove("warning");
                 totalSettings.classList.add("danger");
                  settingsBillAddBtnElement.disabled = true;
             }

             else if(billSettings.getTotals() >= warningLevel) {
                totalSettings.classList.remove("danger");
                totalSettings.classList.add("warning");
               
            }
            else {
                totalSettings.classList.remove("warning");
                totalSettings.classList.remove("danger");
             }
  }

 updateSettingsBtn.addEventListener('click', updateBillSettings);
settingsBillAddBtnElement.addEventListener('click', settingBillTotalBtn);