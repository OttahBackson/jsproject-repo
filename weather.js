const apikey = "6b59ae9abf361f59101fe486d97ee9c5";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=nigeria&appid=6b59ae9abf361f59101fe486d97ee9c5&units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".btn")
const weatherIcon = document.querySelector(".weather-icon");

async function chechWeather(city) {
    const response = await fetch(apiURL + city + `$appid=${apikey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display ="block";
        document.querySelector(".weather").style.display ="none";
    }
    else {
        
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if (data.weather[0].main === "Clouds") {
        weatherIcon.src = "./images/cloud.png";
    }
    else if (data.weather[0].main == "Rain") {
        weatherIcon.src = "./images/rain.jpeg";
    }
    else if (data.weather[0].main == "Humidity") {
        weatherIcon.src = "./images/humidity.png"
    }
    else if (data.weather[0].main == "Wind") {
        weatherIcon.src = "./images/wind.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
        
    }


    
}

searchBtn.addEventListener("click", () => {
    chechWeather(searchBox.value);

})

