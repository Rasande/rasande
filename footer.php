<?php
/**
 * The template for displaying the footer. 
 *
 * Comtains closing divs for header.php.
 *
 * For more info: https://developer.wordpress.org/themes/basics/template-files/#template-partials
 */			
 ?>

		<footer class="site-footer">

			<div class="footer-cta">
				<div class="container">
					<div class="row">
						<div class="footer-cta-left col-xs-12 col-md-6 pt-2">
							<p class="text-center">placeholder</p>
							<p class="text-center"><a href="#" class="footer-cta-link">placeholder</a></p>
							<p class="text-center"><a href="#" class="footer-cta-link">placeholder</a></p>
						</div>
						<div class="footer-cta-right col-xs-12 col-md-6 pt-2">
							<p class="text-center">placeholder</p>
							<p class="text-center"><a href="#" class="footer-cta-link">placeholder</a></p>
						</div>
					</div>
				</div>
			</div>
			<div class="footer-info">
				<div class="container">
					<div class="row">
						<div class="col-xs-12 col-md-6 text-center text-left-md pt-2">
							<?php wp_nav_menu( array(
								'theme_location'  => 'footer',
								'conter_class' => '',
								'menu_class'      => 'footer-nav',
								'items_wrap'      => '<ul class="%2$s">%3$s</ul>' ,
								'fallback_cb'     => '',
								'depth'			  => '1'
							)); ?>
						</div>
						<div class="col-xs-12 col-md-6 text-center text-right-md pt-2">
							<?php get_template_part( 'parts/social', 'media' );?>
						</div>
						<div class="col-xs-12 text-center pt-2 color-gray-500">
							<?php rasande_copyright(); ?>
						</div>
					</div>
				</div>
			</div>
		</footer> <!-- end .site-footer -->
		
		<?php wp_footer(); ?>
		
	</body>
	
</html> <!-- end page -->
