function searchTheCity() {
    
    $.ajax({
        url: 'http://api.openweathermap.org/data/2.5/weather',
        type: 'GET',
        dataType: 'json',
        data: {
            'appid': '',
            'q': $('#search-input').val()
        },
        success: function (result) {
            let cityName = result.name;
            let countryName = result.sys.country;
            let cityCountry = cityName.concat(", ", countryName);
            let weather = result.weather[0].main;
            let weatherDetail = result.weather[0].description;
            let temperature = parseInt(result.main.temp - 273, 10);
            let pressure = result.main.pressure;
            let humidity = result.main.humidity;
 
            $('#search-result').html(`
                 <div class="col">
                     <table class="table table-hover">
                         <thead>
                         <tr>
                             <th scope="col">#</th>
                             <th scope="col">Parameter</th>
                             <th scope="col">Result</th>
                         </tr>
                         </thead>
                         <tbody>
                         <tr>
                             <th scope="row">1</th>
                             <td>City</td>
                             <td>`+ cityCountry +`</td>
                         </tr>
                         <tr>
                             <th scope="row">2</th>
                             <td>Weather</td>
                             <td>`+ weather +`</td>
                         </tr>
                         <tr>
                             <th scope="row">3</th>
                             <td>Weather Details</td>
                             <td>`+ weatherDetail +`</td>
                         </tr>
                         <tr>
                             <th scope="row">4</th>
                             <td>Temperature</td>
                             <td>`+ temperature +`</td>
                         </tr>
                         <tr>
                             <th scope="row">5</th>
                             <td>Pressure</td>
                             <td>`+ pressure +`</td>
                         </tr>
                         <tr>
                             <th scope="row">6</th>
                             <td>Humidity</td>
                             <td>`+ humidity +`</td>
                         </tr>
                         </tbody>
                     </table>
                 </div>
            `);
        },
        error: function (result) {
            $('#search-result').html(`
                 <div class="col">
                     <h1 class="text-center">`+ result.statusText +`</h1>
                 </div>
             `);
        }
     });
 
     $('#search-input').val(''); 
}

$('#search-button').on('click', function() {
    searchTheCity();
});

$('#search-input').on('keyup', function(event) {
    if(event.keyCode === 13){
        searchTheCity();
    }
});