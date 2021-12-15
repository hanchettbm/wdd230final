const apiURL = "https://api.openweathermap.org/data/2.5/onecall?lat=39.710835&lon=-104.812500&units=imperial&exclude=minutely&appid=53aea94dcf1ed49f207e0bf80bd4f100";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let temp = Math.round(jsObject.current.temp);
        let description = jsObject.current.weather[0].description;
        let speed = Math.round(jsObject.current.wind_speed);

        if ((temp <= 50) && (speed > 3)){
        var f = Math.round(35.74 + (0.6215 * temp) - (35.75 * (speed **0.16)) + (0.4275 * temp * (speed **0.16))) + "°F";
        } else {
        var f = "N/A";
        }

        document.querySelector('#description').innerHTML = `Current Status: ${description}`;

        document.querySelector('#current-temp').innerHTML = `Current Temperature: ${temp}&#8457;`;

        document.querySelector('#humidity').innerHTML = `Humidity: ${jsObject.current.humidity}%`

        document.querySelector('#speed').innerHTML = `Wind Speed: ${speed} mph`;

        document.querySelector("#chill").textContent = f;

        const currentDate = new Date;
        const today = currentDate.getDay();
        let i = today;
        let dayOfTheWeek;
        const days = document.querySelectorAll('.week-day');

        const weekDayNames = {
            0: 'SUN',
            1: 'MON',
            2: 'TUE',
            3: 'WED',
            4: 'THUR',
            5: 'FRI',
            6: 'SAT',
        }

        days.forEach((day) => {
            Object.keys(weekDayNames).forEach((day) => {
                if (i > 6) {
                    i = 0;
                }
                if (day == i) {
                    dayOfTheWeek = weekDayNames[i];
                }
            })
            day.innerHTML = dayOfTheWeek;
            i += 1;
        })

        const weeklyImages = document.querySelectorAll('.weekly-image');

        const weeklyTemp = document.querySelectorAll('.weekly-temp');

        jsObject.daily.forEach((item, i) => {
            if (i < 3) {
                let weeklyWeather = Math.round(item.temp.day);
                weeklyTemp[i].innerHTML = `${weeklyWeather}&#8457;`;
                let imagesrc = `https://openweathermap.org/img/w/${jsObject.daily[i].weather[0].icon}.png`;
                weeklyImages[i].setAttribute('src', imagesrc);
            }
            
        });
});