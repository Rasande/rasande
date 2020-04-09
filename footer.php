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
					<h4>Funderat klart?</h4>
					Dags att ta tag i hemsidan
				</div>
			</div>
			<div class="footer-animation"></div>
			<div class="footer-info small">
				<div class="container">
					<div class="row">
						<div class="col-auto">
							<?php rasande_copyright(); ?>
						</div>
						<div class="col">	
							<?php wp_nav_menu( array(
									'theme_location'  => 'footer',
									'container_class' => 'nav-container',
									'menu_class'      => 'nav-menu',
									'items_wrap'      => '<ul class="%2$s">%3$s</ul>' ,
									'fallback_cb'     => '',
									'walker'          => new Rasande_WP_Navwalker(),
							)); ?>
						</div>
						<div class="col small text-right">
							Instagram
						</div>
					</div>
				</div>
			</div>
		</footer> <!-- end .site-footer -->
		
		<?php wp_footer(); ?>
		
	</body>
	
</html> <!-- end page -->
