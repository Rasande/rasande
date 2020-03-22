<?php
/**
 * Theme basic setup
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'rasande_theme_support' )) {

    function rasande_theme_support() {

        // Setup for translation
        load_theme_textdomain( 'rasande', get_template_directory() . '/lang' );

        // Add Support for WP Controlled Title Tag
        add_theme_support( 'title-tag' );

        // Set up the WordPress Theme logo feature.
		add_theme_support( 'custom-logo' );

        // Add WP Thumbnail Support
        add_theme_support( 'post-thumbnails' );

        // Add image sizes
        add_image_size( 'icon', 50, 50, true );
        }

        // Add support for responsive embedded content
        add_theme_support( 'responsive-embeds' );

        // Enable blockeditor .alignwide and .alignfull support
        add_theme_support( 'align-wide' );

        // Add RSS Support
	    add_theme_support( 'automatic-feed-links' );
        
        // Add HTML5 Support
        add_theme_support( 'html5', 
            array( 
                'comment-list', 
                'comment-form', 
                'search-form',
                'gallery',
                'caption',
                'script',
                'style'
            ) 
        );

        register_nav_menus( array(
            'primary' => __( 'Primary Menu', 'rasande' ),
            'footer' => __('Footer Menu', 'rasande')
        ) );

    add_action( 'after_setup_theme', 'rasande_theme_support');
}
