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
			<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
			<meta http-equiv="X-UA-Compatible" content="IE=9;IE=10;IE=Edge,chrome=1"/>
			<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
			<link rel="profile" href="http://gmpg.org/xfn/11">
			<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&display=swap" rel="stylesheet">
			<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet">
			<?php wp_head(); ?>
		</head>

		<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
		<?php do_action( 'wp_body_open' ); ?>

			<header class="site-header">
				<nav class="navbar">
						<?php get_template_part( 'parts/navbar', 'brand' ); ?>
						<?php get_template_part( 'parts/navbar', 'toggler' ); ?>
					<?php wp_nav_menu( array( 
						'theme_location' => 'primary', 
						'container' => '',
						'menu_class' => 'navbar-nav',
						'depth' => 0,
						'walker' => new Rasande_WP_Navwalker(),
						'fallback_cb' => '',
						'depth' => '2'
						 ) 
					); ?>

				</nav>
			</header>
