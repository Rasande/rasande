<?php

/**
 * The blog template file
 *
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<div class="site-content">
    <main class="main">
        <section class="blog">
            <div class="container">

                <!-- Entry header -->
                <?php get_template_part('parts/entry', 'header'); ?>

                <div class="row">
                    <?php if (have_posts()) :

                        // Arguments for query
                        $args = array(
                            'paged' => (get_query_var('paged') ? get_query_var('paged') : 1),
                            'post_status' => 'publish',
                            'post_type' => 'post',
                            'orderby' => 'post_date',
                        );
                        query_posts($args);

                        while (have_posts()) : the_post(); ?>

                            <!-- Blog item -->
                            <div class="col-xs-12 col-sm-6 col-md-4 slide-in-btt">
                                <article class="blog-item">
                                    <a class="blog-item-link" href="<?php the_permalink(); ?>">

                                        <?php if (has_post_thumbnail()) :
                                            the_post_thumbnail('blog-item');
                                        else : ?>

                                            <img class="blog-item-thumbnail" src="<?php bloginfo('template_directory'); ?>/assets/img/default-blog.jpg" alt="<?php the_title(); ?>" />

                                        <?php endif; ?>

                                        <div class="blog-item-info">
                                            <h2 class="bold"><?php the_title(); ?></h2>
                                            <span class="blog-date"><?php echo get_the_date('d/m Y') ?></span>
                                        </div>

                                    </a>
                                </article>
                            </div>
                        <?php endwhile; ?>

                    <?php else : ?>
                        <!-- No post fallback -->
                        <div class="col-xs-12">
                            <p class="text-center color-gray-500"><?php echo __('Here it was empty, new posts coming soon!', 'rasande') ?></p>
                        </div>
                    <?php endif; ?>
                </div>

                <!-- Pagination -->
                <nav class="pagination">
                    <span class="pagination-prev"><?php previous_posts_link(); ?></span>
                    <span class="pagination-next"><?php next_posts_link(); ?></span>
                </nav>

            </div>
        </section>
    </main>
</div>

<?php get_footer(); ?>
