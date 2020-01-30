<?php
/**
 * Rasande functions and definitions
 *
 * @package rasande
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$rasande_includes = array(
	'/theme-setup.php',
	'/enqueue.php',
	'/navigation.php',
	'/nav-walker.php',
	'/widgets.php',
	'/plugins.php',
	'/classes.php',
	'/options.php',
	'/admin.php'
);

foreach ( $rasande_includes as $file ) {
	$filepath = locate_template( 'inc' . $file );

	if ( ! $filepath ) {
		trigger_error( sprintf( 'Error locating /inc%s for inclusion', $file ), E_USER_ERROR );
	}
	
	require_once $filepath;
}
