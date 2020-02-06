<?php

// Adding WP functions and theme support
function rasande_theme_support() {
	
	// Setup for translation
	load_theme_textdomain( 'rasande', get_template_directory() . '/lang' );

    // Add WP Thumbnail Support
	add_theme_support( 'post-thumbnails' );
	
	// Default thumbnail size
	set_post_thumbnail_size(125, 125, true);

	// Add RSS Support
	add_theme_support( 'automatic-feed-links' );
	
	// Add Support for WP Controlled Title Tag
    add_theme_support( 'title-tag' );
	
	// Add HTML5 Support
	add_theme_support( 'html5', 
	         array( 
	         	'comment-list', 
	         	'comment-form', 
	         	'search-form', 
	         ) 
	);

	add_theme_support( 'html5', [ 'script', 'style' ] );

	add_theme_support( 'custom-logo', array(
		'height'      => 40,
		'width'       => 400,
		'flex-height' => true,
		'flex-width'  => true,
	) );
	
	// Adding post format support
	 add_theme_support( 'post-formats',
		array(
			'aside',             // title less blurb
			'gallery',           // gallery of images
			'link',              // quick link to other site
			'image',             // an image
			'quote',             // a quick quote
			'status',            // a Facebook like status update
			'video',             // video
			'audio',             // audio
			'chat'               // chat transcript
		)
    );
    
    // Add support for responsive embedded content
    add_theme_support( 'responsive-embeds' );

    // Enable blockeditor .alignwide and .alignfull support
	add_theme_support( 'align-wide' );
	
	// Header cleanup

		// Remove category feeds
		remove_action( 'wp_head', 'feed_links_extra', 3 );
		// Remove post and comment feeds
		remove_action( 'wp_head', 'feed_links', 2 );
		// Remove EditURI link
		remove_action( 'wp_head', 'rsd_link' );
		// Remove Windows live writer
		remove_action( 'wp_head', 'wlwmanifest_link' );
		// Remove index link
		remove_action( 'wp_head', 'index_rel_link' );
		// Remove previous link
		remove_action( 'wp_head', 'parent_post_rel_link', 10, 0 );
		// Remove start link
		remove_action( 'wp_head', 'start_post_rel_link', 10, 0 );
		// Remove links for adjacent posts
		remove_action( 'wp_head', 'adjacent_posts_rel_link_wp_head', 10, 0 );
		// Remove WP version
		remove_action( 'wp_head', 'wp_generator' );
		// Remove emjois
		remove_action( 'wp_head', 'print_emoji_detection_script', 7 ); 
		remove_action( 'admin_print_scripts', 'print_emoji_detection_script' ); 
		remove_action( 'wp_print_styles', 'print_emoji_styles' ); 
		remove_action( 'admin_print_styles', 'print_emoji_styles' );
}

add_action( 'after_setup_theme', 'rasande_theme_support' );


add_action('admin_init', function () {
    // Redirect any user trying to access comments page
    global $pagenow;
    
    if ($pagenow === 'edit-comments.php') {
        wp_redirect(admin_url());
        exit;
    }

    // Remove comments metabox from dashboard
    remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');

    // Disable support for comments and trackbacks in post types
    foreach (get_post_types() as $post_type) {
        if (post_type_supports($post_type, 'comments')) {
            remove_post_type_support($post_type, 'comments');
            remove_post_type_support($post_type, 'trackbacks');
        }
    }
});

// Close comments on the front-end
add_filter('comments_open', '__return_false', 20, 2);
add_filter('pings_open', '__return_false', 20, 2);

// Hide existing comments
add_filter('comments_array', '__return_empty_array', 10, 2);

// Remove comments page in menu
add_action('admin_menu', function () {
    remove_menu_page('edit-comments.php');
});

// Remove comments links from admin bar
add_action('init', function () {
    if (is_admin_bar_showing()) {
        remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
    }
});
