document.addEventListener('DOMContentLoaded', () => {

  // Slide in content left to right
  // Execute: on scroll
  let slideInRight = document.getElementsByClassName('slide-in-ltr');

  if (slideInRight) {
    for (var i = 0; i < slideInRight.length; i++) {
      new Waypoint({
        element: slideInRight[i],
        handler: function () {
          anime({
            targets: this.element,
            opacity: [0, 1],
            translateX: [-250, 0],
            delay: anime.stagger(100),
            duration: 2000,
            easing: 'easeOutExpo'
          });
          this.destroy();
        },
        offset: '80%'
      })
    }
  }

  // Slide in content right to left
  // Execute: on scroll
  let slideInLeft = document.getElementsByClassName('slide-in-rtl');

  if (slideInLeft) {
    for (var i = 0; i < slideInLeft.length; i++) {
      new Waypoint({
        element: slideInLeft[i],
        handler: function () {
          anime({
            targets: this.element,
            opacity: [0, 1],
            translateX: [250, 0],
            delay: anime.stagger(100),
            duration: 2000,
            easing: 'easeOutExpo'
          });
          this.destroy();
        },
        offset: '80%'
      })
    }
  }

  // Slide down site header
  // Execute: on load
  anime({
    targets: '.site-header',
    translateY: [-250, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo'
  })

  // Block reveal for .page-titel
  // Execute: on load
  let block = document.querySelector('.block-overlay');
  let title = document.querySelector('.title');
  let titleContainer = document.querySelector('.page-title');

  var titleReveal = function (block, title, titleContainer) {

    var blockHeight = title.clientHeight;
    var blockWidth = title.offsetWidth;

    block.style.height = blockHeight + 'px';

    titleAnimation();

    function titleAnimation() {
      var tl = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 500,
      });
      tl.add({
          targets: block,
          width: blockWidth,
          complete: function (tl) {
            block.style.right = '0';
            title.style.opacity = '1';
          }
        })
        .add({
          targets: block,
          width: '0'
        })
    }
  }
  if (titleContainer) {
    titleReveal(block, title, titleContainer);
  }

  // Block reveal for .page-lead
  // Execute: on load
  let leadBlock = document.querySelector('.lead-block-overlay');
  let lead = document.querySelector('.lead');
  let leadContainer = document.querySelector('.page-lead');

  var leadReveal = function (leadBlock, lead, leadContainer) {

    var leadBlockHeight = lead.clientHeight;
    var leadBlockWidth = lead.offsetWidth;

    leadBlock.style.height = leadBlockHeight + 'px';

    leadAnimation();

    function leadAnimation() {
      var tl = anime.timeline({
        easing: 'easeInOutQuad',
        duration: 500,
      });
      tl.add({
          targets: leadBlock,
          width: leadBlockWidth,
          complete: function (tl) {
            leadBlock.style.right = '0';
            lead.style.opacity = '1';
          },
          delay: 250
        })
        .add({
          targets: leadBlock,
          width: '0'
        })
    }
  }
  if (leadContainer) {
    leadReveal(leadBlock, lead, leadContainer);
  }
  
  // Move .nav-item up and down
  // Execute: on hover
  let navItems = document.querySelectorAll('.nav-item');

  navItems.forEach((navItem) => {
    navItem.addEventListener('mouseenter', (event) => {
      anime({
        targets: navItem.querySelector('.nav-link'),
        translateY: -3,
        easing: 'easeOutExpo',
        duration: 400
      })
    })
    navItem.addEventListener('mouseleave', (event) => {
      anime({
        targets: navItem.querySelector('.nav-link'),
        translateY: 0,
        easing: 'easeOutExpo',
        duration: 500
      })
    })
  });

  // Move .dropdown-item right and left
  // Execute: on hover
  let ddItems = document.querySelectorAll('.dropdown-item');

  ddItems.forEach((ddItem) => {
    ddItem.addEventListener('mouseenter', (event) => {
      anime({
        targets: ddItem.querySelector('.nav-link'),
        translateX: 3,
        easing: 'easeOutExpo',
        duration: 400
      })
    })
    ddItem.addEventListener('mouseleave', (event) => {
      anime({
        targets: ddItem.querySelector('.nav-link'),
        translateX: 0,
        easing: 'easeOutExpo',
        duration: 500
      })
    })
  });
})

// Rotate .custom-logo
// Execute: on scroll
function rotateLogo() {
  let image = document.getElementsByClassName('custom-logo')[0];
  image.style.transform = "rotate(" + window.pageYOffset / 4 + "deg)";
}

window.onscroll = function () {
  rotateLogo();
};

// Expand textarea when typing
// Execurte: on linebreak
var autoExpand = function (field) {

  field.style.height = 'inherit';

  var computed = window.getComputedStyle(field);
  var height = parseInt(computed.getPropertyValue('border-top-width'), 10) +
    parseInt(computed.getPropertyValue('padding-top'), 10) +
    field.scrollHeight +
    parseInt(computed.getPropertyValue('padding-bottom'), 10) +
    parseInt(computed.getPropertyValue('border-bottom-width'), 10);

  field.style.height = height - 14 + 'px';

};

document.addEventListener('input', function (event) {
  if (event.target.tagName.toLowerCase() !== 'textarea') return;
  autoExpand(event.target);
}, false);

//=============================
//========= JQUERY ============
//=============================

(function ($) {

  // Animate form labels
  // Execure on input focus
  let formGroup = $('.wpcf7-form p');

  $('.wpcf7-form-control').focus(function () {
    $(this).parents(formGroup).addClass('focused');
  });

  $('.wpcf7-form-control').blur(function () {
    var inputValue = $(this).val();
    if (inputValue == "") {
      $(this).removeClass('filled');
      $(this).parents(formGroup).removeClass('focused');
    } else {
      $(this).addClass('filled');
    }
  })

})(jQuery);
