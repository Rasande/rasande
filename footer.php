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

				<div class="grid-container">
					<div class="grid-x">
						<div class="cell auto">
							<div class="copyright">
								<?php if( get_field('copyright_info','option') ): ?>
									<?php $copyright = get_field('copyright_info','option'); ?>
										<p class="copyright-info">
										&copy; <?php echo date("Y"); ?> <?php echo $copyright ?>
										</p>
								<?php endif; ?>
							</div>
						</div>
						<div class="cell auto">

						</div>
					</div>
					
				</div>
				</footer> <!-- end .footer -->
		
		<?php wp_footer(); ?>
		
	</body>
	
</html> <!-- end page -->
