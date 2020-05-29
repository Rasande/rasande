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

                            <div class="service-item">
                                <div class="row <?php echo $odd_or_even; $odd_or_even = ('odd'==$odd_or_even) ? 'even' : 'odd'; ?> <?php  echo trim( $output ); ?>">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="service-item-img" data-tilt data-tilt-max="5" data-tilt-scale="1.02">
                                            <a href="<?php the_permalink(); ?>">
                                                <?php if ( has_post_thumbnail() ) {
                                                    the_post_thumbnail('service-item');
                                                } else { ?>
                                                    <img src="<?php bloginfo('template_directory'); ?>/assets/img/default-blog.jpg" alt="<?php the_title(); ?>" />
                                                <?php } ?>   
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-xs-12 col-md-6">
                                        <div class="service-item-content">
                                            <h2 class="name"><?php the_title();?></h2>
										    <p><?php the_excerpt(); ?></p>
                                            <a class="btn btn-primary" href="<?php the_permalink(); ?>"><?php echo __('Read More', 'rasande');?></a>
                                        </div>
                                    </div>
                                
                                </div>

                                
                            </div>
                                    
                        <?php endwhile; ?>	

                        <?php else : ?>

                            <p class="text-center color-gray-500"><?php echo __('Here it was empty, new services coming soon!','rasande') ?></p>
                        <?php endif; ?>

                    </div>
                </div>


		    </main> 

	</div> 

<?php get_footer(); ?>
