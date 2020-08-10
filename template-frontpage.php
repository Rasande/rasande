<?php
/**
 * Template name: Start
 *
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header(); ?>
			
	<div class="site-content pt-0">
		    <main class="main">
            <?php get_template_part( 'parts/hero' ); ?>
                <div class="container">
                <?php if (have_posts()) : 

                    while (have_posts()) : the_post(); ?>

                        

                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div>
                                
                    <?php endwhile; ?>	
                    
				<?php endif; ?>
                </div>
		    </main> 

	</div> 

<?php get_footer(); ?>