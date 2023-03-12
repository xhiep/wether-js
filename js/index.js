const APP_ID = "432ac5dd0f9dc957d25df3893ee82cc6";
const DEFAULT_VALUE = "--";

const searchInput = document.querySelector(".search-input");
const cityName = document.querySelector(".city-name");
const weatherState = document.querySelector(".weather-state");
const temperature = document.querySelector(".temperature");
const weatherIcon = document.querySelector(".weather-icon");
const humidity = document.querySelector(".humidity");
const windSpeed = document.querySelector(".wind-speed");
const sunrise = document.querySelector(".sunrise");
const sunset = document.querySelector(".sunset");

searchInput.addEventListener("change", (e) => {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&units=metric&lang=vi`
  )
    .then((res) => res.json())
    .then(async (res) => {
      const data = await res;
      cityName.innerHTML = data.name || DEFAULT_VALUE;

      weatherState.innerHTML.toUpperCase = data.weather[0].description || DEFAULT_VALUE;
      weatherIcon.setAttribute('src', `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
      
      temperature.innerHTML=Math.round(data.main.temp)||DEFAULT_VALUE;
      
      sunrise.innerHTML=moment.unix(data.sys.sunrise).format('H:mm') ||DEFAULT_VALUE;
      sunset.innerHTML=moment.unix(data.sys.sunset).format('H:mm') ||DEFAULT_VALUE;
      humidity.innerHTML=data.main.humidity||DEFAULT_VALUE;
      windSpeed.innerHTML=(data.wind.speed*3.6).toFixed(2)||DEFAULT_VALUE;
    });
});
