<?php
/**
 * The main template file
 *
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header(); ?>
			
	<div class="site-content">
	
		    <main class="main">
                <div class="container">
                    <article class="entry">
                <?php if (have_posts()) : 

                    while (have_posts()) : the_post(); ?>

                        <?php get_template_part( 'parts/page', 'header' ); ?>

                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div>
                                
                    <?php endwhile; ?>	
                    
                <?php endif; ?>
                    </article>
                </div>
		    </main> 
            <aside class="aside">
            <?php $args = array(
                'category__in' => wp_get_post_categories( get_queried_object_id() ),
                'posts_per_page' => 3,
                'orderby'       => 'rand',
                'order' => 'ASC',
                'post__not_in' => array( get_queried_object_id() ),
                'ignore_sticky_posts' => 1
                );
    $query = new WP_Query( $args );

    if ( $query->have_posts() ) :
        echo '<div class="related-posts"><div class="container">';
        echo '<h3 class="bold">' . __('Similar posts', 'rasande') .'</h3>';
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
    endif; ?>

	</div> 
    </aside>
<?php get_footer(); ?>
