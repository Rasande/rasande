<?php
/**
 * The single page template
 *
 */

get_header(); ?>
			
	<div class="site-content">
	
		    <main class="main">
		    
                <?php if (have_posts()) : 

                    while (have_posts()) : the_post(); ?>

                        <?php get_template_part( 'parts/page', 'banner' ); ?>

                        <div class="entry-content">
                                <?php the_content(); ?>
                        </div>

                    <?php endwhile; ?>	
                    
				<?php endif; ?>
																								
		    </main> 

	</div> 

<?php get_footer(); ?>
