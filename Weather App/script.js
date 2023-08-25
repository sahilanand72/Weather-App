const cityInput = document.querySelector(".inputter");
const searchButton = document.querySelector(".searchBut");
const API_KEY = "1ed0895d0fac92238eb0dc530ab761cc";
//the api key is still not working.
//going to try other Apis sources for the weather app

//this function is for using the weather api
const getWeatherDetails = (cityName, lat, lon) => {
    const WEATHER_API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
        console.log(data);
    }).catch(() => {
        alert("An error occured while fetching the coordinates!");
    });
}
//this function is for geocoding api
const getCityCoordinates = () =>{
    const cityName = cityInput.value.trim();
    if(!cityName) return;
   
    const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&appid=${API_KEY}`;
    fetch(GEOCODING_API_URL).then(res => res.json()).then(data =>{
        if(!data.length) return alert(`No coordinates found for ${cityName}`);
        const{name,lat,lon} = data[0];
        getWeatherDetails(name,lat,lon);
        console.log(data)
    }).catch(() => {
        alert("An error occured while fetching the coordinates")
    })
}

searchButton.addEventListener("click",getCityCoordinates);
