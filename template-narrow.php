<?php

/**
 *  Template name: Narrow
 * 
 *  A template with a narrow content container
 *
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<div class="site-content">
    <main class="main">

        <?php if (have_posts()) :
            while (have_posts()) : the_post(); ?>

                <!-- Entry -->
                <article class="entry">

                    <div class="container">
                        <!-- Entry header -->
                        <?php get_template_part('parts/entry', 'header'); ?>
                    </div>

                    <div class="container-narrow">
                        <!-- Entry content -->
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
