const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "d9d13ea3b7msh66e6238dfa11a26p1f9a44jsn8e1a9f644458",
    "X-RapidAPI-Host": "weather-by-api-ninjas.p.rapidapi.com",
  },
};
const getWeather = (city) => {
  cityName.innerHTML = city;
  fetch(
    "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=" + city,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      temp.innerHTML = response.temp;
      temp_main.innerHTML = response.temp;
      min_temp.innerHTML = response.min_temp;
      max_temp.innerHTML = response.max_temp;
      humidity.innerHTML = response.humidity;
      humidity_main.innerHTML = response.humidity;
      cloud_pct.innerHTML = response.cloud_pct;
      feels_like.innerHTML = response.feels_like;
      sunrise.innerHTML = response.sunrise;
      sunset.innerHTML = response.sunset;
      wind_speed.innerHTML = response.wind_speed;
      wind_speed_main.innerHTML = response.wind_speed;
    })
    .catch((err) => console.error(err));
};
// Event listener for submit button
submit.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default form submission behavior
  const city = document.getElementById("city").value; // Get the value from the input field
  getWeather(city);
});

// Initial weather for Kolkata
getWeather("Kolkata");


// Function to fetch weather data for common places
const getCommonPlaceWeather = (city, index) => {
  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(response);

      // Update the corresponding placeholders in the HTML table
      document.getElementById(`temp${index}`).innerHTML = response.temp;
      document.getElementById(`min_temp${index}`).innerHTML = response.min_temp;
      document.getElementById(`max_temp${index}`).innerHTML = response.max_temp;
      document.getElementById(`humidity${index}`).innerHTML = response.humidity;
      document.getElementById(`cloud_pct${index}`).innerHTML = response.cloud_pct;
      document.getElementById(`feels_like${index}`).innerHTML = response.feels_like;
      document.getElementById(`wind_speed${index}`).innerHTML = response.wind_speed;
      document.getElementById(`sunrise${index}`).innerHTML = response.sunrise;
      document.getElementById(`sunset${index}`).innerHTML = response.sunset;
    })
    .catch((err) => console.error(err));
};

// Get weather for common places
const commonPlaces = ["Mumbai", "London", "New York", "Paris"];

commonPlaces.forEach((place, index) => {
  getCommonPlaceWeather(place, index + 1); // index + 1 to match the table row numbering
});
