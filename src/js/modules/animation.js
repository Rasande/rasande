document.addEventListener('DOMContentLoaded', () => {

  // Execute on scroll
  var selection = document.querySelector('.entry-content p') !== null;
  if (selection) {
    var waypoint = new Waypoint({
      element: document.querySelector('.entry-content p'),
      handler: function (direction) {
  
        this.destroy()
      },
      offset: '5%',
    });
  }

  // Execute on load
  anime({
    targets: '.entry-content p',
    opacity: [0,1],
    translateX: [250,0],
    delay: 300
  });
  anime({
    targets: '.single-letter',
    translateY: [-250,0],
    opacity: [0,1],
    delay: anime.stagger(100) 
  })
})


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