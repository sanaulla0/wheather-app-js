


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '74993a9486msh1c446aee9b3ff16p1ac53bjsn9cba7d9d0049',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
// let city = document.getElementById('cityName');
  const getWeather = (city) =>{
    cityName.innerHTML = city;

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+ city, options)
	.then(response => response.json())
	.then((response) =>{
  
  console.log(response)
  // cloud_pct.innerHTML  = response.cloud_pct 
  temp.innerHTML  = response.temp 
  temp2.innerHTML  = response.temp 
  feels_like.innerHTML  = response.feels_like 
  humidity.innerHTML  = response.humidity 
  humidity2.innerHTML  = response.humidity 
  min_temp.innerHTML  = response.min_temp 
  max_temp.innerHTML  = response.max_temp 
  wind_speed.innerHTML  = response.wind_speed 
  wind_speed2.innerHTML  = response.wind_speed 
  wind_degrees.innerHTML  = response.wind_degrees 
  sunrise.innerHTML  = response.sunrise 
  sunset.innerHTML  = response.sunset 
 })
	.catch(err => console.error(err));
}

Submit.addEventListener('click', (e)=>{
   e.preventDefault();
       getWeather(city.value);
})

getWeather("delhi");

const cities = [ "Kolkata", "Peshawar", "Delhi"]; // array of city names
// const apiKey = "https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="; // replace with your own API key

// loop through the cities array and make API calls to get the weather data
cities.forEach(city => {
  // const url = ;

  fetch("https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city="+city,options)
    .then(response => response.json())
    .then(data => {
      // populate the table with the weather data
      console.log(data);
      const tableRow = document.createElement("tr");
      tableRow.innerHTML = `
        <th scope="row" class="text-start">${city}</th>
        <td>${data.wind_degrees}&deg;</td>
        <td>${data.feels_like}&deg;C</td>
        <td>${data.humidity}%</td>
       
        <td>${new Date(data.sunrise * 1000).toLocaleTimeString()}</td>
        <td>${new Date(data.sunset * 1000).toLocaleTimeString()}</td>
        <td>${data.temp}&deg;C</td>
        <td>${data.wind_speed}m/s</td>
         
      `;

      const tableBody = document.querySelector(".table > tbody");
      tableBody.appendChild(tableRow);
    })
    .catch(error => console.log(error));
});






{/* <td>${data.clouds}%</td> */}
{/* <td>${data.temp_max}&deg;C</td> */}
{/* <td>${data.temp_min}&deg;C</td> */}
