// import logo from './logo.svg';
import './App.css';

function App() {

  const apiKey ="fc063d2ad048238fd5a678d4b201b089";
  const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const searchBox = document.querySelector(".search input");
  const searchBtn = document.querySelector(".search button");
  const weatherIcon = document.querySelector(".weather-icon ");
  async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status === 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else {
    var data =await response.json()
    document.querySelector(".city").innerHTML =data.name;
    document.querySelector(".temp").innerHTML = Math.round( data.main.temp) +"°C";
    document.querySelector(".humidity").innerHTML =data.main.humidity +"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";

    if(data.weather[0].main =="Clouds"){
        weatherIcon.src ="./clouds.png";
    }
    else if(data.weather[0].main =="Clear"){
        weatherIcon.src ="./clear.png";
    }
    else if(data.weather[0].main=="Dizzle"){
        weatherIcon.src="./drizzle.png";
    }
    else if(data.weather[0].main=='Rain'){
        weatherIcon.src="./rain.png";
    }
    else if (data.weather[0].main=="Mist"){
        weatherIcon.src="./mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
}

    }

searchBtn.addEventListener("click",()=>{
checkWeather(searchBox.value);
})
checkWeather();
  return (
    <div className="App">
      
      <div class="card">
        <div class="search">  
         <input type="text" placeholder="Enter City Name" spellcheck="false"/>
        <button><img src="./search.png"/></button>
        </div>
        <div class="error">
            <p>Invalid City Name </p>
        </div>
        <div class="weather">
            <img src="./rain.png" class ="weather-icon"/>
            <h1 class="temp"> 22°C</h1>
            <h2 class="city">New York</h2>
            <div class="details">
                <div class="col">
                    <img src="./humidity.png"/>
                    <div>
                        <p class="humidity">50%</p>
                        <p>Humidity</p>
                    </div>
                </div>
                <div class="col">
                    <img src="./wind.png"/>
                    <div>
                        <p class="wind">15km/h</p><span></span>
                        <p>Wind</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
  );
}

export default App;
