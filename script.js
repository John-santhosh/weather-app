const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3ab79bf576mshb309e1d23f30744p148662jsnf618835f6fdc",
    "X-RapidAPI-Host": "open-weather13.p.rapidapi.com",
  },
};

// events for keyboard and search button
$("button").click(fetchApi);
$(document).keydown((e) => {
  if (e.key === "Enter") {
    fetchApi();
  }
});

// fetching data from api
async function fetchApi() {
  const value = $("input").val();
  if (!value) {
    alert("Search for a city");
    return;
  }
  try {
    const response = await fetch(
      `https://open-weather13.p.rapidapi.com/city/${value}`,
      options
    );
    const data = await response.json();
    //from displayTemperature function
    displayTemperature(data);
  } catch (err) {
    alert("Sorry something went wrong!");
    console.log(err);
  }
}

// filling up temperature details from the fetchApi()
function displayTemperature(obj) {
  console.log(obj);
  const weatherImg = `https://openweathermap.org/img/w/${obj.weather[0].icon}.png`;
  $("#city-name").text(obj.name);
  $("#weather-type").text(obj.weather[0].main);
  $("#weather-icon").attr("src", weatherImg);
  $("#temp").text(obj.main.temp);
  $("#min-temp").text(obj.name);
  $("#max-temp").text(obj.main.temp_min);
}
