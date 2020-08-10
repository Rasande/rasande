<?php

/**
 * Template file for single posts
 *
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<div class="site-content">
    <main class="main">

        <?php if (have_posts()) :
            while (have_posts()) : the_post(); ?>

                <article class="entry">
                    <div class="container">

                        <!-- Entry header -->
                        <?php get_template_part('parts/entry', 'header'); ?>

                        <!-- Entry content -->
                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div>

                    </div>
                </article>

            <?php endwhile; ?>
        <?php endif; ?>

    </main>

    <!-- Related posts -->
    <aside class="aside">

        <?php 
        // Arguments for query
        $args = array(
            'category__in' => wp_get_post_categories(get_queried_object_id()),
            'posts_per_page' => 3,
            'orderby' => 'rand',
            'order' => 'ASC',
            'post__not_in' => array(get_queried_object_id()),
            'ignore_sticky_posts' => 1
        );
        $query = new WP_Query($args);

        // Echo markup if posts has tags
        if ($query->have_posts()) :
            echo '<section class="related-posts"><div class="container">';
            echo '<h3 class="bold">' . __('Similar posts', 'rasande') . '</h3>';
            echo '<div class="row">';

            // The posts
            while ($query->have_posts()) :
                $query->the_post(); ?>

                <div class="col-xs-12 col-sm-4">
                    <a href="<?php the_permalink(); ?>">
                        <article class="related-posts-item">

                            <?php if (has_post_thumbnail()) :

                                the_post_thumbnail('blog-item');

                             else : ?>

                                <img class="blog-item-thumbnail" src="<?php bloginfo('template_directory'); ?>/assets/img/default-blog.jpg" alt="<?php the_title(); ?>" />

                             <?php endif; ?>

                            <div class="related-posts-item-content">
                                <h4 class="name bold"><?php the_title(); ?></h4>
                            </div>

                        </article>
                    </a>
                </div>

        <?php endwhile;
            // Close of the markup
            echo '</div></div></section>';
        endif; ?>

    </aside>
</div>

<?php get_footer(); ?>
