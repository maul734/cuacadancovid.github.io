// Code Javascript untuk API cuaca
const searchButton = document.querySelector('#button-addon2');
const inputKeyword = document.querySelector('.input-keyword');
document.body.style.backgroundImage = 'url(img/sky.jpg)'

searchButton.addEventListener('click', function() {

    fetch("https://api.openweathermap.org/data/2.5/weather?q="+inputKeyword.value+"&appid=1fe5f03e8b679377cbc41601289edfdd&units=metric")
        .then(response => response.json())
        .then(response => {
            console.log(response)
            let result = document.querySelector('.result')

            result.innerHTML = `<h2 style="margin-bottom: 15px;">${response.name}, ${response.sys.country}</h2>
                                <h5><span class="temp">${response.main.temp}°С</span> <span class="temp">${response.weather[0].description}</span></h5>
                                <p style="margin-bottom: 17px;">Temperature from ${response.main.temp_min}°С to ${response.main.temp_max}°С</p>
                                <h5>Wind Speed : ${response.wind.speed} m/s</h5>
                                <h5 style="margin-bottom: 17px;">Clouds : ${response.clouds.all}%</h5>
                                <h4 style="color: #012443;">Geo Coordinates : [${response.coord.lat}, ${response.coord.lon}]</h4>` 
        })
    inputKeyword.value = null;

})

//Code untuk API Covid
const searchButtonBaru = document.querySelector('#button-addon3');
const inputKeywordBaru = document.querySelector ('#masukan');

searchButtonBaru.addEventListener ('click',function(){
    fetch("https://covid19.mathdro.id/api")
    .then(response => response.json())
    .then(user => {
        let hasil = document.querySelector ('.hasil1')
        hasil.innerHTML = `<p>${user.confirmed.value}</p>`
        let hasil2 = document.querySelector ('.hasil2')
        hasil2.innerHTML = `<p>${user.recovered.value}</p>`
        let hasil3 = document.querySelector ('.hasil3')
        hasil3.innerHTML = `<p>${user.deaths.value}</p>`
    })

})
