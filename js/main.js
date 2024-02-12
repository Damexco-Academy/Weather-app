let city = document.getElementById('query');
let searchButton = document.getElementById('search-button');
let tempText = document.getElementById('temp');
let sumText = document.getElementById('date-time');
let image = document.getElementById('image');
let newLocation = document.getElementById('location');
let wind = document.getElementById('wind');


searchButton.addEventListener('click', ()=> {
    let weatherResult = getWeatherInfo(city.value);
})

async function getWeatherInfo(cityName){
    const url = 'https://the-weather-api.p.rapidapi.com/api/weather/' + cityName;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef23e922edmsh11445b34e6ca89fp1764bfjsn198673c664e6',
		'X-RapidAPI-Host': 'the-weather-api.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
    console.log(result);
    tempText.innerHTML = result.data.temp;
    sumText.innerHTML = result.data.aqi_remark;
    image.src = result.data.bg_image;
    newLocation.innerHTML = result.data.city;
    wind.innerHTML = result.data.wind;

    
	
} catch (error) {
	console.error(error);
}
}