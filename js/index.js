document.querySelector(".contacts-button").onclick = function(e) {
    e.preventDefault();
    let popup = document.querySelector(".feedback");
    if (popup.classList.contains("feedback-form-show")) {
      popup.classList.remove("feedback-form-show");
    }
    else {
      popup.classList.add("feedback-form-show");
    }
  };

document.querySelector(".close-feedback").onclick = function(e) {
    e.preventDefault();
  let popup = document.querySelector(".feedback");
    popup.classList.remove("feedback-form-show");
  };

ymaps.ready(init);

function init () {
  // Create a map copy and binding it to container with id="map"
  let myMap = new ymaps.Map('map', {
    // Indicating a map center and zoom index
    center:[45.043746,38.943404], // Coordinates of our address
    zoom:18
  });

  myMap.controls
  // Zoom button
    .add('zoomControl', { left: 15, top: 15 });
}
