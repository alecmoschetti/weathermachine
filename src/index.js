import {getWeather} from './fetch';
import {
    displayWeatherDivs,
    getUnitPreference
} from './dom';

const form = document.querySelector('form');
const search = document.querySelector('#search');
const unitToggle = document.querySelector('#unitToggle');
let weather;

async function getResults() {
    try {
        const bool = getUnitPreference();
        const formValues = new FormData(form);
        const formObj = Object.fromEntries(formValues); 
        weather = formObj;
        const {city, country, state} = formObj;
        const results = await getWeather(city, state, country, bool);
        return results;
    } catch (error) {
        console.log(error);
    }
}

search.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const results = await getResults();
        displayWeatherDivs(results);
    } catch (error) {
        console.log(error);
    }
    form.reset();
});

unitToggle.addEventListener('click', async () => {
    try {
        const bool = getUnitPreference();
        const {city, country, state} = weather;
        const results = await getWeather(city, state, country, bool);
        displayWeatherDivs(results);
    } catch (error) {
        console.log(error);
    }
});


