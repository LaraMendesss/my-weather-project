let now = new Date();

let h6 = document.querySelector("h6");
let wkday = document.querySelector("#wkday");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];

let day = days[now.getDay()];
let hour = now.getHours();
let minutes = String(now.getMinutes()).padStart(2, "0");

h6.innerHTML = day + " " + hour + ":" + minutes;
wkday.innerHTML = day;

function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let h1 = document.querySelector("h1");

  h1.innerHTML = searchInput.value;
}
let button = document.querySelector("#find");
button.addEventListener("click", search);

function showTemp(response) {
  let temp = Math.round(response.data.temperature.current);
  let temperatureElement = document.querySelector("#numbers");

  temperatureElement.innerHTML = temp;

  let humidity = response.data.temperature.humidity;
  let humidityElement = document.querySelector("#humidity");

  humidityElement.innerHTML = humidity;

  let wind = Math.round(response.data.wind.speed);
  let windElement = document.querySelector("#wind");

  windElement.innerHTML = wind;
}

let apiKey = "dda9a648t200432eo3334f85db57e348";

function search2(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-text-input");

  if (searchInput.value) {
    let city = searchInput.value;

    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(showTemp);
  } else {
    alert("Enter a city name!");
  }
}

let button2 = document.querySelector("#find");
button2.addEventListener("click", search2);

//function unitsf(response) {
//let temp = Math.round(response.data.temperature.current);
//let temperatureElement = document.querySelector("#numbers");

//temperatureElement.innerHTML = temp;}
//let fahrenheit = document.querySelector(".fahrenheit");
//fahrenheit.addEventListener("click", unitsf);

//function unitsc(response) {
//let temp = Math.round(response.data.temperature.current);
// let numbers = document.querySelector("#numbers");

// numbers.innerHTML = temp;}

//let celsius = document.querySelector(".celsius");

//celsius.addEventListener("click", unitsc);
