<?php

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if( class_exists('ACF') ) :
	
	// Register settings page

	acf_add_options_page(array(
		'page_title' 	=> __('Theme settings', 'rasande'),
		'menu_title'	=> __('Theme settings', 'rasande'),
		'menu_slug' 	=> 'global-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
		'icon_url'		=> 'dashicons-carrot'
	));
	
	// Fields

	$acf_includes = array(
		'/footer-fields.php',
		'/page-fields.php',
		'/social-media-fields.php'
	);

	foreach ( $acf_includes as $file ) {
		$filepath = locate_template( 'inc/fields' . $file );

		if ( ! $filepath ) {
			trigger_error( sprintf( 'Error locating /fields%s for inclusion', $file ), E_USER_ERROR );
		}
		
		require_once $filepath;
	}

endif;
