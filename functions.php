<?php
/**
 * Functions, setups and definitions
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

$rasande_includes = array(
	'/setup.php',
	'/cleanup.php',
	'/enqueue.php',
	'/nav-walker.php',
	'/classes.php',
	'/hooks.php',
	'/widgets.php',
	'/acf.php',
	'/editor.php',
	'/acf-blocks.php',
	'/admin.php'
);

foreach ( $rasande_includes as $file ) {
	$filepath = locate_template( 'inc' . $file );

	if ( ! $filepath ) {
		trigger_error( sprintf( 'Error locating /inc%s for inclusion', $file ), E_USER_ERROR );
	}
	
	require_once $filepath;
}
