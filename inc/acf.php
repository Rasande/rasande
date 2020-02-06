<?php

if( class_exists('ACF') ) :
	
	acf_add_options_page(array(
		'page_title' 	=> __('Theme settings'),
		'menu_title'	=> __('Theme settings'),
		'menu_slug' 	=> 'global-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false,
		'icon_url'		=> 'dashicons-carrot'
	));
	
endif;
