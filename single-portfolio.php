<?php

/**
 * Template for single view of CPT: portfolio
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
        // Show similar portfolio items with the same tags
        $thePost = $post;
        global $post;
        $tags = wp_get_post_tags($post->ID);

        if ($tags) :

            // Save tags in an array
            $tagIDs = array();
            foreach ($tags as $tag) $tagIDs[] = $tag->term_id;

            // Arguments for query
            $args = array(
                'post_type' => 'portfolio',
                'tag__in' => $tagIDs,
                'post__not_in' => array($post->ID),
                'posts_per_page' => 3,
                'orderby' => 'rand',
                'order' => 'ASC',
                'ignore_sticky_posts' => 1
            );
            $query = new wp_query($args);

            // Echo markup if posts has tags
            if ($query->have_posts()) :
                echo '<section class="related-posts"><div class="container">';
                echo '<h3 class="bold">' . __('Related projects', 'rasande') . '</h3>';
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
            endif;
        endif;

        // Reset query
        $post = $thePost;
        wp_reset_query(); ?>

    </aside>
</div>

<?php get_footer(); ?>
