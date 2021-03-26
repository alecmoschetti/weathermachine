//dom module
//dom selectors
const weatherContainer = document.getElementById('weatherDisplay');
const unitToggle = document.querySelector('#unitToggle');
//svg's to be generated and posted to the dom
const svgs = {
    sun: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="12" cy="12" r="4" />
        <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" />
        </svg>`,
    wind: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
        <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
        <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
        </svg>`,
    umbrella: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 12a8 8 0 0 1 16 0z" />
        <path d="M12 12v6a2 2 0 0 0 4 0" />
        </svg>`,
    temperature: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
        <line x1="10" y1="9" x2="14" y2="9" />
        </svg>`,
    tempHigh: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
        <line x1="8" y1="9" x2="12" y2="9" />
        <line x1="16" y1="9" x2="22" y2="9" />
        <line x1="19" y1="6" x2="19" y2="12" />
        </svg>`,
    tempLow: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 13.5a4 4 0 1 0 4 0v-8.5a2 2 0 0 0 -4 0v8.5" />
        <line x1="8" y1="9" x2="12" y2="9" />
        <line x1="16" y1="9" x2="22" y2="9" />
        </svg>`,
    cloud: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
        </svg>`,
    cloudRain: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
        <path d="M11 13v2m0 3v2m4 -5v2m0 3v2" />
        </svg>`,
    cloudStorm: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-1" />
        <polyline points="13 14 11 18 14 18 12 22" />
        </svg>`,
    cloudSnow: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7" />
        <path d="M11 15v.01m0 3v.01m0 3v.01m4 -4v.01m0 3v.01" />
        </svg>`,
    cloudFog: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 16a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
        <line x1="5" y1="20" x2="19" y2="20" />
        </svg>`,
    mist: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M5 5h3m4 0h9" />
        <path d="M3 10h11m4 0h1" />
        <path d="M5 15h5m4 0h7" />
        <path d="M3 20h9m4 0h3" />
        </svg>`,
    snowflake: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />
        <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(60 12 12)" />
        <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(120 12 12)" />
        <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(180 12 12)" />
        <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(240 12 12)" />
        <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" transform="rotate(300 12 12)" />
        </svg>`,
    city: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="3" y1="21" x2="21" y2="21" />
        <path d="M5 21v-14l8 -4v18" />
        <path d="M19 21v-10l-6 -4" />
        <line x1="9" y1="9" x2="9" y2="9.01" />
        <line x1="9" y1="12" x2="9" y2="12.01" />
        <line x1="9" y1="15" x2="9" y2="15.01" />
        <line x1="9" y1="18" x2="9" y2="18.01" />
        </svg>`,
    feels: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M8 13v-8.5a1.5 1.5 0 0 1 3 0v7.5" />
        <path d="M11 11.5v-2a1.5 1.5 0 1 1 3 0v2.5" />
        <path d="M14 10.5a1.5 1.5 0 0 1 3 0v1.5" />
        <path d="M17 11.5a1.5 1.5 0 0 1 3 0v4.5a6 6 0 0 1 -6 6h-2h.208a6 6 0 0 1 -5.012 -2.7a69.74 69.74 0 0 1 -.196 -.3c-.312 -.479 -1.407 -2.388 -3.286 -5.728a1.5 1.5 0 0 1 .536 -2.022a1.867 1.867 0 0 1 2.28 .28l1.47 1.47" />
        </svg>`,
    humidity: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
        <path d="M12 3v17" />
        <path d="M12 12l3.544 -3.544" />
        <path d="M12 17.3l5.558 -5.558" />
        </svg>`,
    sunrise: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
        <line x1="3" y1="21" x2="21" y2="21" />
        <path d="M12 9v-6l3 3m-6 0l3 -3" />
        </svg>`,
    sunset: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
        <line x1="3" y1="21" x2="21" y2="21" />
        <path d="M12 3v6l3 -3m-6 0l3 3" />
        </svg>`,
    tornado: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <line x1="21" y1="4" x2="3" y2="4" />
        <line x1="13" y1="16" x2="7" y2="16" />
        <line x1="11" y1="20" x2="15" y2="20" />
        <line x1="6" y1="8" x2="20" y2="8" />
        <line x1="4" y1="12" x2="16" y2="12" />
        </svg>`,
    fire: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M12 12c2 -2.96 0 -7 -1 -8c0 3.038 -1.773 4.741 -3 6c-1.226 1.26 -2 3.24 -2 5a6 6 0 1 0 12 0c0 -1.532 -1.056 -3.94 -2 -5c-1.786 3 -2.791 3 -4 2z" />
        </svg>`,
    pollution: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 21c1.147 -4.02 1.983 -8.027 2 -12h6c.017 3.973 .853 7.98 2 12" />
        <path d="M12.5 13h4.5c.025 2.612 .894 5.296 2 8" />
        <path d="M9 5a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1a2.4 2.4 0 0 0 2 1a2.4 2.4 0 0 0 2 -1a2.4 2.4 0 0 1 2 -1a2.4 2.4 0 0 1 2 1" />
        <line x1="3" y1="21" x2="22" y2="21" />
        </svg>`,
    fog: `<svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M7 16a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
        <line x1="5" y1="20" x2="19" y2="20" />
        </svg>`,
    }

const tempFar = `
    <div class="svg__container">
        <svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="6" cy="8" r="2" />
        <line x1="13" y1="12" x2="18" y2="12" />
        <path d="M20 6h-6a1 1 0 0 0 -1 1v11" />
        </svg>
    </div>`;

const tempCel = `
    <div class="svg__container">
        <svg viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <circle cx="6" cy="8" r="2" />
        <path d="M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3" />
        </svg>
    </div>`;

const descriptions = {
    "Thunderstorm": svgs.cloudStorm,
    "Clear": svgs.sun,
    "Clouds": svgs.cloud,
    "Smoke": svgs.fire,
    "Ash": svgs.pollution,
    "Haze": svgs.pollution,
    "Dust": svgs.pollution,
    "Drizzle": svgs.umbrella,
    "Rain": svgs.umbrella,
    "Fog": svgs.fog,
    "Snow": svgs.snowflake,
    "Mist": svgs.mist,
    "Tornado": svgs.tornado,
};

function getUnitPreference() {
    if (unitToggle.checked) {
        return true;
    } else {
        return false;
    }
}

function makeWeatherDiv() {
    let div = document.createElement('div');
    div.classList.add('weather__info');
    let divSVG = document.createElement('div');
    divSVG.classList.add('svg__container');
    div.append(divSVG);
    return div;
}

function displayWeatherDivs(obj) {
    clearWeatherDisplay();
    let bool = getUnitPreference();
    for (let prop in obj) {
        let p = document.createElement('p');
        if (bool) {
            if (prop === ('current-temp') || (prop === 'feels') || (prop === 'max-temp') || (prop === 'min-temp')) {
                p.innerHTML = `${prop}: <span>${obj[prop]} ${tempCel}</span>`;
            } else if (prop === 'wind') {
                p.innerHTML = `${prop}: <span>${obj[prop]} m/s</span>`;
            } else {
                p.innerHTML = `${prop}: <span>${obj[prop]}</span>`;
            }
        } else if (!bool) {
            if (prop === ('current-temp') || (prop === 'feels') || (prop === 'max-temp') || (prop === 'min-temp')) {
                p.innerHTML = `${prop}: <span>${obj[prop]} ${tempFar}</span>`;
            } else if (prop === 'wind') {
                p.innerHTML = `${prop}: <span>${obj[prop]} mph</span>`;
            } else {
                p.innerHTML = `${prop}: <span>${obj[prop]}</span>`;
            }
        }
        let div = makeWeatherDiv();
        div.classList.add(prop);
        div.append(p);
        weatherContainer.append(div);
        if (prop === 'main') {
            let descriptionSVG = div.querySelector('.svg__container');
            descriptionSVG.innerHTML = descriptions[obj[prop]];
        }
    } 
    weatherLoop();
}

function weatherLoop() {
    const weatherDivs = document.getElementsByClassName('weather__info');
    for (let i = 0; i < weatherDivs.length; i++) {
         assignSVG(weatherDivs[i]);
    }
}

function assignSVG(query) {
    let currentSVGdiv = query.querySelector('.svg__container');
    if (query.classList.contains('city')) {
        currentSVGdiv.innerHTML = svgs.city;
    } else if (query.classList.contains('feels')) {
        currentSVGdiv.innerHTML = svgs.feels;
    } else if (query.classList.contains('humidity')) {
        currentSVGdiv.innerHTML = svgs.humidity;
    } else if (query.classList.contains('current-temp')) {
        currentSVGdiv.innerHTML = svgs.temperature;
    } else if (query.classList.contains('max-temp')) {
        currentSVGdiv.innerHTML = svgs.tempHigh;
    } else if (query.classList.contains('min-temp')) {
        currentSVGdiv.innerHTML = svgs.tempLow;
    } else if (query.classList.contains('sunrise')) {
        currentSVGdiv.innerHTML = svgs.sunrise;
    } else if (query.classList.contains('sunset')) {
        currentSVGdiv.innerHTML = svgs.sunset;
    } else if (query.classList.contains('wind')) {
        currentSVGdiv.innerHTML = svgs.wind;
    } else {
        return
    }
}

function clearWeatherDisplay() {
    weatherContainer.innerHTML = '';
}

export {
    displayWeatherDivs,
    getUnitPreference
}





