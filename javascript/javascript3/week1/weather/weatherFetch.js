const appKey = "d20eb65d80f5098f57b789523f342604";

let searchButton = document.getElementById("search-btn");
let searchInput = document.getElementById("search-txt");
let cityName = document.getElementById("city-name");
let icon = document.getElementById("icon");
let temperature = document.getElementById("temp");
let humidity = document.getElementById("humidity-div");
let wind = document.getElementById("wind-div");
let clouds = document.getElementById("clouds");
let sunrise = document.getElementById("sunrise");
let sunset = document.getElementById("sunset");

searchButton.addEventListener("click", findWeatherDetails);
searchInput.addEventListener("keyup", enterPressed);

function enterPressed(event) {
  if (event.key === "Enter") {
    findWeatherDetails();
  }
}

function findWeatherDetails() {
  if (searchInput.value === "") {
    try {
        alert("Please Enter a Valid address!!!");
      }
      catch(err) {
        document.getElementById("demo").innerHTML = err.message;
      }
  
  }else {
    let searchLink = "https://api.openweathermap.org/data/2.5/weather?q=" + searchInput.value + "&appid="+appKey;
   httpRequestAsync(searchLink, theResponse);
  }
 }

function theResponse(response) {
  let jsonObject = JSON.parse(response);
  cityName.innerHTML = "Location: " + jsonObject.name;
  icon.src = "http://openweathermap.org/img/w/" + jsonObject.weather[0].icon + ".png";
  temperature.innerHTML = "Tempreture: "+ parseInt(jsonObject.main.temp - 273) + "°";
  humidity.innerHTML = "humadity: " + jsonObject.main.humidity + "%";
  wind.innerHTML = "wind: " + jsonObject.wind.speed + "Km/hr";
  clouds.innerHTML = "clouds: "+ jsonObject.clouds.all +"%";
  sunrise.innerHTML = "sunrise: "+ jsonObject.sys.sunrise;
  sunset.innerHTML = "sunset: "+ jsonObject.sys.sunset;
}

function httpRequestAsync(url, callback)
{
    var httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = () => { 
        if (httpRequest.readyState == 4 && httpRequest.status == 200)
            callback(httpRequest.responseText);
    }
    httpRequest.open("GET", url, true); // true for asynchronous 
    httpRequest.send();
}


// save my location 


// use my current location
