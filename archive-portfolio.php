<?php
/**
 * The case template file
 *
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header(); ?>
			
	<div class="site-content">
	
		    <main class="main">
            <div class="container">
            <?php get_template_part( 'parts/page', 'header' ); ?>
            <div class="gallery-filter">
                    
                    <?php

                        $taxonomy = 'portfolio_category';
                        $terms = get_terms($taxonomy); // Get all terms of a taxonomy

                        if ( $terms && !is_wp_error( $terms ) ) :
                        ?>
                            <div class="btn-group btn-filter-group" role="group" aria-label="<?php __('Filter cases', 'rasande') ?>">
                                <button type="button" class="btn btn-link btn-filter selected" data-filter="*"><?php echo __('All', 'rasande'); ?></button>


                                <?php foreach ( $terms as $term ) { ?>

                                    <?php 
                                    $filterData = '.';
                                    $filterData .= $term->name; ?>

                                    <button type="button" class="btn btn-link btn-filter" data-filter="<?php echo strtolower($filterData); ?>"><?php echo $term->name; ?></button>
                                <?php } ?>
                            </div>
                        <?php endif;?>

                    </div>
        </div>
                <div class="container-wide">
             



                    <div class="gallery">
                    <div class="gallery-item-gutter"></div>
                    <?php if (have_posts()) : 

                        while (have_posts()) : the_post(); ?>

                            <?php 
                            $categories = get_the_terms( $post->ID, 'portfolio_category' );

                            $output = '';
                            if ( ! empty( $categories ) ) {
                                foreach( $categories as $category ) {
                                    $output .= strtolower( $category->name );
                                    $output .= ' ';
                                }
                            }
                            ?>

                            <div class="gallery-item <?php  echo trim( $output ); ?>">
                            <a href="<?php the_permalink(); ?>">
                                <div class="gallery-item-wrapper">
                                <div class="gallery-item-inner" data-tilt data-tilt-max="5" data-tilt-scale="1.02">
                                   
                                        <div class="gallery-item-content">
                                        <h2 class="name"><?php the_title();?></h2>
                                            
                                        </div>
                                        <?php if ( has_post_thumbnail() ) {
                                    the_post_thumbnail('gallery-item');
                                    } else { ?>
                                    <img src="<?php bloginfo('template_directory'); ?>/assets/img/default-blog.jpg" alt="<?php the_title(); ?>" />
                                <?php } ?>
                                   
                                </div>
                                </div>
                                </a>
                            </div>
                                    
                        <?php endwhile; ?>	

                        <?php endif; ?>

                    </div>
                </div>


		    </main> 

	</div> 

<?php get_footer(); ?>
