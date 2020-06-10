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
if ( ! function_exists( 'rasande_change_logo_class' ) ) {
	// Replaces logo CSS class.
	function rasande_change_logo_class( $html ) {
		$html = str_replace( 'class="custom-logo"', 'class="custom-logo" id="rotate--scroll"', $html );
		$html = str_replace( 'class="custom-logo-link"', 'class="navbar-brand custom-logo-link"', $html );
		$html = str_replace( 'alt=""', 'title="Home" alt="logo"', $html );

		return $html;
    }
    add_filter( 'get_custom_logo', 'rasande_change_logo_class' );
}

// Set archive post prder
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
    add_action( 'pre_get_posts', 'rasande_archive_order'); 
}

// Fix svg size attributes
if ( ! function_exists( 'rasande_svg_attr' ) ) {

    function rasande_svg_attr( $out, $id ) {
        $image_url  = wp_get_attachment_url( $id );
        $file_ext   = pathinfo( $image_url, PATHINFO_EXTENSION );

        if ( is_admin() || 'svg' !== $file_ext ) {
            return false;
        }

        return array( $image_url, null, null, false );
    }
    add_filter( 'image_downsize', 'rasande_svg_attr', 10, 2 ); 
}

// Odd or even
$odd_or_even = 'odd';

// Add class to paragraph block
function wph_add_class_for_p_tag($content) {
    $content = str_replace('<p>', '<p class="wp-block-paragraph">', $content);
    return $content;
}

add_filter('the_content', 'wph_add_class_for_p_tag', 9999);
add_filter('the_excerpt', 'wph_add_class_for_p_tag', 9999);