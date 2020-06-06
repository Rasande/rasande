import '../vendor/noframework.waypoints.js';
import anime from '../vendor/anime.js';




document.addEventListener('DOMContentLoaded' , () => {

  let waypoint = new waypoint({
    element: document.querySelector('.site-footer'),
    handler: function() {
      anime({
        targets: '.footer-background',
        scale: [0, 1],
        opacity: 1,
        rotate: [90, 0],
        duration: 2000,
        delay: anime.stagger(100)
    });
    },
    offset: '80%',
  })
})