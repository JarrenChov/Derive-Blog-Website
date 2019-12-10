$.get('https://freegeoip.net/json/')
    .done (function(location)
    {
        $('#country').html(location.country_name);
        $('#latitude').html(location.latitude);
        $('#longitude').html(location.longitude);
    });

function SendData()
{
    var Longitude = document.getElementById('longitude').innerHTML;
    var Latitude = document.getElementById('latitude').innerHTML;
    var Country = document.getElementById('country').innerHTML;

    document.getElementById("country_new").value = Country;
    document.getElementById("latitude_new").value = Latitude;
    document.getElementById("longitude_new").value = Longitude;
}
