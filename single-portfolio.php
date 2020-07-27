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
                <?php get_template_part( 'parts/portfolio', 'meta' ) ?>
                </div>
            </main> 
            
            <?php 
            $thePost = $post;
            global $post;
            $tags = wp_get_post_tags($post->ID);

            if ($tags) :
                $tagIDs = array();

                foreach ($tags as $tag) $tagIDs[] = $tag->term_id;

                $args = array(
                    'post_type' => 'portfolio',
                    'tag__in' => $tagIDs,
                    'post__not_in' => array($post->ID),
                    'posts_per_page' => 3,
                    'orderby'       => 'rand',
                    'order' => 'ASC',
                    'ignore_sticky_posts' => 1
                );
                $query = new wp_query( $args );

                if ( $query->have_posts() ) :
                    echo '<div class="related-posts"><div class="container">';
                    echo '<h3 class="bold">' . __('Related projects', 'rasande') .'</h3>';
                    echo '<div class="row">';

                    while ($query->have_posts()) :
                        $query->the_post(); ?>

                        <div class="col-xs-12 col-sm-4">
                            <a href="<?php the_permalink(); ?>">
                                <div class="related-posts-item">
                                <div class="related-posts-item-content">
                                        <h2 class="name"><?php the_title();?></h2>
                                            
                                        </div>
                                    <?php if ( has_post_thumbnail() ) {
                                        the_post_thumbnail('blog-item');
                                    } else { ?>
                                    <img class="blog-item-thumbnail" src="<?php bloginfo('template_directory'); ?>/assets/img/default-blog.jpg" alt="<?php the_title(); ?>" />
                                    <?php } ?>
                                </div>
                            </a>
                        </div>

                    <?php endwhile;
                    echo '</div></div></div>';
                endif;
            endif;

        $post = $thePost;
        wp_reset_query(); ?>

	</div> 

<?php get_footer(); ?>
