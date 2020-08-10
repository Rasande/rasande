<?php

/**
 * Template name: Start
 *
 *  A template for a custom frontpage
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<div class="site-content pt-0">
    <main class="main">

        <?php if (have_posts()) :
            while (have_posts()) : the_post(); ?>
                <article class="entry">

                    <!-- Hero -->
                    <?php get_template_part('parts/hero'); ?>

                    <!-- Entry -->
                    <div class="container">
                        <div class="entry-content">
                            <?php the_content(); ?>
                        </div>

                    </div>
                </article>

            <?php endwhile; ?>
        <?php endif; ?>

    </main>
</div>

<?php get_footer(); ?>
