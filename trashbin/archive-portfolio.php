<?php
/**
 * 
 *
 */

get_header(); ?>

<div class="portfolio">
    <?php
        if ( get_query_var( 'paged' ) ) :
            $paged = get_query_var( 'paged' );
        elseif ( get_query_var( 'page' ) ) :
            $paged = get_query_var( 'page' );
        else :
            $paged = -1;
        endif;
    
        $args = array(
            'post_type'      => 'portfolio',
            'paged'          => $paged,
        );
        $project_query = new WP_Query ( $args );
        if ( post_type_exists( 'portfolio' ) && $project_query -> have_posts() ) :
            while ( $project_query -> have_posts() ) : $project_query -> the_post();
                
                get_template_part( 'parts/content', 'portfolio' ); // Your portfolio content goes here.
                
            endwhile;
            wp_reset_postdata();
        else : ?>
            <p>Whoops! No portfolio items.</p>
    <?php endif; ?>
        </div>

<?php get_footer(); ?>