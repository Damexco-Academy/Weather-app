let city = document.getElementById('query');
let searchButton = document.getElementById('search-button');
let tempText = document.getElementById('temp');
let sumText = document.getElementById('date-time');
let image = document.getElementById('image');
let newLocation = document.getElementById('location');
let wind = document.getElementById('wind');


searchButton.addEventListener('click', async () => {
    let loc = await getCityLoc(city.value);
    console.log(loc);
    let weatherResult = getWeatherInfo(loc[0].lat, loc[0].lon);
})

async function getWeatherInfo(latt, long) {
    const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${long}%2C${latt}`;
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'ef23e922edmsh11445b34e6ca89fp1764bfjsn198673c664e6',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
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

async function getCityLoc() {
    const url = 'https://weatherapi-com.p.rapidapi.com/search.json?q=lagos';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ef23e922edmsh11445b34e6ca89fp1764bfjsn198673c664e6',
            'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error);
        return error;
    }
}