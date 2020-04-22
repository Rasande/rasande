<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header(); ?>
			
	<div class="site-content">
	
		    <main class="main">
                <div class="container">
                <h1 class="display-1 font-weight-bold"><?php the_archive_title(); ?></h1>

                    <div class="gallery-filter">
                    
                    <?php

                        $taxonomy = 'kundcase_category';
                        $terms = get_terms($taxonomy); // Get all terms of a taxonomy

                        if ( $terms && !is_wp_error( $terms ) ) :
                        ?>
                            <div class="btn-group btn-filter-group" role="group" aria-label="<?php __('Filter cases', 'rasande') ?>">
                            <button type="button" class="btn btn-light selected" data-filter="*"><?php echo __('Show All', 'rasande'); ?></button>

                                <?php foreach ( $terms as $term ) { ?>

                                    <?php 
                                    $filterData = '.';
                                    $filterData .= $term->name; ?>

                                    <button type="button" class="btn btn-light" data-filter="<?php echo strtolower($filterData); ?>"><?php echo $term->name; ?></button>
                                <?php } ?>
                            </div>
                        <?php endif;?>

                    </div>

                    <div class="gallery">
                    <div class="gallery-item-gutter"></div>
                    <?php if (have_posts()) : 

                        while (have_posts()) : the_post(); ?>

                            <?php 
                            $categories = get_the_terms( $post->ID, 'kundcase_category' );

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
                                <div class="gallery-item-inner" data-tilt data-tilt-max="5" data-tilt-scale="1.05">
                                   
                                        <div class="gallery-item-content">
                                            <?php the_title();?>
                                        </div>
                                        <?php the_post_thumbnail(); ?>
                                   
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
