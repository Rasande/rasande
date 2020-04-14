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
        wp_register_script('isotope', 'https://unpkg.com/isotope-layout@3/dist/isotope.pkgd.min.js');
        wp_enqueue_script('isotope');

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
