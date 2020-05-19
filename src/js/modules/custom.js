// Rotate on scroll

window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("rotate--scroll");
    image.style.transform = "rotate(" + window.pageYOffset/4 + "deg)";
}


var rellax = new Rellax('.rellax');

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