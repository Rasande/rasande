(function($) {

    let dropdown = $('li.dropdown');

    dropdown.hover(function(e) {

        e.preventDefault(); 
        var $this = $(this);

        $this.toggleClass('hover');
    });
      
})( jQuery );
