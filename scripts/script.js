jQuery(document).ready(function ($) {
    var owl = $("#owl-carousel");
    owl.owlCarousel({
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        items: 6,
        loop: true,
        center: false,
        rewind: true,
        mouseDrag: true,
        touchDrag: true,
        pullDrag: true,
        freeDrag: false,
        margin: 0,
        stagePadding: 0,
        merge: false,
        mergeFit: true,
        autoWidth: false,
        startPosition: 0,
        rtl: false,
        smartSpeed: 700,
        fluidSpeed: false,
        dragEndSpeed: false,
        responsive: {
            0: {
                items: 1
                // nav: true
            },
            480: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                // nav: true,
                loop: false
            },
            992: {
                items: 4,
                // nav: true,
                loop: false
            }
        },
        responsiveRefreshRate: 200,
        responsiveBaseElement: window,
        fallbackEasing: "swing",
        info: false,
        nestedItemSelector: false,
        itemElement: "div",
        stageElement: "div",
        refreshClass: "owl-refresh",
        loadedClass: "owl-loaded",
        loadingClass: "owl-loading",
        rtlClass: "owl-rtl",
        responsiveClass: "owl-responsive",
        dragClass: "owl-drag",
        itemClass: "owl-item",
        stageClass: "owl-stage",
        stageOuterClass: "owl-stage-outer",
        grabClass: "owl-grab",
        autoHeight: false,
        lazyLoad: false
    });

    $(".next").click(function () {
        owl.trigger("owl.next");
    });
    $(".prev").click(function () {
        owl.trigger("owl.prev");
    });
});

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const from = params.get("from");
const to = params.get("to");
const date = params.get("date");

document.getElementById("from").value = from;
document.getElementById("to").value = to;
document.getElementById("date").value = date;

if (from && to && date) {
    const airlineNames = [
        "AirSwift Horizon",
        "Skywave Express",
        "StarLuxe Airways",
        "AeroPulse Ventures",
        "BlueWing Connections",
        "EagleFlare Airlines",
        "AzureDream Jetways",
        "MystiAir Travels",
        "PhoenixSky Adventures",
        "VelvetJet Express",
    ];
    const route = from + " - " + to;
    for (let i = 1; i <= 5; i++) {
        const new_date = new Date(date);
        console.log(new_date);
        const date_departure = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric'
        }).format(new_date);
        let date_arrival = new Intl.DateTimeFormat('en-US', {
            month: 'short',
            day: 'numeric'
        }).format(new_date);
        const randomIndex = Math.floor(Math.random() * 10);
        const airline = airlineNames[randomIndex];
        const hour = getRandomInt(0, 23);
        const minute = getRandomInt(0, 59);
        const duration = getRandomInt(30, 500);
        const duration_hours = Math.floor(duration / 60);
        const duration_minutes = duration - (duration_hours * 60);
        let arrival_hours = hour + duration_hours;
        let arrival_minutes = minute + duration_minutes;
        if (arrival_minutes > 59) {
            arrival_hours++;
            arrival_minutes -= 60;
        }
        if (arrival_hours > 23) {
            arrival_hours -= 24;
            new_date.setDate(new_date.getDate() + 1);
            date_arrival = new Intl.DateTimeFormat('en-US', {
                month: 'short',
                day: 'numeric'
            }).format(new_date);
        }
        const formatted_hour = hour.toString().padStart(2, '0');
        const formatted_minute = minute.toString().padStart(2, '0');
        const formatted_duration_hours = duration_hours.toString().padStart(2, '0');
        const formatted_duration_minutes = duration_minutes.toString().padStart(2, '0');
        const formatted_arrival_hours = arrival_hours.toString().padStart(2, '0');
        const formatted_arrival_minutes = arrival_minutes.toString().padStart(2, '0');
        const price = getRandomInt(50, 500);
        document.getElementById("route" + i).textContent = route;
        document.getElementById("logo" + i).src = "images/logos/" + randomIndex + ".svg"
        document.getElementById("airline" + i).textContent = airline;
        document.getElementById("departure-time" + i).textContent = formatted_hour + ":" + formatted_minute;
        document.getElementById("departure-date" + i).textContent = date_departure;
        document.getElementById("duration" + i).textContent = formatted_duration_hours + "h " + formatted_duration_minutes + "m";
        document.getElementById("arrival-time" + i).textContent = formatted_arrival_hours + ":" + formatted_arrival_minutes;
        document.getElementById("arrival-date" + i).textContent = date_arrival;
        document.getElementById("price" + i).textContent = price + "$";
    }
}

