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

export {
    toStandardTime,
    round
}