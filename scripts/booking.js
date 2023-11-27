const url = new URL(window.location.href);
const params = new URLSearchParams(url.search);
const route = params.get("route");
const cities = route.split(" - ");
const airline = params.get("airline");
const logo = params.get("logo");
const departure_time = params.get("departure_time");
const departure_date = params.get("departure_date");
const duration = params.get("duration");
const arrival_time = params.get("arrival_time");
const arrival_date = params.get("arrival_date");
const price = parseInt(params.get("price"));
const date = params.get("date");
var price_display = price;

document.getElementById("from").value = cities[0];
document.getElementById("to").value = cities[1];
document.getElementById("date").value = date;

document.getElementById("route").textContent = route;
document.getElementById("airline").textContent = airline;
document.getElementById("logo").src = "images/logos/" + logo + ".svg";
document.getElementById("departure-time").textContent = departure_time;
document.getElementById("departure-date").textContent = departure_date;
document.getElementById("duration").textContent = duration;
document.getElementById("arrival-time").textContent = arrival_time;
document.getElementById("arrival-date").textContent = arrival_date;
document.getElementById("price").textContent = `Price: ${price}$`;

// Select all checkboxes using a common class or another selector
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

// Initialize variables to count checked checkboxes and store their IDs
let checkedCount = 0;
const checkedIds = [];

// Uncheck checkboxes programmatically
checkboxes.forEach(function (checkbox) {
    checkbox.checked = false; // Uncheck the checkbox
});

document.getElementById("example").checked = true;

// Add a change event listener to each checkbox
checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
            checkedCount++; // Increment the count for each checked checkbox
            checkedIds.push(checkbox.id); // Add the ID to the array
        } else {
            checkedCount--; // Decrement the count when a checkbox is unchecked
            const index = checkedIds.indexOf(checkbox.id);
            if (index !== -1) {
                checkedIds.splice(index, 1); // Remove the ID from the array
            }
        }
        if (checkedCount > 1) {
            price_display = price * checkedCount;
        } else {
            price_display = price;
        }
        document.getElementById("price").textContent = `Price: ${price_display}$`;

        // Display the count and IDs in the console or on the page
        console.log("Number of checked checkboxes: " + checkedCount);
        console.log("IDs of checked checkboxes: " + checkedIds);
    });
});

function generateRandomElement() {
    const chars = 'ABCDEF'; // Chars range: A-F
    const nums = '123456789'; // Numbers range: 1-10

    const randomChar = chars.charAt(Math.floor(Math.random() * chars.length));
    const randomNum = nums.charAt(Math.floor(Math.random() * nums.length));

    return randomNum + randomChar;
}

function generateRandomUniqueElements(minCount, maxCount) {
    const count = Math.floor(Math.random() * (maxCount - minCount + 1)) + minCount;
    const elements = new Set();
    while (elements.size < count) {
        const newElement = generateRandomElement();
        elements.add(newElement);
    }
    return Array.from(elements);
}

const randomUniqueElements = generateRandomUniqueElements(5, 15);
for (let i = 0; i < randomUniqueElements.length; i++) {
    console.log(randomUniqueElements[i]);
    document.getElementById(randomUniqueElements[i]).disabled = true;
}
console.log(randomUniqueElements);

const button = document.getElementById("buy");

// Add a click event listener to the button
function buy() {
    if (checkedCount > 0) {
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
        const newURL = "ticket.html?" + queryParams.toString();

        // Redirect the page to the new URL
        window.location.href = newURL;
    } else {
        alert("Please, choose seats first!");
    }
};