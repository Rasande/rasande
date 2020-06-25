<?php
/**
 * Template Name: Portfolio
 *
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header(); ?>
			
	<div class="site-content">
	
		    <main class="main">
                <div class="container">
                <?php get_template_part( 'parts/page', 'header' ); ?>
                <?php
                $args = array(
                    'post_type' => 'portfolio',
                    //'tag__in' => $tagIDs,
                    'posts_per_page' => 6,
                    //'ignore_sticky_posts' => 1
                );
                $query = new wp_query( $args );
                ?>

                <?php if ($query->have_posts()) : ?>
                    <div class="entry-content">
                   <?php while ($query->have_posts()) : $query->the_post(); ?>


                            <div class="portfolio-selected <?php echo $odd_or_even; $odd_or_even = ('odd'==$odd_or_even) ? 'even' : 'odd'; ?>">
                        
                                    <div class="image-content">
                                    <?php if ( has_post_thumbnail() ) : ?>
                                            <?php the_post_thumbnail('portfolio-item'); ?>
                                    <?php endif; ?>
                                    <?php if ( has_post_thumbnail() ) : ?>
                                            <?php the_post_thumbnail('portfolio-item-small'); ?>
                                    <?php endif; ?>
                                    </div>
                                    <div class="text-content">
                                    <?php the_title();?>
                                    </div>
                             
                            </div>
                       
                    <?php endwhile; ?>	
    
                        <a href="<?php echo get_post_type_archive_link( 'portfolio' ); ?>"><?php echo __('All Projects', 'rasande') ?></a>
                    </div>
				<?php endif; ?>
                </div>
		    </main> 

	</div> 

<?php get_footer(); ?>
 