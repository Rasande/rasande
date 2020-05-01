<?php
/**
 * Widgets area setup
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'rasande_widgets_init' )) {

    function rasande_widgets_init() {
        register_sidebar( array(
            'name' => __( 'Blog Sidebar', 'rasande' ),
            'id' => 'blog-sidebar',
            'before_widget' => '<div>',
            'after_widget' => '</div>',
            'before_title' => '<h3>',
            'after_title' => '</h3>',
        ) );
        register_sidebar( array(
            'name' => __( 'Footer 1', 'rasande' ),
            'id' => 'footer-1',
            'before_widget' => '<div>',
            'after_widget' => '</div>',
            'before_title' => '<h3>',
            'after_title' => '</h3>',
        ) );
    }
    add_action( 'widgets_init', 'rasande_widgets_init' );
}
