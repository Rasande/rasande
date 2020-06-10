document.addEventListener('DOMContentLoaded', () => {

  // Execute on scroll
  var continuousElements = document.getElementsByClassName('wp-block-paragraph')
  if (continuousElements) {
  for (var i = 0; i < continuousElements.length; i++) {
    new Waypoint({
      element: continuousElements[i],
      handler: function() {
        anime({
          targets: this.element,
          opacity: [0,1],
          translateX: [250,0],
          delay: anime.stagger(100),
          duration: 2500 
        });
        this.destroy();
      },
      offset: '80%'
    })
  }
}

  // Execute on load

  anime({
    targets: '.single-letter',
    translateY: [-250,0],
    opacity: [0,1],
    delay: anime.stagger(100) 
  })

  anime({
    targets: '.site-header',
    translateY: [-250,0],
    opacity: [0,1],
    easing: 'easeOutExpo'
  })
})

// Execute on hover
let navItems = document.querySelectorAll('.nav-item');

navItems.forEach((navItem) => {
  navItem.addEventListener('mouseenter', (event) => {
    anime({
      targets: navItem.querySelector('.nav-link'),
      translateY: -3,
      easing: 'easeOutExpo',
      duration: 300
    })
  })
  navItem.addEventListener('mouseleave', (event) => {
    anime({
      targets: navItem.querySelector('.nav-link'),
      translateY: 0,
      easing: 'easeOutExpo',
      duration: 400
    })
  })
});

let ddItems = document.querySelectorAll('.dropdown-item');

ddItems.forEach((ddItem) => {
  ddItem.addEventListener('mouseenter', (event) => {
    anime({
      targets: ddItem.querySelector('.nav-link'),
      translateX: 3,
      easing: 'easeOutExpo',
      duration: 300
    })
  })
  ddItem.addEventListener('mouseleave', (event) => {
    anime({
      targets: ddItem.querySelector('.nav-link'),
      translateX: 0,
      easing: 'easeOutExpo',
      duration: 400
    })
  })
});

// Rotate on scroll
window.onscroll = function () {
  scrollRotate();
};

function scrollRotate() {
  let image = document.getElementById("rotate--scroll");
  image.style.transform = "rotate(" + window.pageYOffset/4 + "deg)";
}

// Animate form labels
(function($) {
let formGroup = $('.wpcf7-form p');

$('.wpcf7-form-control').focus(function(){
  $(this).parents(formGroup).addClass('focused');
});

$('.wpcf7-form-control').blur(function(){
  var inputValue = $(this).val();
  if ( inputValue == "" ) {
    $(this).removeClass('filled');
    $(this).parents(formGroup).removeClass('focused');  
  } else {
    $(this).addClass('filled');
  }
})  

})( jQuery );

// Expand textarea when typing
var autoExpand = function (field) {

// Reset field height
field.style.height = 'inherit';

// Get the computed styles for the element
var computed = window.getComputedStyle(field);

// Calculate the height
var height = parseInt(computed.getPropertyValue('border-top-width'), 10)
             + parseInt(computed.getPropertyValue('padding-top'), 10)
             + field.scrollHeight
             + parseInt(computed.getPropertyValue('padding-bottom'), 10)
             + parseInt(computed.getPropertyValue('border-bottom-width'), 10);

field.style.height = height - 14 + 'px';

};

document.addEventListener('input', function (event) {
if (event.target.tagName.toLowerCase() !== 'textarea') return;
autoExpand(event.target);
}, false);


(function($) {
// Go through a sentence, wrap its characters with spans
function setUpCharacters() {
  var $sentences = $('.page-title');

  // Run for each sentence
  $sentences.each(function() {
    var $sentence = $(this);
    var newContent = '';

    // Go through all characters of the sentence
    for (i = 0; i < $sentence.text().length; i++) {
      var substring = $sentence.text().substr(i, 1);

      // If we have a character, wrap it
      if (substring != " ") {
        newContent += '<span class="single-letter">' + substring + '</span>';
      } else {
        newContent += substring;
      } 
    }

    // Replace content
    $sentence.html(newContent); 
  });
}

setUpCharacters();
})( jQuery );