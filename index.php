<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 */

get_header(); ?>
			
	<div>
	
		<div>

		    <main>
		    
				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>

							<?php get_template_part( 'parts/loop', 'archive' ); ?>

				<?php endwhile; ?>	
					
				<?php else : ?>
											
					<?php get_template_part( 'parts/content', 'missing' ); ?>
						
				<?php endif; ?>
																								
		    </main> 

		</div> 

	</div> 

<?php get_footer(); ?>
