<?php
/**
 * The front page file
 *
 */

get_header(); ?>
			<?php get_template_part( 'parts/hero' ) ?>
	<div class="site-content">
	
		    <main class="main">
                <div class="grid-container">
                <?php if (have_posts()) : 

                    while (have_posts()) : the_post(); ?>


                                <?php the_content(); ?>
                

                    <?php endwhile; ?>	
                    
				<?php endif; ?>
                </div>
		    </main> 

	</div> 

<?php get_footer(); ?>
