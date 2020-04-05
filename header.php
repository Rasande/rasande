<?php
/**
 * The template for displaying the header
 *
 * This is the template that displays all of the <head> section
 *
 */
?>

<!DOCTYPE html>
	<html <?php language_attributes(); ?>>
		<head>
			<meta charset="<?php bloginfo( 'charset' ); ?>">
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
			<meta http-equiv="X-UA-Compatible" content="IE=9;IE=10;IE=Edge,chrome=1"/>
			<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
			<link rel="profile" href="http://gmpg.org/xfn/11">
			<?php wp_head(); ?>
		</head>

		<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<?php do_action( 'wp_body_open' ); ?>

			<header class="site-header">
				<div class="navbar navbar-expand navbar-light">
				<div class="navbar-brand">
				rasande
				</div>
				</div>
			</header>
