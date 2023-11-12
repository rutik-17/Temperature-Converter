const celsiusField = document.querySelector("#celsius");
const degree = document.querySelector("#degree");
const convertBtn = document.querySelector("#btn");
const tempType = document.querySelector("#temp-type");

window.addEventListener("load", () => {
    degree.value = 0;
    celsiusField.innerHTML = "";
} )

convertBtn.addEventListener("click", () => {
    let inputvalue = degree.value;
    if (tempType.value === "fahrenheit") {
        const fahrenheittoCelsius = (inputvalue - 32) * (5 / 9);
        celsiusField.innerHTML = `${fahrenheittoCelsius.toFixed(3)} &#8451`
    }
    if (tempType.value === "kelvin") {
        const kelvintoCelsius = parseInt(inputvalue) + parseInt(273.15);
        celsiusField.innerHTML = `${kelvintoCelsius.toFixed(3)} &#8451`
    }
})
