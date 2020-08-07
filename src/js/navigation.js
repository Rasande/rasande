(function($) {

    let $window = $(window);
    let lastWindowWidth = $window.width();
    let toggle = $( '.navbar-toggler' );
    let header = $( '.site-header' );
    let navigation = $( '.navbar-nav' );
    let dropdownBtn = $( '.dropdown-btn' );
    let dropdown = $( '.dropdown-menu' );

    // Functions
    function toggleMenu() {
        // Toggle .open to .navbar-nav
        $(navigation).toggleClass( 'is-open' );
        // Toggle .is-active to the hamburger icon
        $(toggle).toggleClass( 'is-active' );
        // Toggle .is-active on site-header
        $(header).toggleClass( 'expanded' );
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

                if ($(navigation).hasClass( 'is-open' )) {
                    toggleMenu();
                }
                
                closeAllDropdowns();
                $(navigation).removeAttr( 'style' );
        }
    });
      
})( jQuery );
