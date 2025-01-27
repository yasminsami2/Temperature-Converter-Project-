function convertTemperature() {
  const temperature = parseFloat(document.getElementById("temperature").value);
  const unit = document.getElementById("unit").value;
  const resultDiv = document.getElementById("result");

  if (isNaN(temperature)) {
    resultDiv.textContent = "Please enter a valid temperature.";
    return;
  }

  let convertedTemp;
  let convertedUnit;

  if (unit === "celsius") {
    convertedTemp = (temperature * 9) / 5 + 32;
    convertedUnit = "Fahrenheit";
  } else {
    convertedTemp = ((temperature - 32) * 5) / 9;
    convertedUnit = "Celsius";
  }

  resultDiv.textContent = `Converted Temperature: ${convertedTemp.toFixed(
    2
  )}° ${convertedUnit}`;
}
