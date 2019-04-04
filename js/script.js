// Based on an 8:1 water:coffeebean ratio
const juniorRate = 35;
let tradAmount = document.querySelector("#trad-amount");
let airAmount = document.querySelector("#air-amount");
let junAmount = document.querySelector("#jun-amount");
let distMiles = document.querySelector("#oneway-miles");
let radios = document.getElementsByName('application');
let dayOfWeek = document.querySelector("#day-week");
let monthOfWed = document.querySelector("#month-wed");
let resultDisplay1 = document.querySelector("#result-display1");
let result1 = document.querySelector("#result1");
let resultDisplay2 = document.querySelector("#result-display2");
let result2 = document.querySelector("#result2");
	

const getPrice = () => {
    let traditional = tradAmount.value;
	let airbrush = airAmount.value;
	let juniors = junAmount.value;
	let miles = distMiles.value;
	let totalCount = +traditional + +airbrush;
	let bTrad = radios[0].checked;
	let day = dayOfWeek.value;
	let month = monthOfWed.value;
 
	let airbrushPrice = airbrush * getAirBrushPrice(totalCount);
	let traditionalPrice = traditional * getTraditionalPrice(totalCount);
	let juniorPrice = juniors * juniorRate;
	let travelFee = getTravelFee(miles);
	let bridePrice = getBridePrice(totalCount, bTrad);
	let bridalTrial = getTrial(bTrad);
	
	if (getMinimum(day, month, totalCount)){
	
    let total = airbrushPrice + traditionalPrice + juniorPrice + travelFee + bridePrice;	
	let grandTotal = total + +bridalTrial;	
    
	result1.textContent = "Your Bridal Package cost is $" + total;
    resultDisplay1.style.display = "block";
	
	result2.textContent = "Your Trial will be $"+ bridalTrial + " making your GRAND TOTAL $" + grandTotal;
    resultDisplay2.style.display = "block";
	}
	
	
	else{
		alert("MINIMUM REQUIREMENTS NOT MET");
		result1.textContent = "Saturday Weddings Apr - Nov have a 4 person minimum including the bride.";
		resultDisplay1.style.display = "block";
		result2.textContent = "";
		resultDisplay2.style.display = "block";	
	}

}

const getBridePrice = (total, trad) => {
	if (trad) {
		
	if (total >= 5){
		return 115;
	}
	else if (total >= 2) {
		return 120;
	}
	else {
		return 130;
	}
	}
	else {
		if (total >= 5){
		return 125;
	}
	else if (total >= 2) {
		return 130;
	}
	else {
		return 140;
	}
	}
}

const getAirBrushPrice = (total) => {
	if (total >= 5){
		return 75;
	}
	else if (total >= 2) {
		return 80;
	}
	else {
		return 85;
	}
}

const getTraditionalPrice = (total) => {
	if (total >= 5){
		return 55;
	}
	else if (total >= 2) {
		return 70;
	}
	else {
		return 75;
	}
}

const getTravelFee = (miles) => {
	if (miles > 30){
		return miles - 30;
	}
	else {
		return 0;
	}
}

const getMinimum = (day, month,totalCount) => {
	if ((day == 6) &&(month >= 3) && (month < 11) && (totalCount < 3)){
		return false;
	}
	else {
		return true;
	}

}

const getTrial = (bTrad) => {
	if (bTrad){
		return 65;
	}
	else{
		return 75;
	}

}




