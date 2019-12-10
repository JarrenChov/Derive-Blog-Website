var apiGeolocationSuccess = function(position) {
//     alert("API geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
    
    var map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: position.coords.latitude, lng: position.coords.longitude},
            zoom: 19,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false
        });
    
    var marker = new google.maps.Marker({
        position: {lat: position.coords.latitude, lng: position.coords.longitude},
		map: map,
		title: 'My current location',
		icon: {
			url: "images/Icons/location.png",
			scaledSize: new google.maps.Size(34,36)
		}
        });    

    document.getElementById("blogStatus").innerHTML = "local";
	document.getElementById("blogStatus").style.color = '#228B22';
	ocument.getElementById("blogStatusError").innerHTML = "";
    document.getElementById("latitude").innerHTML = position.coords.latitude;
    document.getElementById("longitude").innerHTML = position.coords.longitude;

};

var tryAPIGeolocation = function() {
    jQuery.post( "https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyDCa1LUe1vOczX1hO_iGYgyo8p_jYuGOPU", function(success) {
        apiGeolocationSuccess({coords: {latitude: success.location.lat, longitude: success.location.lng}});
  })
  .fail(function(err) {
    alert("API Geolocation error! \n\n"+err);
  });
};

var browserGeolocationSuccess = function(position) {

//     alert("Browser geolocation success!\n\nlat = " + position.coords.latitude + "\nlng = " + position.coords.longitude);
                    
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: position.coords.latitude, lng: position.coords.longitude},
			zoom: 19,
            scrollwheel: false,
            navigationControl: false,
            mapTypeControl: false,
            scaleControl: false,
            draggable: false
		});
        
	var marker = new google.maps.Marker({
		position: {lat: position.coords.latitude, lng: position.coords.longitude},
		map: map,
		title: 'My current location',
		icon: {
			url: "images/Icons/location.png",
			scaledSize: new google.maps.Size(34,36)
		}
	});    

    document.getElementById("blogStatus").innerHTML = "Online";
	document.getElementById("blogStatus").style.color = '#228B22';
	document.getElementById("blogStatusError").innerHTML = "";
    document.getElementById("latitude").innerHTML = position.coords.latitude;
    document.getElementById("longitude").innerHTML = position.coords.longitude;

};

var browserGeolocationFail = function(error) {
  switch (error.code) {
    case error.TIMEOUT:
      alert("Location has expired! \n\n Please refresh to display location!");
      break;
    case error.PERMISSION_DENIED:
      if(error.message.indexOf("Location denied! \n\n You do not have premissions!") == 0) {
        tryAPIGeolocation();
      }
      break;
    case error.POSITION_UNAVAILABLE:
      alert("Location could not be found! \n\n Please refresh to try again!");
      break;
  }
};

var tryGeolocation = function() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
        browserGeolocationSuccess,
      browserGeolocationFail,
      {maximumAge: 50000, timeout: 20000, enableHighAccuracy: true});
  }
};

function load_data_map(){  
    document.getElementById("blogStatus").innerHTML = "Offline";
	document.getElementById("blogStatusError").innerHTML = "**** Posts can not be processed currently. Please try again when status is online ****";
    tryGeolocation()
}

//setTimeout(function() { window.location=window.location;},5000);

// HTML5 Geolocation without asking for user information
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (p) {
//         var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
//         var mapOptions = {
//             center: LatLng,
//             zoom: 13,
//             mapTypeId: google.maps.MapTypeId.ROADMAP
//         };
//         var map = new google.maps.Map(document.getElementById("map"), mapOptions);
//         var marker = new google.maps.Marker({
//             position: LatLng,
//             map: map,
//             title: "<div style = 'height:60px;width:200px'><b>Your location:</b><br />Latitude: " + p.coords.latitude + "<br />Longitude: " + p.coords.longitude
//         });
//         google.maps.event.addListener(marker, "click", function (e) {
//             var infoWindow = new google.maps.InfoWindow();
//             infoWindow.setContent(marker.title);
//             infoWindow.open(map, marker);
//         });
//         
//         $('#country').html("22");
//         $('#latitude').html(p.coords.latitude);
//         $('#longitude').html(p.coords.longitude);
//         
//     });
// } else {
//     alert('Geo Location feature is not supported in this browser.');
// }

