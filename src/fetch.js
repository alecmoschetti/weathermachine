import {toStandardTime, round} from './units';

const weatherApiKey = `e1003cecf170741babb9d5bfb8134423`;

async function getWeather(city, state, country, bool) {
    try {
        let response;
        if (bool) { //we want metric
            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=metric&appid=${weatherApiKey}`, {mode: 'cors'});
        } else if (!bool) {
            response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city},${state},${country}&units=imperial&appid=${weatherApiKey}`, {mode: 'cors'});
        }
        const weatherData = await response.json();
        let {main, name, sys, weather, wind} = weatherData;
        toStandardTime(sys); // making a human readable sunrise and sunset string in the sys object
        round(main, wind); //rounding our numbers
        const weatherObj = {
            "city": name,
            "main": weather[0].main,
            "current-temp": main.temp,
            "feels": main.feels_like,
            "wind": `${wind.speed}`,
            "humidity": `${main.humidity} %`,
            "max-temp": main.temp_max,
            "min-temp": main.temp_min,
            "sunrise": sys.sunrise,
            "sunset": sys.sunset,
        }
        return weatherObj;
    } catch (error) {
        console.log(error);
    }
}

export {getWeather};