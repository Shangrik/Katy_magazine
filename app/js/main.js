"use strict";

console.log('global');
"use strict";

console.log('maxgraph');
"use strict";

var pulsbar = document.querySelector('.pulse');
var on = false;

var update = function update() {
  pulsbar.setAttribute('data-animation', on ? 'pulse' : '');
  on = !on;
  setTimer();
};

var setTimer = function setTimer() {
  setTimeout(function () {
    requestAnimationFrame(update);
  }, 1000);
};

setTimer(); //lider 

var slider = tns({
  container: '.my-slider',
  mode: "carousel",
  items: 3,
  slideBy: 1,
  autoplay: true,
  controls: false,
  mouseDrag: true,
  nav: false,
  speed: 300,
  preventScrollOnTouch: 'auto',
  responsive: {
    320: {
      items: 1
    },
    600: {
      // edgePadding: 20,
      items: 2
    },
    900: {
      items: 3
    }
  }
});
//# sourceMappingURL=main.js.map
