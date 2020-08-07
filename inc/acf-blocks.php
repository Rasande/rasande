<?php

/**
 * ACF Blocks
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

function register_acf_block_types() {

    // register a ingress block.
    acf_register_block_type(array(
    'name'              => 'social_icons',
    'title'             => __('Social Icons'),
    'description'       => __('Display social media icons.'),
    'render_template'   => '/inc/blocks/social-media-block.php', // Ändra till blocks mappen
    'category'          => 'customblocks',
    'icon'              => 'admin-comments',
    'keywords'          => array( 'ingress', 'start' ),
    ));
}

// Check if function exists and hook into setup.
if( function_exists('acf_register_block_type') ) {
    add_action('acf/init', 'register_acf_block_types');
}
