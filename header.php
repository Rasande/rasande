<?php

/**
 * The template for displaying the header
 *
 */
?>

<!DOCTYPE html>
<html <?php language_attributes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes">
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<link rel="profile" href="http://gmpg.org/xfn/11">
	<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,700;1,400;1,500;1,700&display=swap" rel="stylesheet">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?> itemscope itemtype="http://schema.org/WebPage">
	<?php do_action('wp_body_open'); ?>

	<header class="site-header">
		<!-- Navbar -->
		<nav class="navbar">
			<!-- Navbar brand -->
			<?php get_template_part('parts/navbar', 'brand'); ?>
			<!-- Navbar menu toggler -->
			<?php get_template_part('parts/navbar', 'toggler'); ?>
			<!-- Navbar navigation -->
			<?php wp_nav_menu(array(
				'theme_location' => 'primary',
				'container' => '',
				'menu_class' => 'navbar-nav',
				'depth' => 0,
				'walker' => new Rasande_WP_Navwalker(),
				'fallback_cb' => '',
				'depth' => '2'
			)); ?>

		</nav>
	</header>
