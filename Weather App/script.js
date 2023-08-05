
const apiKey = "836a33087449687f5b4e1bc645f0303f"
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchInput = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const errorClass = document.querySelector(".error");
const weather = document.querySelector(".weather");
const cityClass = document.querySelector(".city");
const tempClass = document.querySelector(".temp")
const humidityClass = document.querySelector(".humidity")
const windClass = document.querySelector(".wind")


async function checkWeather(city) {
    const response =await fetch(apiUrl + `${city}&appid=${apiKey}`)
    
    if (response.status == 404) {
        errorClass.style.display="block";
        weather.style.display = "none";
    }
    else{
        
    var data = await response.json();

    cityClass.innerHTML=data.name;
    tempClass.innerHTML=Math.round(data.main.temp) + "°C"; 
    humidityClass.innerHTML=data.main.humidity + "%"; 
    windClass.innerHTML=data.wind.speed + " km/h"; 

    if (data.weather[0].main == "Clouds") {
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/clear.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "images/mist.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rain.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snow.png";
    }
    
    
    weather.style.display = "block";
    errorClass.style.display="none";

    }

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchInput.value)
});

