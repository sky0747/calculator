
/*Validation function for amount input form*/

function principalValidation() {
    var principal = document.getElementById("principal");
    if (principal.value <= 0) {
        alert("enter positive value");

    }
    if (principal.value == 0) {
        principal.autofocus;
    }

}

/*Function activated during moving slider */


function sliderRange() {
    var rangeValue = document.getElementById("sliderRangeValue");
    rangeValue.innerHTML = rate.value;

}

/*Function activated adfter clicking Compute Interest Button */

function compute() {

    var principal = document.getElementById("principal");
    var principal1 = principal.value;
    var rate = document.getElementById("rate");
    var rate1 = rate.value;
    var years = document.getElementById("years");
    var years1 = years.value;
    var futureYears = document.getElementById("futureYears");
    futureYears.innerHTML = Number(years1) + 2021;
    var interest = (principal1 * years1 * rate1) / 100;
    var result = document.getElementById("result");
    result.innerHTML = interest;
    var resultText = document.getElementById("interestRezult");
    resultText.innerHTML = "If you deposit" + " " + principal1 + "<br> at an interest rate of" + " " + rate1 + "<br>" + "You will receive an amount of" + " " + interest + "<br>" + "In the Year" + " " + futureYears.innerHTML;

    alert(resultText.innerHTML);

}

