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
        </div>
                <div class="container-fluid">
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
                                    $filterData .= str_replace(' ', '-',$term->name) ;
                                    ?>
                                    

                                    <button type="button" class="btn btn-link btn-filter" data-filter="<?php echo strtolower($filterData); ?>"><?php echo $term->name; ?></button>
                                <?php } ?>
                            </div>
                        <?php endif;?>

                    </div>
                    <div class="gallery slide-in-btt">
                    <div class="gallery-item-gutter"></div>
                    <div class="gallery-item-sizer"></div>
                    <?php if (have_posts()) : 

                        while (have_posts()) : the_post(); ?>

                            <?php 
                            $categories = get_the_terms( $post->ID, 'portfolio_category' );

                            $output = '';
                            if ( ! empty( $categories ) ) {
                                foreach( $categories as $category ) {
                                    $output .= strtolower( str_replace(' ', '-',$category->name) );
                                    $output .= ' ';
                                }
                            }
                            ?>
                            <?php if ( has_post_thumbnail() ) : ?>
                            <div class="gallery-item <?php  echo trim( $output ); ?>">
                                    <div class="gallery-item-inner">
                                        
                                        <a href="<?php the_permalink(); ?>">
                                               <?php the_post_thumbnail('medium_large'); ?>
                                            <div class="gallery-item-content">
                                                <h2 class="name bold"><?php the_title();?></h2>
                                                <span class="blog-date">
                                            </div>
                                        </a>
                               
                                </div>
                            </div>
                            <?php endif; ?>
                        <?php endwhile; ?>	
                    <?php else : ?>

                        <p class="text-center color-gray-500"><?php echo __('Here it was empty, new projects coming soon!','rasande') ?></p>

                    <?php endif; ?>

                    </div>
                </div>


		    </main> 

	</div> 

<?php get_footer(); ?>
