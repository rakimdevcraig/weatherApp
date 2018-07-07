$('#button').on('click', function(){
  var apiKEY = "78dd71b81ea22469c40e27e4ee530cd7";
  var city = $('#city').val()
  var country = $('#country').val()
  var apiURL = "http://api.openweathermap.org/data/2.5/weather?q="+ city +"," + country +"&appID="+ apiKEY +"&units=imperial";


  $.ajax({
    url: apiURL,
    //this is what's gonna happen if the request is a success
    success: function(res){
      //setting the var of temp as main temp which are the properties
      var temp = res.main.temp
      var weather = res.weather[0].main
      console.log(weather)
      //print the current temperature in the html
      $('.print').html("The current weather in " +city+ ', ' + country + " is " +temp);
    },
    error: function(e) {
      console.log(e)
    }
  })
  });
