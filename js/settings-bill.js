// get a reference to the sms or call radio buttons

// get refences to all the settings fields

//get a reference to the add button

//get a reference to the 'Update settings' button

// create a variables that will keep track of all the settings

// create a variables that will keep track of all three totals.

//add an event listener for when the 'Update settings' button is pressed

//add an event listener for when the add button is pressed

//in the event listener get the value from the billItemTypeRadio radio buttons
// * add the appropriate value to the call / sms total
// * add the appropriate value to the overall total
// * add nothing for invalid values that is not 'call' or 'sms'.
// * display the latest total on the screen.
// * check the value thresholds and display the total value in the right color.
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


var callsTotalS = 0;
var smsTotals = 0;

var callCostSettings = 0;
var smsCostSettings = 0;

var warningLevel = warningLevelSetting.value;
var criticalLevel = criticalLevelSetting.value;

function updateBillSettings() {
    callCostSettings = Number(callCostSetting.value);
    SMScostSettings = Number(smsCostSetting.value);
    warningLevel = Number(warningLevelSetting.value);
    criticalLevel = Number(criticalLevelSetting.value);
    
    warningLevelSetting.innerHTML = warningLevel.toFixed(2);
    criticalLevelSetting.innerHTML = criticalLevel.toFixed(2);
}

function settingBillTotalBtn() {
    for (var i = 0; i < myRadios.length; i++) {
        var elem = myRadios[i];
        if (elem.checked == true) {
            if (elem.value === "call") {
                callsTotalS += Number(callCostSettings)
            } else if (elem.value === "sms") {
                smsTotals += Number(SMScostSettings)
            }

            callTotalSettings.innerHTML = callsTotalS.toFixed(2);
            smsTotalSettings.innerHTML = smsTotals.toFixed(2);
            var totalCost = callsTotalS + smsTotals;
            totalSettings.innerHTML = totalCost.toFixed(2);
        }
    }
    if (totalCost >= criticalLevel) {
        settingsBillAddBtnElement.disabled = true;
    }
    if (totalCost >= criticalLevel) {
        totalSettings.classList.remove("warning");
        totalSettings.classList.add("danger");
    }

    else if (totalCost >= warningLevel) {
        totalSettings.classList.add("warning");
        totalSettings.classList.remove("danger");
    }
    else {
        totalSettings.classList.remove("danger");
        totalSettings.classList.remove("warning");

    }
}

updateSettingsBtn.addEventListener('click', updateBillSettings);
settingsBillAddBtnElement.addEventListener('click', settingBillTotalBtn);