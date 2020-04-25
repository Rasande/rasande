<?php
/**
 * The services template file
 *
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header(); ?>
			
	<div class="site-content">
	
		    <main class="main">
                <div class="container">
                    <h1 class="display-1 font-weight-bold"><?php the_archive_title(); ?></h1>
                </div>

		    </main> 

	</div> 

<?php get_footer(); ?>
