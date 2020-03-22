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
				<div class="grid-container fluid">
					<div class="grid-x align-center-middle no-wrap">

						<div class="cell auto">
							<div class="brand">
								<?php get_template_part( 'parts/navbar-logo' ) ?>
							</div>
						</div>
						<div class="cell shrink">
							<nav class="navigation">
								<?php wp_nav_menu(
									array(
										'theme_location'  => 'primary',
										'container_class' => 'nav-container',
										'menu_class'      => 'nav-menu',
										'items_wrap'      => '<ul class="%2$s">%3$s</ul>' ,
										'fallback_cb'     => '',
										'walker'          => new Rasande_WP_Navwalker(),
									)
								); ?>
							</nav>
						</div>
						<div class="cell shrink hide-lg">
							<?php get_template_part( 'parts/navbar', 'toggle' ); ?>
						</div>
					</div>
				</div>
			</header>
