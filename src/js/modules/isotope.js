jQuery(function ($) {

  var $grid = $('.gallery').isotope({
    itemSelector: '.gallery-item',
    layoutMode: 'masonry',
    masonry : {
      gutter: '.gallery-item-gutter',
    }
  });
  // filter functions

  // bind filter button click
  $('.btn-filter-group').on( 'click', 'button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    $grid.isotope({ filter: filterValue });
  });
  // change selected class on buttons
  $('.btn-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', 'button', function() {
      $buttonGroup.find('.selected').removeClass('selected');
      $( this ).addClass('selected');
    });
  });
});
