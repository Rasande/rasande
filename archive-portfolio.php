<?php

/**
 * Template for archive view of CPT: portfolio
 *
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<div class="site-content">
    <main class="main">
        <section class="portfolio">

            <!-- Entry header -->
            <div class="container">
                <?php get_template_part('parts/entry', 'header'); ?>
            </div>

            <div class="container-fluid">

                <!-- Gallery filter -->
                <div class="gallery-filter">

                    <?php 
                    // Get all terms of a taxonomy
                    $taxonomy = 'portfolio_category';
                    $terms = get_terms($taxonomy); 

                    if ($terms && !is_wp_error($terms)) :
                    ?>
                        <div class="btn-group btn-filter-group" role="group" aria-label="<?php __('Filter cases', 'rasande') ?>">
                            <?php // All projects button ?>
                            <button type="button" class="btn btn-link btn-filter selected" data-filter="*"><?php echo __('All', 'rasande'); ?></button>
                            
                            <?php // Loop terms
                            foreach ($terms as $term) : 

                                // Turn terms into classes
                                $filterData = '.';
                                $filterData .= str_replace(' ', '-', $term->name);
                                // Output button for each term ?>
                                
                                <button type="button" class="btn btn-link btn-filter" data-filter="<?php echo strtolower($filterData); ?>"><?php echo $term->name; ?></button>
                            <?php endforeach; ?>

                        </div>
                    <?php endif; ?>

                </div>
                <!-- Gallery -->
                <div class="gallery slide-in-btt">
                    <div class="gallery-item-gutter"></div>
                    <div class="gallery-item-sizer"></div>

                    <?php if (have_posts()) :
                        while (have_posts()) : the_post(); 

                            $categories = get_the_terms($post->ID, 'portfolio_category');
                            $output = '';

                            // Save post categories as variable
                            if (!empty($categories)) :
                                foreach ($categories as $category) :
                                    $output .= strtolower(str_replace(' ', '-', $category->name));
                                    $output .= ' ';
                                endforeach;
                            endif;
                            
                            // Output post if it has a thumbnail
                            if (has_post_thumbnail()) : ?>
                                <article class="gallery-item <?php echo trim($output); ?>">
                                    <div class="gallery-item-inner">

                                        <a href="<?php the_permalink(); ?>">
                                            <?php the_post_thumbnail('medium_large'); ?>
                                            <div class="gallery-item-content">
                                                <h2 class="name bold"><?php the_title(); ?></h2>
                                                <span class="blog-date">
                                            </div>
                                        </a>

                                    </div>
                                </article>
                            <?php endif; ?>

                        <?php endwhile; ?>
                    <?php else : ?>

                        <p class="text-center color-gray-500"><?php echo __('Here it was empty, new projects coming soon!', 'rasande') ?></p>

                    <?php endif; ?>

                </div>
            </div>
        </section>
    </main>

</div>

<?php get_footer(); ?>
