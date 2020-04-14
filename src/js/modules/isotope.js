jQuery(function ($) {

  function getHashFilter() {
    var hash = location.hash;
    // get filterName
    var matches = location.hash.match( /([^&]+)/i );
    var hashFilter = matches && matches[1];
    return hashFilter && decodeURIComponent( hashFilter ).substr(1);
  }
  
  $( function() {
  
    var $grid = $('.gallery');
  

    // bind filter button click
    var $filters = $('.btn-filter-group').on( 'click', 'button', function() {
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
        filter: hashFilter
      });


      // set selected class on button
      if ( hashFilter ) {
        $filters.find('.selected').removeClass('selected');
        $filters.find('[data-filter="' + hashFilter + '"]').addClass('selected');
      }
    }
  

    $(window).on( 'hashchange', onHashchange );
    // trigger event handler to init Isotope
    onHashchange();

  });
    
});
