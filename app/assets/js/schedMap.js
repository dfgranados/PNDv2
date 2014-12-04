// Google Maps Scripts
  // When the window has finished loading create our google map below
            google.maps.event.addDomListener(window, 'load', init);
        
            function init() {
                // Basic options for a simple Google Map
                // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOption

  var schedMapOptions = {
                    // How zoomed in you want the map to start at (always required)
                    zoom: 11,

                    // The latitude and longitude to center the map (always required)
                    center: new google.maps.LatLng(38.9034317,-77.1412642), // New York

                    // How you would like to style the map. 
                    // This is where you would paste any style found on Snazzy Maps.
                    styles: [
    {
        "featureType": "water",
        "stylers": [
            {
                "saturation": 43
            },
            {
                "lightness": -11
            },
            {
                "hue": "#0088ff"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "hue": "#ff0000"
            },
            {
                "saturation": -100
            },
            {
                "lightness": 99
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#808080"
            },
            {
                "lightness": 54
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ece2d9"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#ccdca1"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "color": "#767676"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "poi",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#b8cb93"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.sports_complex",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.medical",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "poi.business",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    }
]
                };

                // Get the HTML DOM element that will contain your map 
                // We are using a div with id="map" seen below in the <body>
                var schedMapElement = document.getElementById('schedule-map');

                // Create the Google Map using our element and options defined above
                var schedMap = new google.maps.Map(schedMapElement, schedMapOptions);
            
                // Following section, you can create your info window content using html markup

                var dupontContentString = 
                    '<h4 id="firstHeading" class="firstHeading">Studio DC - Dupont</h3>'+
                    '<p> 1710 Connecticut Ave NW, Washington, D.C. 20009<br>' +
                    '(202) 518-9642</p>';

                  var adamsContentString = 
                    '<h4 id="firstHeading" class="firstHeading">Studio DC - Adam\'s Morgan</h3>'+
                    '<p> 2469 18th St NW, Washington, D.C. 20009<br>' +
                    '(202) 518-9642</p>';

                  var viennaContentString = 
                    '<h4 id="firstHeading" class="firstHeading">East Meets West Yoga Center</h3>'+
                    '<p> 8227 Old Courthouse Rd #310, Vienna, VA 22182<br>' +
                    '(703) 356-9642</p>';

                  var tysonsContentString = 
                    '<h4 id="firstHeading" class="firstHeading">Sport&Health Club: Regency</h3>'+
                    '<p> 1800 Old Meadow Rd, McLean, VA 22102<br>' +
                    '(703) 556-6550</p>';


        // Define the image to use for the map marker (58 x 44 px)

                var purplePin = 'assets/img/map_pin_purple.png';
                var yellowPin = 'assets/img/map_pin_yellow.png';
                var redPin = 'assets/img/map_pin_red.png';
                var greenPin = 'assets/img/map_pin_green.png';

        // Define the Lattitude and Longitude for the map location

                var dupontLatLang = new google.maps.LatLng(38.912796,-77.045582);
                var adamsLatLang = new google.maps.LatLng(38.922232,-77.042253);
                var viennaLatLang = new google.maps.LatLng(38.912912,-77.230524);
                var tysonsLatLang = new google.maps.LatLng(38.917215,-77.213877);

        // Define the map marker characteristics

                var dupontMarker = new google.maps.Marker({
                position: dupontLatLang,
                map: schedMap,
                icon: purplePin,
                title:  'Studio DC - Dupont'
                });

                 var adamsMarker = new google.maps.Marker({
                position: adamsLatLang,
                map: schedMap,
                icon: yellowPin,
                title:  'Studio DC - Adam\'s Morgan'
                });

                 var viennaMarker = new google.maps.Marker({
                position: viennaLatLang,
                map: schedMap,
                icon: redPin,
                title:  'Studio DC - Adam\'s Morgan'
                });


                var tysonsMarker = new google.maps.Marker({
                position: tysonsLatLang,
                map: schedMap,
                icon: greenPin,
                title:  'Studio DC - Adam\'s Morgan'
                });


               // Following Lines are needed if you use the Info Window to display content when map marker is clicked

           var dupontinfowindow = new google.maps.InfoWindow({
                            content: dupontContentString
                        });
           var adamsinfowindow = new google.maps.InfoWindow({
                            content: adamsContentString
                        });
           var viennainfowindow = new google.maps.InfoWindow({
                            content: viennaContentString
                        });
           var tysonsinfowindow = new google.maps.InfoWindow({
                            content: tysonsContentString
                        });

            // Following line turns the marker, into a clickable button and when clicked, opens the info window

                google.maps.event.addListener(dupontMarker, 'click', function() {
                    dupontinfowindow.open(schedMap, dupontMarker);
                });  
                google.maps.event.addListener(adamsMarker, 'click', function() {
                   adamsinfowindow.open(schedMap, adamsMarker);
                });  
                google.maps.event.addListener(viennaMarker, 'click', function() {
                    viennainfowindow.open(schedMap, viennaMarker);
                });  
                google.maps.event.addListener(tysonsMarker, 'click', function() {
                    tysonsinfowindow.open(schedMap, tysonsMarker);
                });  

    

    /*close init*/
    }

