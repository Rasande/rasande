<?php 
/**
 * Custom logo part.
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

    $svgPath = get_template_directory_uri() . '/assets/img/logo.svg';
    echo '<a class="navbar-brand" rel="home" href="' . esc_url( home_url( '/' ) ) . '" title="' . esc_attr( get_bloginfo( 'name', 'display' ) ) . '" itemprop="url">';
    echo file_get_contents($svgPath);
    echo '</a>';
    