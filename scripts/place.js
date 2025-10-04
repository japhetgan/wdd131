const currentYear = document.querySelector("#currentyear");
const lastModified = document.querySelector("#lastModified");
const temperature = document.querySelector("#temperature");
const wind = document.querySelector("#wind");
const windChill = document.querySelector("#wind-chill");
const today = new Date();

const temperatureValue = parseInt(temperature.textContent.split(" ")[0]);
const windValue = parseInt(wind.textContent.split(" ")[0]);

currentYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;

const calculateWindChill = (temp, windSpeed) => {
  return (
    13.12 +
    0.6215 * temp -
    11.37 * Math.pow(windSpeed, 0.16) +
    0.3965 * temp * Math.pow(windSpeed, 0.16)
  );
};

if (temperatureValue <= 10 && windValue > 4.8) {
  windChill.innerHTML = `${Math.round(
    calculateWindChill(temperatureValue, windValue)
  )} °C`;
} else {
  windChill.innerHTML = "N/A";
}
