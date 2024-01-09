async function fetchData(city) {
  const url = `https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=${encodeURIComponent(city)}`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'e88e8c0caemsha6558e4d6381c7dp1cfedajsn93dd01b50913',
      'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
  };

  try {
    const response = await fetch(url, options);
    const data = await response.json(); // Parse the response as JSON
    console.log(data);

    // Update HTML content based on the parsed JSON
    cloud_pct.innerHTML = data.cloud_pct;
    temp.innerHTML = data.temp;
    temp2.innerHTML = data.temp;
    feels_like.innerHTML = data.feels_like;
    humidity.innerHTML = data.humidity;
    humidity2.innerHTML = data.humidity;
    min_temp.innerHTML = data.min_temp;
    max_temp.innerHTML = data.max_temp;
    wind_speed.innerHTML = data.wind_speed;
    wind_speed2.innerHTML = data.wind_speed;
    wind_degrees.innerHTML = data.wind_degrees;
    sunrise.innerHTML = data.sunrise;
    



    
  } catch (error) {
    console.error(error);
  }
}

// Assuming you have a submit button with the id 'submit'
const submitButton = document.getElementById('submit');

// Add an event listener to the submit button
submitButton.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior
  // Assuming you have an input field with the id 'city'
  const cityInput = document.getElementById('city');
  const city = cityInput.value;
  updateCitySpan(city);
  // Call fetchData with the value of the city input field
  fetchData(city);


});

// Call fetchData with the default city when the page loads
fetchData('Kolkata');

function updateCitySpan(city) {
  // Assuming you have a span with the ID 'citySpan'
  const citySpan = document.getElementById('citySpan');
  citySpan.textContent = city;
}

