function age() {
		let birthDate = "2005-11-23";

		let birthDateObj = new Date(birthDate);

		let currentDate = new Date();

		let ageInMilliseconds = currentDate - birthDateObj;
		let ageInYears = ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25);

		document.getElementById("age").innerHTML = (ageInYears).toFixed(7).replace(".", ",") + " y.o.";
}

age()
setInterval(age, 900)
