//Bài 1 
console.log("--Bài 1--")
function bai1(number) {
	return number*number;
}
//Vd : 
console.log(bai1(1));
console.log(bai1(2));

// Bài 2 
console.log("--Bài 2--")
function calculateCentury(year) {
	return Math.ceil(year/100);
}
//Vd
console.log(calculateCentury(2019));

// Bài 3
console.log("--Bài 3--")
var text = "cô đơn giữa cuộc vui đông người , cố mỉm cười nhưng trong lòng chẳng được vui";
function bai3() {
	var a = text.substring(0, 9);
	return a + "...";
}
//vd
console.log(bai3());
