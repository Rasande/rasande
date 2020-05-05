jQuery(function ($) {

  var filterFns = {
    // show if number is greater than 50
    numberGreaterThan50: function() {
      var number = $(this).find('.number').text();
      return parseInt( number, 10 ) > 50;
    },
    // show if name ends with -ium
    ium: function() {
      var name = $(this).find('.name').text();
      console.log(name);
      return name.match( /kes$/ );
    
    },
    testFunc: function() {
      var attr = $(this).hasClass('webbutveckling');
      console.log(attr);
      return attr;
     
    },
    testSeo: function() {
      var attr = $(this).hasClass('seo');
      console.log(attr);
      return attr;
     
    }
  };
  
  function getHashFilter() {
    // get filter=filterName
    var matches = location.hash.match( /([^&]+)/i );
    var hashFilter = matches && matches[1];
    return hashFilter && decodeURIComponent( hashFilter ).substr(1);
  }
  
  // init Isotope
  var $grid = $('.gallery');
  
  // bind filter button click
  var $filterButtonGroup = $('.btn-filter-group');
  $filterButtonGroup.on( 'click', 'button', function() {
    var filterAttr = $( this ).attr('data-filter');
    // set filter in hash
    location.hash = '' + encodeURIComponent( filterAttr );
  });
  
  var isIsotopeInit = false;
  
  function onHashchange() {
    var hashFilter = getHashFilter();
    if ( !hashFilter && isIsotopeInit ) {
      return;
    }
    isIsotopeInit = true;
    // filter isotope
    $grid.isotope({
      itemSelector: '.gallery-item',
      layoutMode : 'masonry',
      masonry : {
        gutter : '.gallery-item-gutter'
      },
      // use filterFns
      filter: filterFns[ hashFilter ] || hashFilter
    });
    // set selected class on button
    if ( hashFilter ) {
      $filterButtonGroup.find('.selected').removeClass('selected');
      $filterButtonGroup.find('[data-filter="' + hashFilter + '"]').addClass('selected');
    }
  }
  
  $(window).on( 'hashchange', onHashchange );
  
  // trigger event handler to init Isotope
  onHashchange();
  
  

});


