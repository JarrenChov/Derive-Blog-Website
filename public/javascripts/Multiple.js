var mapOptions = {
    center: new google.maps.LatLng(locations[0].lat, locations[0].lng),
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};
var infoWindow = new google.maps.InfoWindow();
var latlngbounds = new google.maps.LatLngBounds();
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

for (var i = 0; i < locations.length; i++) {
    var data = locations[i]
    var myLatlng = new google.maps.LatLng(data.lat, data.lng);
    var marker = new google.maps.Marker({
        position: myLatlng,
        map: map,
        title: data.title,
		icon: {
			url: "images/Icons/location.png",
			scaledSize: new google.maps.Size(34,36)
		}
    });
    (function (marker, data) {
        google.maps.event.addListener(marker, "click", function (e) {
		infoWindow.setContent(
			"<hr>" +
			"<br style = 'width:auto;min-height:5px;height:auto'>" + 
			"<h50 style = 'font-size:18px; font-style:italic; font-weight:bold; color:#176583; font-family: Rajdhani;'>" + "Blog Poster: " + "<span style = 'font-weight:normal; color:#000000;'>" + data.name + "</span>" + "</h50>" +
			"<br>" +
			"<h50 style = 'font-size:18px; font-style:italic; font-weight:bold; color:#176583; font-family: Rajdhani;'>" + "Posted On: " + "<span style = 'font-weight:normal; color:#000000;'>" + data.time + "</span>" + "</h50>" + 
			"<br>" +
			"<h50 style = 'font-size:18px; font-style:italic; font-weight:bold; color:#176583; font-family: Rajdhani;'>" + "Location Posted: " + "<span style = 'font-weight:normal; color:#000000;'>" + data.title + "</span>" + "</h50>" + 
			"<p style = 'font-size: 16px; font-family: Rajdhani;'>" + data.description + "</p>" +
			"<hr>");
            infoWindow.open(map, marker);
        });
    })(marker, data);
    latlngbounds.extend(marker.position);
}
