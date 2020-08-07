<?php

/**
 *  Template name: Narrow
 *
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<div class="site-content">
    <main class="main">

        <?php if (have_posts()) :

            while (have_posts()) : the_post(); ?>
                <div class="container">
                    <?php get_template_part('parts/page', 'header'); ?>
                </div>
                <div class="container-narrow">
                    <div class="entry-content">
                        <?php the_content(); ?>
                    </div>
                </div>
            <?php endwhile; ?>

        <?php endif; ?>

    </main>

</div>

<?php get_footer(); ?>