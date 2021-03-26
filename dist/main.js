/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "displayWeatherDivs": () => (/* binding */ displayWeatherDivs),
/* harmony export */   "getUnitPreference": () => (/* binding */ getUnitPreference)
/* harmony export */ });
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









/***/ }),

/***/ "./src/fetch.js":
/*!**********************!*\
  !*** ./src/fetch.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getWeather": () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _units__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./units */ "./src/units.js");


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
        (0,_units__WEBPACK_IMPORTED_MODULE_0__.toStandardTime)(sys); // making a human readable sunrise and sunset string in the sys object
        (0,_units__WEBPACK_IMPORTED_MODULE_0__.round)(main, wind); //rounding our numbers
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



/***/ }),

/***/ "./src/units.js":
/*!**********************!*\
  !*** ./src/units.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toStandardTime": () => (/* binding */ toStandardTime),
/* harmony export */   "round": () => (/* binding */ round)
/* harmony export */ });
//module for converting weather units

async function toStandardTime(obj) {
    try {
        let options = {hour: '2-digit', minute:'2-digit'};
        let msRise = obj.sunrise * 1000; 
        let msSet = obj.sunset * 1000;
        let riseDate = new Date(msRise);
        let setDate = new Date(msSet);
        let riseString = riseDate.toLocaleTimeString('en-US', options);
        let setString = setDate.toLocaleTimeString('en-US', options);
        obj.sunrise = riseString;
        obj.sunset = setString;
    } catch (error) {
        console.log(error);
    }
}

function round(obj1, obj2) {
    obj1.temp = Math.round(obj1.temp);
    obj1.feels_like = Math.round(obj1.feels_like);
    obj1.temp_max = Math.round(obj1.temp_max);
    obj1.temp_min = Math.round(obj1.temp_min);
    obj2.speed = Math.round(obj2.speed);
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./fetch */ "./src/fetch.js");
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dom */ "./src/dom.js");



const form = document.querySelector('form');
const search = document.querySelector('#search');
const unitToggle = document.querySelector('#unitToggle');
let weather;

async function getResults() {
    try {
        const bool = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getUnitPreference)();
        const formValues = new FormData(form);
        const formObj = Object.fromEntries(formValues); 
        weather = formObj;
        const {city, country, state} = formObj;
        const results = await (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city, state, country, bool);
        return results;
    } catch (error) {
        console.log(error);
    }
}

search.addEventListener('click', async (e) => {
    e.preventDefault();
    try {
        const results = await getResults();
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayWeatherDivs)(results);
    } catch (error) {
        console.log(error);
    }
    form.reset();
});

