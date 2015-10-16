// "use strict";



// PART 1: SHOW A FORTUNE

function showFortune(evt) {

    $.get('/fortune', getFortune);
    // TODO: get the fortune and show it in the #fortune-text div
}

function getFortune(data) {
    $("#fortune-text").html(data);
}


$('#get-fortune-button').on('click', showFortune);





// PART 2: SHOW WEATHER

function getWeather(evt) {
    evt.preventDefault();

    var url = "/weather.json?zipcode=" + $("#zipcode-field").val();
    console.log(url);
    console.log($("#zipcode-field").val());
    $.get(url, showWeather);


    // TODO: request weather with that URL and show the forecast in #weather-info
}

function showWeather(data) {
    $('#weather-info').html(data["forecast"]);
    console.log(data);
}

$("#weather-form").on('submit', getWeather);




// PART 3: ORDER MELONS

function orderMelons(evt) {
    evt.preventDefault();

    // TODO: show the result message after your form
    // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}

$("#order-form").on('submit', orderMelons);


