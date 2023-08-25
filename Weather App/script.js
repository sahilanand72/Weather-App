const cityInput = document.querySelector(".inputter");
const searchButton = document.querySelector(".searchBut");
const API_KEY = "1ed0895d0fac92238eb0dc530ab761cc";
//the api key is still not working.
//going to try other Apis sources for the weather app

const getCityCoordinates = () =>{
    const cityName = cityInput.value.trim();
    if(!cityName) return;
   
    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data =>{
        console.log(data)
    }).catch(() => {
        alert("An error occured while fetching the coordinates")
    })
}

searchButton.addEventListener("click",getCityCoordinates);
