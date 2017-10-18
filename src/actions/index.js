import axios from 'axios';

const API_KEY =	'a4130c640f989491c3149a1d93b3bc88';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

// Action creator to fetch weather
export function fetchWeather(city) {

    const url = `${ROOT_URL}&q=${city},us`;
    // This request is a promise
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}
