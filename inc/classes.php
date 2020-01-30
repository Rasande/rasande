<?php
/**
 * Custom functions to replace WordPress classes
 *
 * @package rasande
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

// Change attributes of custom logo
add_filter( 'get_custom_logo', 'rasande_change_logo_class' );

if ( ! function_exists( 'rasande_change_logo_class' ) ) {

	// Replaces logo CSS class.
	function rasande_change_logo_class( $html ) {
		$html = str_replace( 'alt=""', 'title="Home" alt="logo"', $html );
		return $html;
	}
}

// Set archive post prder
add_action( 'pre_get_posts', 'rasande_archive_order'); 

if ( ! function_exists( 'rasande_archive_order' ) ) {

    function rasande_archive_order($query){
        if(is_archive()):
         //If you wanted it for the archive of a custom post type use: is_post_type_archive( $post_type )
           //Set the order ASC or DESC
           $query->set( 'order', 'ASC' );
           //Set the orderby
           $query->set( 'orderby', 'menu_order' );
        endif;    
    };
    
}