unitToggle.addEventListener('click', async () => {
    try {
        const bool = (0,_dom__WEBPACK_IMPORTED_MODULE_1__.getUnitPreference)();
        const {city, country, state} = weather;
        const results = await (0,_fetch__WEBPACK_IMPORTED_MODULE_0__.getWeather)(city, state, country, bool);
        (0,_dom__WEBPACK_IMPORTED_MODULE_1__.displayWeatherDivs)(results);
    } catch (error) {
        console.log(error);
    }
});



})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwLy4vc3JjL2ZldGNoLmpzIiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvdW5pdHMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcmFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXJhcHAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7OztBQ05tQztBQUlwQjs7QUFFZjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EscUJBQXFCLHVEQUFpQjtBQUN0QztBQUNBLHVEO0FBQ0E7QUFDQSxlQUFlLHFCQUFxQjtBQUNwQyw4QkFBOEIsa0RBQVU7QUFDeEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBa0I7QUFDMUIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLHFCQUFxQix1REFBaUI7QUFDdEMsZUFBZSxxQkFBcUI7QUFDcEMsOEJBQThCLGtEQUFVO0FBQ3hDLFFBQVEsd0RBQWtCO0FBQzFCLEtBQUs7QUFDTDtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy9kb20gbW9kdWxlXG4vL2RvbSBzZWxlY3RvcnNcbmNvbnN0IHdlYXRoZXJDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2VhdGhlckRpc3BsYXknKTtcbmNvbnN0IHVuaXRUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdW5pdFRvZ2dsZScpO1xuLy9zdmcncyB0byBiZSBnZW5lcmF0ZWQgYW5kIHBvc3RlZCB0byB0aGUgZG9tXG5jb25zdCBzdmdzID0ge1xuICAgIHN1bjogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjEyXCIgY3k9XCIxMlwiIHI9XCI0XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0zIDEyaDFtOCAtOXYxbTggOGgxbS05IDh2MW0tNi40IC0xNS40bC43IC43bTEyLjEgLS43bC0uNyAuN20wIDExLjRsLjcgLjdtLTEyLjEgLS43bC0uNyAuN1wiIC8+XG4gICAgICAgIDwvc3ZnPmAsXG4gICAgd2luZDogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPHBhdGggZD1cIk01IDhoOC41YTIuNSAyLjUgMCAxIDAgLTIuMzQgLTMuMjRcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTMgMTJoMTUuNWEyLjUgMi41IDAgMSAxIC0yLjM0IDMuMjRcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTQgMTZoNS41YTIuNSAyLjUgMCAxIDEgLTIuMzQgMy4yNFwiIC8+XG4gICAgICAgIDwvc3ZnPmAsXG4gICAgdW1icmVsbGE6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCIjZmZmZmZmXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNCAxMmE4IDggMCAwIDEgMTYgMHpcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTEyIDEydjZhMiAyIDAgMCAwIDQgMFwiIC8+XG4gICAgICAgIDwvc3ZnPmAsXG4gICAgdGVtcGVyYXR1cmU6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCIjZmZmZmZmXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTAgMTMuNWE0IDQgMCAxIDAgNCAwdi04LjVhMiAyIDAgMCAwIC00IDB2OC41XCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCIxMFwiIHkxPVwiOVwiIHgyPVwiMTRcIiB5Mj1cIjlcIiAvPlxuICAgICAgICA8L3N2Zz5gLFxuICAgIHRlbXBIaWdoOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTggMTMuNWE0IDQgMCAxIDAgNCAwdi04LjVhMiAyIDAgMCAwIC00IDB2OC41XCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCI4XCIgeTE9XCI5XCIgeDI9XCIxMlwiIHkyPVwiOVwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiMTZcIiB5MT1cIjlcIiB4Mj1cIjIyXCIgeTI9XCI5XCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCIxOVwiIHkxPVwiNlwiIHgyPVwiMTlcIiB5Mj1cIjEyXCIgLz5cbiAgICAgICAgPC9zdmc+YCxcbiAgICB0ZW1wTG93OiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTggMTMuNWE0IDQgMCAxIDAgNCAwdi04LjVhMiAyIDAgMCAwIC00IDB2OC41XCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCI4XCIgeTE9XCI5XCIgeDI9XCIxMlwiIHkyPVwiOVwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiMTZcIiB5MT1cIjlcIiB4Mj1cIjIyXCIgeTI9XCI5XCIgLz5cbiAgICAgICAgPC9zdmc+YCxcbiAgICBjbG91ZDogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPHBhdGggZD1cIk03IDE4YTQuNiA0LjQgMCAwIDEgMCAtOWE1IDQuNSAwIDAgMSAxMSAyaDFhMy41IDMuNSAwIDAgMSAwIDdoLTEyXCIgLz5cbiAgICAgICAgPC9zdmc+YCxcbiAgICBjbG91ZFJhaW46IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCIjZmZmZmZmXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNyAxOGE0LjYgNC40IDAgMCAxIDAgLTlhNSA0LjUgMCAwIDEgMTEgMmgxYTMuNSAzLjUgMCAwIDEgMCA3XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMSAxM3YybTAgM3YybTQgLTV2Mm0wIDN2MlwiIC8+XG4gICAgICAgIDwvc3ZnPmAsXG4gICAgY2xvdWRTdG9ybTogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPHBhdGggZD1cIk03IDE4YTQuNiA0LjQgMCAwIDEgMCAtOWE1IDQuNSAwIDAgMSAxMSAyaDFhMy41IDMuNSAwIDAgMSAwIDdoLTFcIiAvPlxuICAgICAgICA8cG9seWxpbmUgcG9pbnRzPVwiMTMgMTQgMTEgMTggMTQgMTggMTIgMjJcIiAvPlxuICAgICAgICA8L3N2Zz5gLFxuICAgIGNsb3VkU25vdzogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPHBhdGggZD1cIk03IDE4YTQuNiA0LjQgMCAwIDEgMCAtOWE1IDQuNSAwIDAgMSAxMSAyaDFhMy41IDMuNSAwIDAgMSAwIDdcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTExIDE1di4wMW0wIDN2LjAxbTAgM3YuMDFtNCAtNHYuMDFtMCAzdi4wMVwiIC8+XG4gICAgICAgIDwvc3ZnPmAsXG4gICAgY2xvdWRGb2c6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCIjZmZmZmZmXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNyAxNmE0LjYgNC40IDAgMCAxIDAgLTlhNSA0LjUgMCAwIDEgMTEgMmgxYTMuNSAzLjUgMCAwIDEgMCA3aC0xMlwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiNVwiIHkxPVwiMjBcIiB4Mj1cIjE5XCIgeTI9XCIyMFwiIC8+XG4gICAgICAgIDwvc3ZnPmAsXG4gICAgbWlzdDogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPHBhdGggZD1cIk01IDVoM200IDBoOVwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMyAxMGgxMW00IDBoMVwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNNSAxNWg1bTQgMGg3XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0zIDIwaDltNCAwaDNcIiAvPlxuICAgICAgICA8L3N2Zz5gLFxuICAgIHNub3dmbGFrZTogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMCA0bDIgMWwyIC0xbS0yIC0ydjYuNWwzIDEuNzJcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTEwIDRsMiAxbDIgLTFtLTIgLTJ2Ni41bDMgMS43MlwiIHRyYW5zZm9ybT1cInJvdGF0ZSg2MCAxMiAxMilcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTEwIDRsMiAxbDIgLTFtLTIgLTJ2Ni41bDMgMS43MlwiIHRyYW5zZm9ybT1cInJvdGF0ZSgxMjAgMTIgMTIpXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMCA0bDIgMWwyIC0xbS0yIC0ydjYuNWwzIDEuNzJcIiB0cmFuc2Zvcm09XCJyb3RhdGUoMTgwIDEyIDEyKVwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTAgNGwyIDFsMiAtMW0tMiAtMnY2LjVsMyAxLjcyXCIgdHJhbnNmb3JtPVwicm90YXRlKDI0MCAxMiAxMilcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTEwIDRsMiAxbDIgLTFtLTIgLTJ2Ni41bDMgMS43MlwiIHRyYW5zZm9ybT1cInJvdGF0ZSgzMDAgMTIgMTIpXCIgLz5cbiAgICAgICAgPC9zdmc+YCxcbiAgICBjaXR5OiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgICA8bGluZSB4MT1cIjNcIiB5MT1cIjIxXCIgeDI9XCIyMVwiIHkyPVwiMjFcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTUgMjF2LTE0bDggLTR2MThcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTE5IDIxdi0xMGwtNiAtNFwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiOVwiIHkxPVwiOVwiIHgyPVwiOVwiIHkyPVwiOS4wMVwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiOVwiIHkxPVwiMTJcIiB4Mj1cIjlcIiB5Mj1cIjEyLjAxXCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCI5XCIgeTE9XCIxNVwiIHgyPVwiOVwiIHkyPVwiMTUuMDFcIiAvPlxuICAgICAgICA8bGluZSB4MT1cIjlcIiB5MT1cIjE4XCIgeDI9XCI5XCIgeTI9XCIxOC4wMVwiIC8+XG4gICAgICAgIDwvc3ZnPmAsXG4gICAgZmVlbHM6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCIjZmZmZmZmXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNOCAxM3YtOC41YTEuNSAxLjUgMCAwIDEgMyAwdjcuNVwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTEgMTEuNXYtMmExLjUgMS41IDAgMSAxIDMgMHYyLjVcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTE0IDEwLjVhMS41IDEuNSAwIDAgMSAzIDB2MS41XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xNyAxMS41YTEuNSAxLjUgMCAwIDEgMyAwdjQuNWE2IDYgMCAwIDEgLTYgNmgtMmguMjA4YTYgNiAwIDAgMSAtNS4wMTIgLTIuN2E2OS43NCA2OS43NCAwIDAgMSAtLjE5NiAtLjNjLS4zMTIgLS40NzkgLTEuNDA3IC0yLjM4OCAtMy4yODYgLTUuNzI4YTEuNSAxLjUgMCAwIDEgLjUzNiAtMi4wMjJhMS44NjcgMS44NjcgMCAwIDEgMi4yOCAuMjhsMS40NyAxLjQ3XCIgLz5cbiAgICAgICAgPC9zdmc+YCxcbiAgICBodW1pZGl0eTogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPHBhdGggZD1cIk02LjggMTFhNiA2IDAgMSAwIDEwLjM5NiAwbC01LjE5NyAtOGwtNS4yIDh6XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMiAzdjE3XCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMiAxMmwzLjU0NCAtMy41NDRcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTEyIDE3LjNsNS41NTggLTUuNTU4XCIgLz5cbiAgICAgICAgPC9zdmc+YCxcbiAgICBzdW5yaXNlOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTMgMTdoMW0xNiAwaDFtLTE1LjQgLTYuNGwuNyAuN20xMi4xIC0uN2wtLjcgLjdtLTkuNyA1LjdhNCA0IDAgMCAxIDggMFwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiMjFcIiB4Mj1cIjIxXCIgeTI9XCIyMVwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMTIgOXYtNmwzIDNtLTYgMGwzIC0zXCIgLz5cbiAgICAgICAgPC9zdmc+YCxcbiAgICBzdW5zZXQ6IGA8c3ZnIHZpZXdCb3g9XCIwIDAgMjQgMjRcIiBzdHJva2Utd2lkdGg9XCIxLjVcIiBzdHJva2U9XCIjZmZmZmZmXCIgZmlsbD1cIm5vbmVcIiBzdHJva2UtbGluZWNhcD1cInJvdW5kXCIgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIj5cbiAgICAgICAgPHBhdGggc3Ryb2tlPVwibm9uZVwiIGQ9XCJNMCAwaDI0djI0SDB6XCIgZmlsbD1cIm5vbmVcIi8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMyAxN2gxbTE2IDBoMW0tMTUuNCAtNi40bC43IC43bTEyLjEgLS43bC0uNyAuN20tOS43IDUuN2E0IDQgMCAwIDEgOCAwXCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCIzXCIgeTE9XCIyMVwiIHgyPVwiMjFcIiB5Mj1cIjIxXCIgLz5cbiAgICAgICAgPHBhdGggZD1cIk0xMiAzdjZsMyAtM20tNiAwbDMgM1wiIC8+XG4gICAgICAgIDwvc3ZnPmAsXG4gICAgdG9ybmFkbzogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPGxpbmUgeDE9XCIyMVwiIHkxPVwiNFwiIHgyPVwiM1wiIHkyPVwiNFwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiMTNcIiB5MT1cIjE2XCIgeDI9XCI3XCIgeTI9XCIxNlwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiMTFcIiB5MT1cIjIwXCIgeDI9XCIxNVwiIHkyPVwiMjBcIiAvPlxuICAgICAgICA8bGluZSB4MT1cIjZcIiB5MT1cIjhcIiB4Mj1cIjIwXCIgeTI9XCI4XCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCI0XCIgeTE9XCIxMlwiIHgyPVwiMTZcIiB5Mj1cIjEyXCIgLz5cbiAgICAgICAgPC9zdmc+YCxcbiAgICBmaXJlOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTEyIDEyYzIgLTIuOTYgMCAtNyAtMSAtOGMwIDMuMDM4IC0xLjc3MyA0Ljc0MSAtMyA2Yy0xLjIyNiAxLjI2IC0yIDMuMjQgLTIgNWE2IDYgMCAxIDAgMTIgMGMwIC0xLjUzMiAtMS4wNTYgLTMuOTQgLTIgLTVjLTEuNzg2IDMgLTIuNzkxIDMgLTQgMnpcIiAvPlxuICAgICAgICA8L3N2Zz5gLFxuICAgIHBvbGx1dGlvbjogYDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPHBhdGggZD1cIk00IDIxYzEuMTQ3IC00LjAyIDEuOTgzIC04LjAyNyAyIC0xMmg2Yy4wMTcgMy45NzMgLjg1MyA3Ljk4IDIgMTJcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTEyLjUgMTNoNC41Yy4wMjUgMi42MTIgLjg5NCA1LjI5NiAyIDhcIiAvPlxuICAgICAgICA8cGF0aCBkPVwiTTkgNWEyLjQgMi40IDAgMCAxIDIgLTFhMi40IDIuNCAwIDAgMSAyIDFhMi40IDIuNCAwIDAgMCAyIDFhMi40IDIuNCAwIDAgMCAyIC0xYTIuNCAyLjQgMCAwIDEgMiAtMWEyLjQgMi40IDAgMCAxIDIgMVwiIC8+XG4gICAgICAgIDxsaW5lIHgxPVwiM1wiIHkxPVwiMjFcIiB4Mj1cIjIyXCIgeTI9XCIyMVwiIC8+XG4gICAgICAgIDwvc3ZnPmAsXG4gICAgZm9nOiBgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgICA8cGF0aCBkPVwiTTcgMTZhNC42IDQuNCAwIDAgMSAwIC05YTUgNC41IDAgMCAxIDExIDJoMWEzLjUgMy41IDAgMCAxIDAgN2gtMTJcIiAvPlxuICAgICAgICA8bGluZSB4MT1cIjVcIiB5MT1cIjIwXCIgeDI9XCIxOVwiIHkyPVwiMjBcIiAvPlxuICAgICAgICA8L3N2Zz5gLFxuICAgIH1cblxuY29uc3QgdGVtcEZhciA9IGBcbiAgICA8ZGl2IGNsYXNzPVwic3ZnX19jb250YWluZXJcIj5cbiAgICAgICAgPHN2ZyB2aWV3Qm94PVwiMCAwIDI0IDI0XCIgc3Ryb2tlLXdpZHRoPVwiMS41XCIgc3Ryb2tlPVwiI2ZmZmZmZlwiIGZpbGw9XCJub25lXCIgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCI+XG4gICAgICAgIDxwYXRoIHN0cm9rZT1cIm5vbmVcIiBkPVwiTTAgMGgyNHYyNEgwelwiIGZpbGw9XCJub25lXCIvPlxuICAgICAgICA8Y2lyY2xlIGN4PVwiNlwiIGN5PVwiOFwiIHI9XCIyXCIgLz5cbiAgICAgICAgPGxpbmUgeDE9XCIxM1wiIHkxPVwiMTJcIiB4Mj1cIjE4XCIgeTI9XCIxMlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjAgNmgtNmExIDEgMCAwIDAgLTEgMXYxMVwiIC8+XG4gICAgICAgIDwvc3ZnPlxuICAgIDwvZGl2PmA7XG5cbmNvbnN0IHRlbXBDZWwgPSBgXG4gICAgPGRpdiBjbGFzcz1cInN2Z19fY29udGFpbmVyXCI+XG4gICAgICAgIDxzdmcgdmlld0JveD1cIjAgMCAyNCAyNFwiIHN0cm9rZS13aWR0aD1cIjEuNVwiIHN0cm9rZT1cIiNmZmZmZmZcIiBmaWxsPVwibm9uZVwiIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIiBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiPlxuICAgICAgICA8cGF0aCBzdHJva2U9XCJub25lXCIgZD1cIk0wIDBoMjR2MjRIMHpcIiBmaWxsPVwibm9uZVwiLz5cbiAgICAgICAgPGNpcmNsZSBjeD1cIjZcIiBjeT1cIjhcIiByPVwiMlwiIC8+XG4gICAgICAgIDxwYXRoIGQ9XCJNMjAgOWEzIDMgMCAwIDAgLTMgLTNoLTFhMyAzIDAgMCAwIC0zIDN2NmEzIDMgMCAwIDAgMyAzaDFhMyAzIDAgMCAwIDMgLTNcIiAvPlxuICAgICAgICA8L3N2Zz5cbiAgICA8L2Rpdj5gO1xuXG5jb25zdCBkZXNjcmlwdGlvbnMgPSB7XG4gICAgXCJUaHVuZGVyc3Rvcm1cIjogc3Zncy5jbG91ZFN0b3JtLFxuICAgIFwiQ2xlYXJcIjogc3Zncy5zdW4sXG4gICAgXCJDbG91ZHNcIjogc3Zncy5jbG91ZCxcbiAgICBcIlNtb2tlXCI6IHN2Z3MuZmlyZSxcbiAgICBcIkFzaFwiOiBzdmdzLnBvbGx1dGlvbixcbiAgICBcIkhhemVcIjogc3Zncy5wb2xsdXRpb24sXG4gICAgXCJEdXN0XCI6IHN2Z3MucG9sbHV0aW9uLFxuICAgIFwiRHJpenpsZVwiOiBzdmdzLnVtYnJlbGxhLFxuICAgIFwiUmFpblwiOiBzdmdzLnVtYnJlbGxhLFxuICAgIFwiRm9nXCI6IHN2Z3MuZm9nLFxuICAgIFwiU25vd1wiOiBzdmdzLnNub3dmbGFrZSxcbiAgICBcIk1pc3RcIjogc3Zncy5taXN0LFxuICAgIFwiVG9ybmFkb1wiOiBzdmdzLnRvcm5hZG8sXG59O1xuXG5mdW5jdGlvbiBnZXRVbml0UHJlZmVyZW5jZSgpIHtcbiAgICBpZiAodW5pdFRvZ2dsZS5jaGVja2VkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIG1ha2VXZWF0aGVyRGl2KCkge1xuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgnd2VhdGhlcl9faW5mbycpO1xuICAgIGxldCBkaXZTVkcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBkaXZTVkcuY2xhc3NMaXN0LmFkZCgnc3ZnX19jb250YWluZXInKTtcbiAgICBkaXYuYXBwZW5kKGRpdlNWRyk7XG4gICAgcmV0dXJuIGRpdjtcbn1cblxuZnVuY3Rpb24gZGlzcGxheVdlYXRoZXJEaXZzKG9iaikge1xuICAgIGNsZWFyV2VhdGhlckRpc3BsYXkoKTtcbiAgICBsZXQgYm9vbCA9IGdldFVuaXRQcmVmZXJlbmNlKCk7XG4gICAgZm9yIChsZXQgcHJvcCBpbiBvYmopIHtcbiAgICAgICAgbGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIGlmIChib29sKSB7XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gKCdjdXJyZW50LXRlbXAnKSB8fCAocHJvcCA9PT0gJ2ZlZWxzJykgfHwgKHByb3AgPT09ICdtYXgtdGVtcCcpIHx8IChwcm9wID09PSAnbWluLXRlbXAnKSkge1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gYCR7cHJvcH06IDxzcGFuPiR7b2JqW3Byb3BdfSAke3RlbXBDZWx9PC9zcGFuPmA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09ICd3aW5kJykge1xuICAgICAgICAgICAgICAgIHAuaW5uZXJIVE1MID0gYCR7cHJvcH06IDxzcGFuPiR7b2JqW3Byb3BdfSBtL3M8L3NwYW4+YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBgJHtwcm9wfTogPHNwYW4+JHtvYmpbcHJvcF19PC9zcGFuPmA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoIWJvb2wpIHtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAoJ2N1cnJlbnQtdGVtcCcpIHx8IChwcm9wID09PSAnZmVlbHMnKSB8fCAocHJvcCA9PT0gJ21heC10ZW1wJykgfHwgKHByb3AgPT09ICdtaW4tdGVtcCcpKSB7XG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBgJHtwcm9wfTogPHNwYW4+JHtvYmpbcHJvcF19ICR7dGVtcEZhcn08L3NwYW4+YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gJ3dpbmQnKSB7XG4gICAgICAgICAgICAgICAgcC5pbm5lckhUTUwgPSBgJHtwcm9wfTogPHNwYW4+JHtvYmpbcHJvcF19IG1waDwvc3Bhbj5gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwLmlubmVySFRNTCA9IGAke3Byb3B9OiA8c3Bhbj4ke29ialtwcm9wXX08L3NwYW4+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBsZXQgZGl2ID0gbWFrZVdlYXRoZXJEaXYoKTtcbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQocHJvcCk7XG4gICAgICAgIGRpdi5hcHBlbmQocCk7XG4gICAgICAgIHdlYXRoZXJDb250YWluZXIuYXBwZW5kKGRpdik7XG4gICAgICAgIGlmIChwcm9wID09PSAnbWFpbicpIHtcbiAgICAgICAgICAgIGxldCBkZXNjcmlwdGlvblNWRyA9IGRpdi5xdWVyeVNlbGVjdG9yKCcuc3ZnX19jb250YWluZXInKTtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uU1ZHLmlubmVySFRNTCA9IGRlc2NyaXB0aW9uc1tvYmpbcHJvcF1dO1xuICAgICAgICB9XG4gICAgfSBcbiAgICB3ZWF0aGVyTG9vcCgpO1xufVxuXG5mdW5jdGlvbiB3ZWF0aGVyTG9vcCgpIHtcbiAgICBjb25zdCB3ZWF0aGVyRGl2cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3dlYXRoZXJfX2luZm8nKTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXRoZXJEaXZzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICBhc3NpZ25TVkcod2VhdGhlckRpdnNbaV0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gYXNzaWduU1ZHKHF1ZXJ5KSB7XG4gICAgbGV0IGN1cnJlbnRTVkdkaXYgPSBxdWVyeS5xdWVyeVNlbGVjdG9yKCcuc3ZnX19jb250YWluZXInKTtcbiAgICBpZiAocXVlcnkuY2xhc3NMaXN0LmNvbnRhaW5zKCdjaXR5JykpIHtcbiAgICAgICAgY3VycmVudFNWR2Rpdi5pbm5lckhUTUwgPSBzdmdzLmNpdHk7XG4gICAgfSBlbHNlIGlmIChxdWVyeS5jbGFzc0xpc3QuY29udGFpbnMoJ2ZlZWxzJykpIHtcbiAgICAgICAgY3VycmVudFNWR2Rpdi5pbm5lckhUTUwgPSBzdmdzLmZlZWxzO1xuICAgIH0gZWxzZSBpZiAocXVlcnkuY2xhc3NMaXN0LmNvbnRhaW5zKCdodW1pZGl0eScpKSB7XG4gICAgICAgIGN1cnJlbnRTVkdkaXYuaW5uZXJIVE1MID0gc3Zncy5odW1pZGl0eTtcbiAgICB9IGVsc2UgaWYgKHF1ZXJ5LmNsYXNzTGlzdC5jb250YWlucygnY3VycmVudC10ZW1wJykpIHtcbiAgICAgICAgY3VycmVudFNWR2Rpdi5pbm5lckhUTUwgPSBzdmdzLnRlbXBlcmF0dXJlO1xuICAgIH0gZWxzZSBpZiAocXVlcnkuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYXgtdGVtcCcpKSB7XG4gICAgICAgIGN1cnJlbnRTVkdkaXYuaW5uZXJIVE1MID0gc3Zncy50ZW1wSGlnaDtcbiAgICB9IGVsc2UgaWYgKHF1ZXJ5LmNsYXNzTGlzdC5jb250YWlucygnbWluLXRlbXAnKSkge1xuICAgICAgICBjdXJyZW50U1ZHZGl2LmlubmVySFRNTCA9IHN2Z3MudGVtcExvdztcbiAgICB9IGVsc2UgaWYgKHF1ZXJ5LmNsYXNzTGlzdC5jb250YWlucygnc3VucmlzZScpKSB7XG4gICAgICAgIGN1cnJlbnRTVkdkaXYuaW5uZXJIVE1MID0gc3Zncy5zdW5yaXNlO1xuICAgIH0gZWxzZSBpZiAocXVlcnkuY2xhc3NMaXN0LmNvbnRhaW5zKCdzdW5zZXQnKSkge1xuICAgICAgICBjdXJyZW50U1ZHZGl2LmlubmVySFRNTCA9IHN2Z3Muc3Vuc2V0O1xuICAgIH0gZWxzZSBpZiAocXVlcnkuY2xhc3NMaXN0LmNvbnRhaW5zKCd3aW5kJykpIHtcbiAgICAgICAgY3VycmVudFNWR2Rpdi5pbm5lckhUTUwgPSBzdmdzLndpbmQ7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuXG4gICAgfVxufVxuXG5mdW5jdGlvbiBjbGVhcldlYXRoZXJEaXNwbGF5KCkge1xuICAgIHdlYXRoZXJDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XG59XG5cbmV4cG9ydCB7XG4gICAgZGlzcGxheVdlYXRoZXJEaXZzLFxuICAgIGdldFVuaXRQcmVmZXJlbmNlXG59XG5cblxuXG5cblxuIiwiaW1wb3J0IHt0b1N0YW5kYXJkVGltZSwgcm91bmR9IGZyb20gJy4vdW5pdHMnO1xuXG5jb25zdCB3ZWF0aGVyQXBpS2V5ID0gYGUxMDAzY2VjZjE3MDc0MWJhYmI5ZDViZmI4MTM0NDIzYDtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihjaXR5LCBzdGF0ZSwgY291bnRyeSwgYm9vbCkge1xuICAgIHRyeSB7XG4gICAgICAgIGxldCByZXNwb25zZTtcbiAgICAgICAgaWYgKGJvb2wpIHsgLy93ZSB3YW50IG1ldHJpY1xuICAgICAgICAgICAgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9LCR7c3RhdGV9LCR7Y291bnRyeX0mdW5pdHM9bWV0cmljJmFwcGlkPSR7d2VhdGhlckFwaUtleX1gLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoIWJvb2wpIHtcbiAgICAgICAgICAgIHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtjaXR5fSwke3N0YXRlfSwke2NvdW50cnl9JnVuaXRzPWltcGVyaWFsJmFwcGlkPSR7d2VhdGhlckFwaUtleX1gLCB7bW9kZTogJ2NvcnMnfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGxldCB7bWFpbiwgbmFtZSwgc3lzLCB3ZWF0aGVyLCB3aW5kfSA9IHdlYXRoZXJEYXRhO1xuICAgICAgICB0b1N0YW5kYXJkVGltZShzeXMpOyAvLyBtYWtpbmcgYSBodW1hbiByZWFkYWJsZSBzdW5yaXNlIGFuZCBzdW5zZXQgc3RyaW5nIGluIHRoZSBzeXMgb2JqZWN0XG4gICAgICAgIHJvdW5kKG1haW4sIHdpbmQpOyAvL3JvdW5kaW5nIG91ciBudW1iZXJzXG4gICAgICAgIGNvbnN0IHdlYXRoZXJPYmogPSB7XG4gICAgICAgICAgICBcImNpdHlcIjogbmFtZSxcbiAgICAgICAgICAgIFwibWFpblwiOiB3ZWF0aGVyWzBdLm1haW4sXG4gICAgICAgICAgICBcImN1cnJlbnQtdGVtcFwiOiBtYWluLnRlbXAsXG4gICAgICAgICAgICBcImZlZWxzXCI6IG1haW4uZmVlbHNfbGlrZSxcbiAgICAgICAgICAgIFwid2luZFwiOiBgJHt3aW5kLnNwZWVkfWAsXG4gICAgICAgICAgICBcImh1bWlkaXR5XCI6IGAke21haW4uaHVtaWRpdHl9ICVgLFxuICAgICAgICAgICAgXCJtYXgtdGVtcFwiOiBtYWluLnRlbXBfbWF4LFxuICAgICAgICAgICAgXCJtaW4tdGVtcFwiOiBtYWluLnRlbXBfbWluLFxuICAgICAgICAgICAgXCJzdW5yaXNlXCI6IHN5cy5zdW5yaXNlLFxuICAgICAgICAgICAgXCJzdW5zZXRcIjogc3lzLnN1bnNldCxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gd2VhdGhlck9iajtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5leHBvcnQge2dldFdlYXRoZXJ9OyIsIi8vbW9kdWxlIGZvciBjb252ZXJ0aW5nIHdlYXRoZXIgdW5pdHNcblxuYXN5bmMgZnVuY3Rpb24gdG9TdGFuZGFyZFRpbWUob2JqKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IG9wdGlvbnMgPSB7aG91cjogJzItZGlnaXQnLCBtaW51dGU6JzItZGlnaXQnfTtcbiAgICAgICAgbGV0IG1zUmlzZSA9IG9iai5zdW5yaXNlICogMTAwMDsgXG4gICAgICAgIGxldCBtc1NldCA9IG9iai5zdW5zZXQgKiAxMDAwO1xuICAgICAgICBsZXQgcmlzZURhdGUgPSBuZXcgRGF0ZShtc1Jpc2UpO1xuICAgICAgICBsZXQgc2V0RGF0ZSA9IG5ldyBEYXRlKG1zU2V0KTtcbiAgICAgICAgbGV0IHJpc2VTdHJpbmcgPSByaXNlRGF0ZS50b0xvY2FsZVRpbWVTdHJpbmcoJ2VuLVVTJywgb3B0aW9ucyk7XG4gICAgICAgIGxldCBzZXRTdHJpbmcgPSBzZXREYXRlLnRvTG9jYWxlVGltZVN0cmluZygnZW4tVVMnLCBvcHRpb25zKTtcbiAgICAgICAgb2JqLnN1bnJpc2UgPSByaXNlU3RyaW5nO1xuICAgICAgICBvYmouc3Vuc2V0ID0gc2V0U3RyaW5nO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHJvdW5kKG9iajEsIG9iajIpIHtcbiAgICBvYmoxLnRlbXAgPSBNYXRoLnJvdW5kKG9iajEudGVtcCk7XG4gICAgb2JqMS5mZWVsc19saWtlID0gTWF0aC5yb3VuZChvYmoxLmZlZWxzX2xpa2UpO1xuICAgIG9iajEudGVtcF9tYXggPSBNYXRoLnJvdW5kKG9iajEudGVtcF9tYXgpO1xuICAgIG9iajEudGVtcF9taW4gPSBNYXRoLnJvdW5kKG9iajEudGVtcF9taW4pO1xuICAgIG9iajIuc3BlZWQgPSBNYXRoLnJvdW5kKG9iajIuc3BlZWQpO1xufVxuXG5leHBvcnQge1xuICAgIHRvU3RhbmRhcmRUaW1lLFxuICAgIHJvdW5kXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2dldFdlYXRoZXJ9IGZyb20gJy4vZmV0Y2gnO1xuaW1wb3J0IHtcbiAgICBkaXNwbGF5V2VhdGhlckRpdnMsXG4gICAgZ2V0VW5pdFByZWZlcmVuY2Vcbn0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaCcpO1xuY29uc3QgdW5pdFRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN1bml0VG9nZ2xlJyk7XG5sZXQgd2VhdGhlcjtcblxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVzdWx0cygpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBib29sID0gZ2V0VW5pdFByZWZlcmVuY2UoKTtcbiAgICAgICAgY29uc3QgZm9ybVZhbHVlcyA9IG5ldyBGb3JtRGF0YShmb3JtKTtcbiAgICAgICAgY29uc3QgZm9ybU9iaiA9IE9iamVjdC5mcm9tRW50cmllcyhmb3JtVmFsdWVzKTsgXG4gICAgICAgIHdlYXRoZXIgPSBmb3JtT2JqO1xuICAgICAgICBjb25zdCB7Y2l0eSwgY291bnRyeSwgc3RhdGV9ID0gZm9ybU9iajtcbiAgICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IGdldFdlYXRoZXIoY2l0eSwgc3RhdGUsIGNvdW50cnksIGJvb2wpO1xuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxufVxuXG5zZWFyY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBhc3luYyAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXN1bHRzID0gYXdhaXQgZ2V0UmVzdWx0cygpO1xuICAgICAgICBkaXNwbGF5V2VhdGhlckRpdnMocmVzdWx0cyk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgICBmb3JtLnJlc2V0KCk7XG59KTtcblxudW5pdFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBib29sID0gZ2V0VW5pdFByZWZlcmVuY2UoKTtcbiAgICAgICAgY29uc3Qge2NpdHksIGNvdW50cnksIHN0YXRlfSA9IHdlYXRoZXI7XG4gICAgICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCBnZXRXZWF0aGVyKGNpdHksIHN0YXRlLCBjb3VudHJ5LCBib29sKTtcbiAgICAgICAgZGlzcGxheVdlYXRoZXJEaXZzKHJlc3VsdHMpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG59KTtcblxuXG4iXSwic291cmNlUm9vdCI6IiJ9