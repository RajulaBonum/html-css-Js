//Declaring variables
const select = document.querySelector("select");
const para = document.querySelector("p");

//Selecting an event and giving it a function
select.addEventListener("change", setweather);

//function declaration
function setweather() {
	const choice = select.value;

	if (choice === "sunny") {
		para.textContent = "It is nice and sunny outside. Wear shorts!";
	}
	else if (choice === "rainy") {
		para.textContent = "Rain is falling outside, dress heavily";
	}
	else if (choice === "snowing") {
		para.textContent = "The snow is coming down";
	}
	else if (choice === "overcast") {
		para.textContent = "Not raining but the sky is grey and gloomy";
	}
	else {
		para.textContent = "";
	}
}