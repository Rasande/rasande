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

                            <div class="service-item">
                                <div class="row <?php echo $odd_or_even; $odd_or_even = ('odd'==$odd_or_even) ? 'even' : 'odd'; ?>">
                                    <div class="col-xs-12 col-md-6">
                                        <div class="service-item-img slide-in-btt">
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
                                        <div class="service-item-content <?php echo $left_or_right; $left_or_right = ('slide-in-rtl'==$left_or_right) ? 'slide-in-ltr' : 'slide-in-rtl'; ?>">
                                            <h2 class="name"><?php the_title();?></h2>
										    <p><?php the_excerpt(); ?></p>
                                            <a class="" href="<?php the_permalink(); ?>"><?php echo __('Read More', 'rasande');?></a>
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
