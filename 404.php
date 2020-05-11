<?php
/**
 * 
 *
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header(); ?>
			
	<div class="site-content">
		    <main class="main">
                <div class="container">
	<?php get_template_part( 'parts/page', 'header' ); ?>

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