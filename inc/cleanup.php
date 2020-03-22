<?php
/**
 * Cleaning up the mess
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'rasande_cleaning' ) ) {

	function rasande_cleaning() {

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
        
        // Close comments on the front-end
        add_filter('comments_open', '__return_false', 20, 2);
        add_filter('pings_open', '__return_false', 20, 2);

        // Hide existing comments
        add_filter('comments_array', '__return_empty_array', 10, 2);

    }
    add_action( 'after_setup_theme', 'rasande_cleaning' );
} 

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

// Remove comments
if ( ! function_exists( 'filter_media_comment_status' ) ) {
	function filter_media_comment_status( $open, $post_id ) {
		$post = get_post( $post_id );
		if( $post->post_type == 'attachment' ) {
			return false;
		}
		return $open;
	}
	add_filter( 'comments_open', 'filter_media_comment_status', 10 , 2 );
}

// Remove default favicon
if ( ! function_exists( 'remove_styles_sections' ) ) {
	function remove_styles_sections($wp_customize) {

		$wp_customize->add_setting( 'site_icon' , array(
			'default'     => 'assets/img/favicon.png',
		) );
	}
	add_action( 'customize_register', 'remove_styles_sections', 20, 1 );  
}
