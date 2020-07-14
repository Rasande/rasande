<?php

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

function rasande_block_categories( $categories, $post ) {

    return array_merge(
        $categories,
        array(
            array(
                'slug' => 'customblocks',
                'title' => __( 'Custom Blocks', 'rasande' )
            ),
        )
    );
}
add_filter( 'block_categories', 'rasande_block_categories', 10, 2 );
