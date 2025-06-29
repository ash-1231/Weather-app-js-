const ApiKey="a9344a561003d6b1177f3299e82021c2"
const ApiUrl="https://api.openweathermap.org/data/2.5/weather?q=";

const SearchBox=document.querySelector(".search input");
const SearchBtn=document.querySelector(".search button");

const WeatherIcon=document.querySelector(".weather-icon");

async function CheckWeather(city) {
    const respone = await fetch(ApiUrl + city + `&appid=${ApiKey}`+`&units=metric` );
    let data = await respone.json();
    
    if(respone.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }
    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds" ){
        WeatherIcon.src="images/clouds.png";
    }
    else if(data.weather[0].main== "Clear"){
        WeatherIcon.src= "images/clear.png";
    }
    else if(data.weather[0].main== "Rain"){
        WeatherIcon.src= "images/Rain.png";
    }
    else if(data.weather[0].main== "Drizzle"){
        WeatherIcon.src= "images/drizzle.png";
    }
    else if(data.weather[0].main== "Mist"){
        WeatherIcon.src= "images/mist.png";
    }
    else if(data.weather[0].main== "Snow"){
        WeatherIcon.src= "images/snow.png";
    }
    else if(data.weather[0].main== "Wind"){
        WeatherIcon.src= "images/wind.png";
    }

    document.querySelector(".weather").style.display= "block";
    
}
SearchBtn.addEventListener("click",()=>{
    CheckWeather(SearchBox.value)
})


