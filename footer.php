<?php
/**
 * The template for displaying the footer. 
 *
 * Comtains closing divs for header.php.
 *
 * For more info: https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */			
 ?>

	<?php
		$pattern = array("pattern-zigzag-lg", "pattern-diagonal-stripes-lg", "pattern-horizontal-stripes-lg", "pattern-diagonal-lines-lg", "pattern-horizontal-lines-lg", "pattern-cross-dots-lg");
		$rand_keys = array_rand($pattern);
	?>

		<footer class="site-footer">
			<div class="footer-cta">
				<div class="container">
					<h4>Funderat klart?</h4>
					Dags att ta tag i hemsidan
				</div>
			</div>
			<div class="footer-background">
				<div class="test-shadow"></div>
				<div class="test <?php echo $pattern[$rand_keys]; ?> rellax" data-rellax-speed="5"></div>
				<div class="footer-info">
				<div class="container">
					<div class="row reverse-md align-center">
						<div class="col-xs-12 col-sm-12 col-md text-center text-right-md pt-1">
							<?php get_template_part( 'parts/social', 'media' );?>
						</div>
						<div class="col-xs-12 col-sm-6 col-md text-center text-left-md pt-1">	
							<?php wp_nav_menu( array(
									'theme_location'  => 'footer',
									'container_class' => '',
									'menu_class'      => 'footer-nav',
									'items_wrap'      => '<ul class="%2$s">%3$s</ul>' ,
									'fallback_cb'     => '',
									'depth'			  => '1'
						
							)); ?>
						</div>
						<div class="col-xs-12 col-sm-6 col-md-2 text-center text-left-md pt-1">
							<?php rasande_copyright(); ?>
						</div>
					</div>
				</div>
			</div>
			</div>
			
		</footer> <!-- end .site-footer -->
		
		<?php wp_footer(); ?>
		<script>
			var rellax = new Rellax('.rellax', {
  
  bottom: true,
  wrapper: '.footer-background'
});
		</script>
	</body>
	
</html> <!-- end page -->
