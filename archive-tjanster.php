<?php

/**
 * Template for archive view of CPT: tjanster
 *
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<div class="site-content">
    <main class="main">
        <section class="services">
            <div class="container">

                <!-- Entry header -->
                <?php get_template_part('parts/entry', 'header'); ?>
      
    
                <?php if (have_posts()) :
                    while (have_posts()) : the_post(); ?>

                        <article class="service-item">
                            <div class="row <?php echo $odd_or_even; $odd_or_even = ('odd' == $odd_or_even) ? 'even' : 'odd'; ?>">

                                <!-- Image column -->
                                <div class="col-xs-12 col-md-6">
                                    <div class="service-item-img slide-in-btt">
                                        <a href="<?php the_permalink(); ?>">

                                            <?php if (has_post_thumbnail()) :
                                                the_post_thumbnail('service-item');
                                             else : ?>
                                                <img src="<?php bloginfo('template_directory'); ?>/assets/img/default-blog.jpg" alt="<?php the_title(); ?>" />
                                             <?php endif; ?>

                                        </a>
                                    </div>
                                </div>

                                <!-- Text column -->
                                <div class="col-xs-12 col-md-6">
                                    <div class="service-item-content <?php echo $left_or_right; $left_or_right = ('slide-in-rtl' == $left_or_right) ? 'slide-in-ltr' : 'slide-in-rtl'; ?>">
                                        <h2 class="name"><?php the_title(); ?></h2>
                                        <?php the_excerpt(); ?>
                                        <a class="" href="<?php the_permalink(); ?>"><?php echo __('Read More', 'rasande'); ?></a>
                                    </div>
                                </div>

                            </div>
                        </article>

                    <?php endwhile; ?>
                <?php else : ?>

                    <p class="text-center color-gray-500"><?php echo __('Here it was empty, new services coming soon!', 'rasande') ?></p>

                <?php endif; ?>

            </div>
        </section>
    </main>
</div>

<?php get_footer(); ?>
