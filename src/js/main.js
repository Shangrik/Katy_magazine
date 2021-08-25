const pulsbar = document.querySelector('.pulse');
let on = false;

let update = function() {
  pulsbar.setAttribute('data-animation', (on) ? 'pulse' : '');
  on = !(on);
  setTimer();
};

let setTimer = function() {
  setTimeout(function() {
    requestAnimationFrame(update);

  }, 1000);
};
setTimer();

//lider 


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

