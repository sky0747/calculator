function sliderRange() {
    var rangeValue = document.getElementById("sliderRangeValue");
    rangeValue.innerHTML = rate.value;

}
function futureYears() {
    var years = document.getElementById("years");
    var years1 = years.value;
    var futureYears = document.getElementById("futureYears");
    futureYears.innerHTML = Number(years1) + 2021;

}


function compute() {

    var principal = document.getElementById("principal");
    var principal1 = principal.value;
    var rate = document.getElementById("rate");
    var rate1 = rate.value;
    var years = document.getElementById("years");
    var years1 = years.value;
    var interest = (principal1 * years1 * rate1) / 100;
    var result = document.getElementById("result");
    result.innerHTML = interest;
    alert(result.innerHTML);





}

