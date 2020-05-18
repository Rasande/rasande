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
                <div class="container">
             



                    <div class="services">
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

                            <div class="service-item <?php echo $odd_or_even; $odd_or_even = ('odd'==$odd_or_even) ? 'even' : 'odd'; ?> <?php  echo trim( $output ); ?>">
                            <a href="<?php the_permalink(); ?>">
                                <div class="service-item-wrapper">
                                <div class="service-item-inner" data-tilt data-tilt-max="5" data-tilt-scale="1.02">
                                   
                                        <div class="service-item-content">
                                        <h2 class="name"><?php the_title();?></h2>
										<p><?php the_excerpt(); ?></p>
                                        </div>
                                        <?php if ( has_post_thumbnail() ) {
                                    the_post_thumbnail('service-item');
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