function dategen(destination) {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const currentDay = today.getDate(); // Get the current day

    // Ensure the day doesn't exceed 31
    let day = currentDay + 5;
    if (day > 30) {
        day = 30;
    }

    const paddedDay = String(day).padStart(2, '0'); // Pad the day if needed
    const date = `${year}-${month}-${paddedDay}`;
    window.location.href = `offers.html?from=Belgrade&to=${destination}&date=${date}`;
}

function capitalize(str) {
    // Check if the string is empty or null
    if (!str) return str;

    // Capitalize the first letter and concatenate the rest of the string
    return str.charAt(0).toUpperCase() + str.slice(1);
}

document.addEventListener("click", function (event) {
    const clickedElement = event.target;
    if (clickedElement.classList.contains("buy")) {
        const buttonId = clickedElement.id;
        const lastSymbol = buttonId.charAt(buttonId.length - 1);
        console.log("called button:" + lastSymbol);
        const route = document.getElementById("route" + lastSymbol).textContent;
        const airline = document.getElementById("airline" + lastSymbol).textContent
        var logo = document.getElementById("logo" + lastSymbol).src;
        const lastIndex = logo.lastIndexOf('/');
        logo = logo.slice(lastIndex + 1, -4);
        const departure_time = document.getElementById("departure-time" + lastSymbol).textContent;
        const departure_date = document.getElementById("departure-date" + lastSymbol).textContent;
        const duration = document.getElementById("duration" + lastSymbol).textContent;
        const arrival_time = document.getElementById("arrival-time" + lastSymbol).textContent;
        const arrival_date = document.getElementById("arrival-date" + lastSymbol).textContent;
        const price = document.getElementById("price" + lastSymbol).textContent;
        console.log(route, airline, logo, departure_time, departure_date, duration, arrival_time, arrival_date, price);
        const queryParams = new URLSearchParams();
        queryParams.set("route", route);
        queryParams.set("airline", airline);
        queryParams.set("logo", logo);
        queryParams.set("departure_time", departure_time);
        queryParams.set("departure_date", departure_date);
        queryParams.set("duration", duration);
        queryParams.set("arrival_time", arrival_time);
        queryParams.set("arrival_date", arrival_date);
        queryParams.set("price", price);
        queryParams.set("date", date);

        // Build the new URL with the query parameters
        const newURL = "booking.html?" + queryParams.toString();

        // Redirect the page to the new URL
        window.location.href = newURL;
    }
});

function getWeather(city) {
    const apiKey = '90d9cfa71a9bf51387e78a60949f886d';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    return fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
            // Handle the JSON response here
            const temperature = data.main.temp; // Temperature in Celsius
            return Math.floor(temperature.toFixed(2));
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

// Usage with a promise
const cities = ["rome", "budapest", "moscow", "london", "barcelona", "istanbul"];

// Use a for loop to iterate through the array
for (let i = 0; i < cities.length; i++) {
    const city = cities[i];
    getWeather(city)
        .then((temperature) => {
            document.getElementById(city).textContent = `Temperature in ${capitalize(city)}: ${temperature}°C`;
        })
        .catch((error) => {
            console.error('Failed to retrieve weather:', error);
    });
}