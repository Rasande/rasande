<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header(); ?>
			
	<div class="site-content">
		    <main class="main">
                <div class="container">
                <?php if (have_posts()) : 

                    while (have_posts()) : the_post(); ?>

                        <?php get_template_part( 'parts/page', 'header' ); ?>

                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div>
                                
                    <?php endwhile; ?>	
                    
				<?php endif; ?>
                </div>
		    </main> 

	</div> 

<?php get_footer(); ?>
