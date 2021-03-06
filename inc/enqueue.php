<?php
/**
 * Enqueue scipts and styles
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'rasande_scripts' ) ) {

	function rasande_scripts() {

        // Load syles
		wp_enqueue_style( 'rasande-styles', get_template_directory_uri() . '/assets/css/style.css', array(), '1.0.0' );

        // Load scripts
        wp_register_script('anime', get_template_directory_uri() . '/assets/js/vendor/anime.min.js', array(), false, true);
        wp_enqueue_script('anime');

        wp_register_script('isotope', get_template_directory_uri() . '/assets/js/vendor/isotope.pkgd.js', array('jquery'), false, true);
        wp_enqueue_script('isotope');

        wp_register_script('waypoints', get_template_directory_uri() . '/assets/js/vendor/noframework.waypoints.min.js', array(), false, true);
        wp_enqueue_script('waypoints');

        wp_enqueue_script( 'rasande-scripts', get_template_directory_uri() . '/assets/js/script.js', array('jquery'), '1.0.0', true );
        
		if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
			wp_enqueue_script( 'comment-reply' );
        }
        
    }
    add_action( 'wp_enqueue_scripts', 'rasande_scripts' );
} 

	// Load editor styles
add_action( 'enqueue_block_editor_assets', function() {
    wp_enqueue_style( 'editor', get_stylesheet_directory_uri() . '/assets/css/editor-style.css', false, '1.0', 'all' );
} );
