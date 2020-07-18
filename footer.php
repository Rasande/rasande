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
			<!-- Footer Call to Action -->
			<div class="footer-cta">
				<div class="container">
					<div class="row">
						<div class="footer-cta-left col-xs-12 col-md-6 pt-2">

							<?php 	if( have_rows('footer_content', 'option') ):
								while ( have_rows('footer_content', 'option') ) : the_row();
						
									$leftCol = get_sub_field('left_col', 'option');
									echo $leftCol; 
							
								endwhile;
							endif; ?>

						</div>
						<div class="footer-cta-right col-xs-12 col-md-6 pt-2">
							
							<?php 	if( have_rows('footer_content', 'option') ):
								while ( have_rows('footer_content', 'option') ) : the_row();
						
									$rightCol = get_sub_field('right_col', 'option');
									echo $rightCol; 
							
								endwhile;
							endif; ?>

						</div>
					</div>
				</div>
			</div>
			<!-- Footer Information -->
			<div class="footer-info">
				<div class="container">
					<div class="row">
						<!-- Footer Menu -->
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
						<!-- Social Media -->
						<div class="col-xs-12 col-md-6 text-center text-right-md pt-2">
							<?php get_template_part( 'parts/social', 'media' );?>
						</div>
						<!-- Logotype -->
						<div class="footer-brand pt-3">
						<?php 
						    $svgPath = get_template_directory_uri() . '/assets/img/logo-outline.svg';

							echo file_get_contents($svgPath);

						?>
						</div>
						<!-- Copyright Information -->
						<div class="col-xs-12 text-center color-gray-500">
							<?php rasande_copyright(); ?>
						</div>
					</div>
				</div>
			</div>
		</footer>
		
		<?php wp_footer(); ?>
		
	</body>
	
</html> <!-- end page -->
