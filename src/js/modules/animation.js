document.addEventListener('DOMContentLoaded', () => {

  // Slide in content bottom to top
  // Execute: on scroll
  let slideInTop = document.getElementsByClassName('slide-in-btt');

  if (slideInTop) {
    for (var i = 0; i < slideInTop.length; i++) {
      new Waypoint({
        element: slideInTop[i],
        handler: function () {
          anime({
            targets: this.element,
            opacity: [0, 1],
            translateY: [200, 0],
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

  // Slide in content top to bottom
  // Execute: on scroll
  let slideInBottom = document.getElementsByClassName('slide-in-ttb');

  if (slideInBottom) {
    for (var i = 0; i < slideInBottom.length; i++) {
      new Waypoint({
        element: slideInBottom[i],
        handler: function () {
          anime({
            targets: this.element,
            opacity: [0, 1],
            translateY: [-200, 0],
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
            translateX: [-200, 0],
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
            translateX: [200, 0],
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
    translateY: [-200, 0],
    opacity: [0, 1],
    easing: 'easeOutExpo'
  })

  // Drop the zero in 404
  // Execute: on load
  anime({
    targets: '.four-zero-four:nth-of-type(2)',
    rotate: '.1turn',
    translateY: '25',
    duration: 2000,
    easing: 'spring(1, 80, 2, 0)',
    delay: 1000
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
  if (block && title && titleContainer) {
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
  if (leadBlock && lead && leadContainer) {
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

  // Move .social-link up and down
  // Execute: on hover
  let socialItems = document.querySelectorAll('.social-item');

  socialItems.forEach((socialItem) => {
    socialItem.addEventListener('mouseenter', (event) => {
      anime({
        targets: socialItem.querySelector('a'),
        translateY: -3,
        easing: 'easeOutExpo',
        duration: 400
      })
    })
    socialItem.addEventListener('mouseleave', (event) => {
      anime({
        targets: socialItem.querySelector('a'),
        translateY: 0,
        easing: 'easeOutExpo',
        duration: 500
      })
    })
  });

  // Move .social-link up and down
  // Execute: on hover
  let footerItems = document.querySelectorAll('.footer-nav .menu-item');

  footerItems.forEach((footerItem) => {
    footerItem.addEventListener('mouseenter', (event) => {
      anime({
        targets: footerItem.querySelector('a'),
        translateY: -3,
        easing: 'easeOutExpo',
        duration: 400
      })
    })
    footerItem.addEventListener('mouseleave', (event) => {
      anime({
        targets: footerItem.querySelector('a'),
        translateY: 0,
        easing: 'easeOutExpo',
        duration: 500
      })
    })
  });


// Change color on logo
// Execute: on hover

let svgPaths = document.querySelectorAll('.navbar-brand svg path');

let primaryColor = getComputedStyle(document.documentElement).getPropertyValue('--primary');
let secondaryColor = getComputedStyle(document.documentElement).getPropertyValue('--secondary');

let colors = [primaryColor, secondaryColor , primaryColor, secondaryColor , primaryColor, primaryColor, secondaryColor ];

svgPaths.forEach((function (svgPath, i) {

  svgPath.addEventListener('mouseenter', (event) => {
 anime({
      targets: svgPath,
      fill: [
        { value: colors[i], duration: 800, delay: 0, easing: 'easeOutExpo' },
        { value: '#212529', duration: 1600, delay: 0, easing: 'easeInOutExpo' }
      ],
    })
  });
}));


// Draw footer logo
// Execute: on scroll
let drawsvg = document.getElementsByClassName('footer-brand');

if (drawsvg) {
  for (var i = 0; i < drawsvg.length; i++) {
    new Waypoint({
      element: drawsvg[i],
      handler: function () {
        anime({
          targets: '.footer-brand svg path',
          keyframes: [
            { strokeDashoffset: [anime.setDashoffset, 0], duration: 1000, easing: 'linear', delay: anime.stagger(400, {from: 'center'})},
            { fill: '#fff', duration: 3000, easing: 'easeOutExpo'}
          ],
     
          direction: 'normal',
          opacity: 1,
        });
        this.destroy();
      },
      offset: 'bottom-in-view'
    })
  }
}

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
