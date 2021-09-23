const billAmount = document.querySelector("#bill-Amount");
const cashGiven = document.querySelector("#cash-Given");
const calculateButton = document.querySelector("#calculateButton");
const message = document.querySelector("#error-message");
const noteCounting = document.querySelectorAll(".note-counting");

console.log(noteCounting);
// console.log(cashGiven.value);
// console.log(billAmount.value);
var currencyAre = [2000, 500, 100, 20, 10 , 5, 1];
calculateButton.addEventListener("click",function validateBillAndCashAmount(){
    message.style.display = "none";
    bill = Number(billAmount.value);
    cash = Number(cashGiven.value);
    if(bill > 0 && cash > 0){
        if(cash >= bill){
            var returnAmount = cash - bill;
            showMessage("Money to be returend = ₹" + returnAmount);
            // showMessage(returnAmount);
            // console.log("AmountToBeReturned = "+returnAmount);


            

            for(var i=0;i<currencyAre.length;i++)
            {
                var numberOfNotes = Math.trunc(returnAmount / currencyAre[i]);
                returnAmount = returnAmount % currencyAre[i];
                noteCounting[i].innerText = numberOfNotes;
            } 
            // showMessage("sucess");
        }
        else{
            showMessage("Need more money🤑💰🤑!");
        }
    }
    else{
        showMessage("Inavlid amount input!");
    }
}
)
function showMessage(strings){
    message.style.display = "block";
    message.innerText = strings;
}

