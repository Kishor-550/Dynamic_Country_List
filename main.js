const countryArr = document.getElementById("countries");
const stateArr = document.getElementById("state");
const districtArr = document.getElementById("district");
const countryOutput = document.getElementById("country-output");
const stateOutput = document.getElementById("state-output");
const cityOutput = document.getElementById("city-output");

async function getData(endpoint) {
	const response = await fetch(`https://www.universal-tutorial.com/api/${endpoint}`, {
		method: "GET",
		headers: {
			Authorization:
				"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfZW1haWwiOiJhc2tAdW5pdmVyc2FsLXR1dG9yaWFsLmNvbSIsImFwaV90b2tlbiI6IlQ2VlBOUmZXbkxFbmdsMHd2djctZ1d2Y09KRHFPSkptc3ZoNkNOdGo5a3p1Z1RSYkhvdXVET1NXeTdzYmJzdG5taDAifSwiZXhwIjoxNjgyNjgwNzYzfQ.-_bf1xd3K9ZD_3g89PBjrYW0LVIdFeGL8DV1EpHSS4M",
			Accept: "application/json",
		},
	});
	const data = await response.json();
	return data;
}

async function showData() {
	const dataArr = await getData("countries");
	const stateList = await getData(`states/${dataArr[0]["country_name"]}`);
	const districtList = await getData(`cities/${stateList[0]["state_name"]}`);
	let option;
	countryOutput.innerText = dataArr[0]["country_name"];
	stateOutput.innerText = stateList[0]["state_name"];
	cityOutput.innerText = districtList[0]["city_name"];
	for (const element of dataArr) {
		option = document.createElement("option");
		console.table({ Country_Code: element["country_phone_code"], Country_Code: element["country_short_name"] });

		option.value = element["country_name"];
		option.text = element["country_name"];
		countryArr.appendChild(option);
	}
	for (const element of stateList) {
		option = document.createElement("option");
		option.value = element["state_name"];
		option.text = element["state_name"];
		stateArr.appendChild(option);
	}
	for (const element of districtList) {
		option = document.createElement("option");
		option.value = element["city_name"];
		option.text = element["city_name"];
		districtArr.appendChild(option);
	}
}
showData();
countryArr.addEventListener("change", async () => {
	const dataArr = await getData(`states/${countryArr.value}`);
	stateArr.innerHTML = "";
	districtArr.innerHTML = "";
	countryOutput.innerText = countryArr.value;
	stateOutput.innerText = stateArr.value;
	cityOutput.innerText = districtArr.value;
	for (const element of dataArr) {
		var option = document.createElement("option");
		option.value = element["state_name"];
		option.text = element["state_name"];
		stateArr.appendChild(option);
	}
});
stateArr.addEventListener("change", async () => {
	const dataArr = await getData(`cities/${stateArr.value}`);
	districtArr.innerHTML = "";
	countryOutput.innerText = countryArr.value;
	stateOutput.innerText = stateArr.value;
	cityOutput.innerText = districtArr.value;
	for (const element of dataArr) {
		var option = document.createElement("option");
		option.value = element["city_name"];
		option.text = element["city_name"];
		districtArr.appendChild(option);
	}
});
districtArr.addEventListener("change", async () => {
	cityOutput.innerText = districtArr.value;
});
