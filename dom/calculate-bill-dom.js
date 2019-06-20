var billStringElement = document.querySelector(".billString");
var calculateBtnElement = document.querySelector(".calculateBtn");
var billTotalElement = document.querySelector(".billTotal");

let calculateBill = FactoryCalculateBill();  //  creating an instant so that you have access to closures that are defined inside the factory function 


// calculateBill.billTotal 

function calculateBtnClicked() {
    var billType = billStringElement.value
    var billTotal = calculateBill.billString(billType);
    var roundedBillTotal = billTotal.toFixed(2);
    billTotalElement.innerHTML = roundedBillTotal;

    var color = calculateBill.colorIndicator(billTotal); 

    if (color == 'danger') {
        billTotalElement.classList.add(color);
        billTotalElement.classList.remove('warning');
    }

    else if(color == 'warning') {
        billTotalElement.classList.add(color);
        billTotalElement.classList.remove('danger');
    }  
    
    else {
        billTotalElement.classList.remove('danger');
        billTotalElement.classList.remove('warning');
    }

}

calculateBtnElement.addEventListener('click', calculateBtnClicked);

