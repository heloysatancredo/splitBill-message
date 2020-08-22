/********************************************************************************************/
/********************** Tip Calculator ******************************************************/
/********************************************************************************************/
//  Add your Event Listeners
//  Pull the User Input from the Web Page
//  Process the Information
//  Put the Results Back on the Web Page for the User to see
//
//  Remember that you're pulling Dollar amounts from the Web Page
//  Remember that you're pulling a Whole Number for the Tip (ie: 20, not .2)
//
/********************************************************************************************/


calcTip.addEventListener("click", () => {
    //alert("test");
    let bill = parseFloat(inpBill.value);
    let tip = inpTip.value / 100;
    let tipValue = tip * bill;
    let total = (bill + tipValue).toFixed(2);
    msgArea.innerHTML = `Your total bill is $${total} (bill is $${bill.toFixed(2)} and tip is $${tipValue.toFixed(2)})`;
})

splitBill.addEventListener("click", () => {
    //alert("test");
    let bill = parseFloat(inpBill.value);
    let tip = inpTip.value / 100;
    let tipValue = tip * bill;
    let guests = parseInt(inpGuests.value);
    let total = (bill + tipValue).toFixed(2);
    let split = (total / guests).toFixed(2);
    msgArea.innerHTML = `Each guest should pay $${split} (total bill is $${total} and guests are ${guests}).`;
})




/********************************************************************************************/
/********************** Feedback Form *******************************************************/
/********************************************************************************************/
//  Add your Event Listener
//  Pull the User Input from the Web Page
//  Process the Information
//  Put the Results Back on the Web Page for the User to see
/********************************************************************************************/


submit.addEventListener("click", () => {
    //alert("test");
    let user = emailAddr.value;
    let msg = usrMessage.value;

    if (mList.checked) {
        submitMsg.innerHTML = `Thank you for your comment, your email ${user} has been added to our mailing list! You can check your comment below: <br> ${msg}`;
    } else {
        submitMsg.innerHTML = `Thank you for your comment, maybe next time you can join our mailing list! You can check your comment below: <br> ${msg}`;
    }
})
/********************************************************************************************/
/********************** End of Midterm ******************************************************/
/********************************************************************************************/