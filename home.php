<?php
/**
 * The blog template file
 *
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header(); ?>
			
	<div class="site-content">
	
		    <main class="main">
                <div class="container">
                    <h1 class="display-1 font-weight-bold"><?php the_archive_title(); ?></h1>
                    <div class="entries">
                    <?php if (have_posts()) : 

                        while (have_posts()) : the_post(); ?>
                            <div class="entry">
                                <div class="entry-header">
                                    <h2 class="font-weight-bold"><?php the_title(); ?></h2>
                                </div>
                                <div class="entry-content">
                                    <?php the_excerpt(); ?>
                                </div>
                            </div>
                        <?php endwhile; ?>	

                        <?php endif; ?>
                    </div>

                </div>

		    </main> 

	</div> 

<?php get_footer(); ?>
