var jsonData;

var city = prompt("Enter a city: ");

$.getJSON("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=c3ec46e0a4c33ca46821a76492688dcc", function(json) {
	jsonData = json;

	// organize data
	var temp = jsonData.main.temp;
	var main = jsonData.weather[0].main;						
	var humidity = jsonData.main.humidity;
	
	// set humidity
	document.getElementById("humidity").innerHTML = "Humidity: " + humidity + "%";

	// set city
	document.getElementById("city").innerHTML = city;

	// set weather description
	document.getElementById("weather").innerHTML = "Condition: " + main;

	// set background image
	if (main == "Clouds" && city != "Pittsburgh") {
		document.body.style.backgroundImage = "url('http://k53.pbase.com/o4/54/24354/1/63953550.WbnwRRFw.Animation23July2.gif')";
	} else if (main == "Rain" && city != "Pittsburgh") {
   		document.body.style.backgroundImage = "url('http://bestanimations.com/Nature/Water/rain/rain-nature-animated-gif-17.gif')";
   	} else if (main == "Clear") {
   		document.body.style.backgroundImage = "url('https://media.giphy.com/media/jk9L41aToGZQA/giphy.gif')";
   	} else if (main == "Snow") {
   		document.body.style.backgroundImage = "url('https://everymansurvival.files.wordpress.com/2015/07/spruce_trees_covered_in_heavy_snow.jpg')";
   	} else if (city == "Pittsburgh" && main == "Clouds") {
		document.body.style.backgroundImage = "url('http://breatheproject.org/wp-content/themes/breathe2014responsive/images/breathe-cam-gallery/rainbow.gif')";
	} else if (city == "Pittsburgh" && main == "Rain") {
		document.body.style.backgroundImage = "url('https://s-media-cache-ak0.pinimg.com/originals/52/07/68/5207680e1eafd7233ab094b5f910e6af.gif')";
	}

   	// set temperature 
   	if (temp < 20) {
   		document.getElementById("temperature").innerHTML = "Stay inside, kids. It's " + temp + " F. Brr" ;
   	} else if (temp <= 40) {
   		document.getElementById("temperature").innerHTML = "Bundle up! It's " + temp + " F" ;
   	} else if (temp > 40 && temp < 60) {
		document.getElementById("temperature").innerHTML = "Bring a jacket today. It's " + temp + " F";
	} else if (temp >= 60 && temp < 70) {
		document.getElementById("temperature").innerHTML = "It's cool today, only " + temp + " F";
	} else if (temp >= 70 && temp < 80) {
		document.getElementById("temperature").innerHTML = "It's a beautiful day! " + temp + " F";
	} else if (temp >= 80 && temp < 90) {
		document.getElementById("temperature").innerHTML = "Hot, hot, hot!! " + temp + " F" ;
	} else if (temp >= 90) {
		document.getElementById("temperature").innerHTML = "It's REALLY hot. " + temp + " F";
	}
});



	
