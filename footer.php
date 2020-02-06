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
							<?php
								if( have_rows('social_media', 'option') ):
									echo '<ul class="social">';
									while ( have_rows('social_media', 'option') ) : the_row();
										$socialchannel = get_sub_field('social_channel', 'option');
										$socialurl = get_sub_field('social_url', 'option');
										$socialtag = get_sub_field('social_tag', 'option');
										echo '<li class="social-item">';
										echo '<a class="social-link" rel="nofollow noopener noreferrer" href="' . $socialurl . '" target="_blank">';
										echo '<i class="fa fa-' . $socialchannel . '" aria-hidden="true"></i>';
										//echo ucfirst($socialchannel);
										echo '</a></li>';
									endwhile;
									echo '</ul>';
								endif;
							?>
						</div>
					</div>
					
				</div>
				</footer> <!-- end .footer -->
		
		<?php wp_footer(); ?>
		
	</body>
	
</html> <!-- end page -->
