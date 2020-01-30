(function($) {

    // Variables
    let $window = $(window);
    let lastWindowWidth = $window.width();
    let toggle = $( '.nav-toggle' );
    let navigation = $( '.navigation' );
    let dropdown = $( '.dropdown-menu' );
    let dropdownBtn = $( '.dropdown-btn' );

    // Functions
    function toggleMenu() {
        $(navigation).toggleClass( 'open' );
        $(toggle).toggleClass( 'is-active' );
    }

    function closeAllDropdowns() {
        if ($(dropdown).hasClass( 'show' )) {
            $(dropdown).removeClass( 'show' );
        }
        if ($(dropdownBtn).hasClass( 'toggled' )) {
            $(dropdownBtn).removeClass( 'toggled' );
        }
        $(dropdown).attr( "style", " " );
        $(navigation).attr( "style", " " );
        $(toggle).removeClass( 'is-active' );
    }

    // Open mobile menu
    $(toggle).click(function(e) {
        e.preventDefault(); 

        toggleMenu();

    });

    // Open dropdown menus
    $(dropdownBtn).click(function(e) {
        e.preventDefault(); 

        var $this = $(this);

        // Add / remove .toggled from dropdown button
		if ($this.hasClass( 'toggled' )) {
			$this.removeClass( 'toggled' );
		} else {
			$this.parent().parent().find( '.dropdown-btn' ).removeClass( 'toggled' );
			$this.toggleClass( 'toggled' );
		}

        // Add / remove .show from dropdown-menu
        if ($this.next().hasClass( 'show' )) {
            $this.next().removeClass( 'show' );
            $this.next().slideUp( 350 );
            $this.parent().parent().find( '.dropdown-menu' ).removeClass( 'show' );
            $this.parent().parent().find( '.dropdown-menu' ).slideUp( 350 );

        } else {
            $this.parent().parent().find( '.dropdown-menu' ).removeClass( 'show' );
			$this.parent().parent().find( '.dropdown-menu' ).slideUp( 350 );
			$this.next().toggleClass( 'show' );
            $this.next().slideToggle( 350 );
        }
    });

    // Close and reset on window width change
    $window.resize(function () {

        var windowWidth = $window.width();

        if (lastWindowWidth !== windowWidth) {

                if ($(navigation).hasClass( 'open' )) {
                    toggleMenu();
                }
                
                closeAllDropdowns();
                $(navigation).removeAttr( 'style' );
        }
    });

    // Change header color on scroll
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 60) {
            $(".site-header").addClass("active");
        } else {
            //remove the background property so it comes transparent again (defined in your css)
           $(".site-header").removeClass("active");
        }
    });

})( jQuery );