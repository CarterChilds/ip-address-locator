function initMap() {} // now it IS a function and it is in global

function initMaps() {
  let ip = $(".ip-input").val();
  axios
    .get(
      `https://geo.ipify.org/api/v1?apiKey=at_Z55XeKss0p2sf2TUghIm83ePmu8cU&ipAddress=${ip}`
    )
    .then((res) => {
      console.log(res.data);
      let lat = res.data.location.lat;
      let lng = res.data.location.lng;

      let map = new google.maps.Map(document.getElementById("map"), {
        center: { lat, lng },
        zoom: 8,
      });

      let ipText = $("#ip")
      let locationText = $("#location")
      let timezoneText = $("#timezone")
      let ispText = $("#isp")
  
      ipText.append(res.data.ip)
      locationText.append(res.data.location.region)
      timezoneText.append(res.data.location.timezone)
      isp.append(res.data.isp)
    });

  


}

// $(() => {
//   initMap = function () {
//     let map = new google.maps.Map(document.getElementById("map"), {
//       center: { lat: 40.387878, lng: -111.849167 },
//       zoom: 8,
//     });

//     infoWindow = new google.maps.InfoWindow();

//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         function (position) {
//           var pos = {
//             lat: position.coords.latitude,
//             lng: position.coords.longitude,
//           };

//           infoWindow.setPosition(pos);
//           infoWindow.setContent("Location found.");
//           infoWindow.open(map);
//           map.setCenter(pos);
//         },
//         function () {
//           handleLocationError(true, infoWindow, map.getCenter());
//         }
//       );
//     } else {
//       // Browser doesn't support Geolocation
//       handleLocationError(false, infoWindow, map.getCenter());
//     }

//     function handleLocationError(browserHasGeolocation, infoWindow, pos) {
//       infoWindow.setPosition(pos);
//       infoWindow.setContent(
//         browserHasGeolocation
//           ? "Error: The Geolocation service failed."
//           : "Error: Your browser doesn't support geolocation."
//       );
//       infoWindow.open(map);
//     }
//   };
// });

// GEO LOCATOR

function getIpInfo() {}

let map;
