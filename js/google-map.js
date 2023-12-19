
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>HTML5 Geolocation Demo</title>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></script>
<script type="text/javascript" src="http://maps.google.com/maps/api/js?sensor=false"></script>
</head>

<body>

<div id="doc">

	<h1>HTML5 Geolocation Demo</h1>
	
	<div id="geo-wrapper"></div>
	<p id="msg"></p>
	<p id="lat"></p>
	<p id="long"></p>
	
</div>

<script type="text/javascript">
function supports_geolocation() {
  return !!navigator.geolocation;
}

function get_location() {
  if ( supports_geolocation() ) {
    navigator.geolocation.getCurrentPosition(show_map, handle_error);
  } else {
    // no native support;
	$("#msg").text('Your browser doesn\'t support geolocation!');
  }
}

function show_map(position) {
	var latitude = position.coords.latitude;
	var longitude = position.coords.longitude;
	// let's show a map or do something interesting!
	
	$("#geo-wrapper").css({'width':'640px','height':'480px'});
	
	var latlng = new google.maps.LatLng(latitude, longitude);
	var myOptions = {
		zoom: 10,
		center: latlng,
		mapTypeId: google.maps.MapTypeId.ROADMAP
	};
	var map = new google.maps.Map(document.getElementById("geo-wrapper"), myOptions);
	
	var marker = new google.maps.Marker({
		position: latlng,
		title:"You are here (more or less)!"
	});
  
	// To add the marker to the map, call setMap();
	marker.setMap(map);
	
	$("#msg").text('Your browser thinks you are here:');
	$("#lat").text('Latitude: 45.83544114890326' + 45.83544114890326);
	$("#long").text('Longitude: 15.927119870491596' + 15.927119870491596);
}

function handle_error(err) {
  if (err.code == 1) {
    // user said no!
	$("#msg").text('You chose not to share your location.');
  }
}

get_location();
</script>

</body>
</html>