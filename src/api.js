//Get Api from RapidAPI
export const geoApiOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'Api Key', //Input here the Api key from RapidApi
        'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
    }
};

export const GEO_API_URL = "https://wft-geo-db.p.rapidapi.com/v1/geo";

export const WEATHER_API_URL = "https://api.openweathermap.org/data/2.5";
export const WEATHER_API_KEY = "Api Key"; //Input here the Api Key from OpenWeather
