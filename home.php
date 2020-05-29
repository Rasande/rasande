<?php
/**
 * The blog template file
 *
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

get_header(); 


?>
			
	<div class="site-content">
	
		    <main class="main">
                <div class="container">
                <?php get_template_part( 'parts/page', 'header' ); ?>
                    </div>
                    <div class="container">

                                <div class="blog">
                                <div class="row">
                                    <?php if (have_posts()) : 
                                        $args = array(
                                            'paged' => ( get_query_var('paged') ? get_query_var('paged') : 1),
                                            'post_status' => 'publish',
                                            'post_type' => 'post',
                                            'orderby' => 'post_date',
                                        );
                                        query_posts( $args );
                                         while (have_posts()) : the_post(); ?>
                                          <?php if (is_sticky()) :?>
                                            <div class="col-xs-12">
                                                <div class="blog-item" data-tilt data-tilt-max="5" data-tilt-scale="1.02">
                                                <a class="blog-item-link" href="<?php the_permalink(); ?>">
                                                <?php if ( has_post_thumbnail() ) {
                                                        the_post_thumbnail('blog-sticky');
                                                        } else { ?>
                                                        <img class="blog-item-thumbnail" src="<?php bloginfo('template_directory'); ?>/assets/img/default-blog-sticky.jpg" alt="<?php the_title(); ?>" />
                                                    <?php } ?>
                                                    <div class="blog-item-info">
                                                        <h2 class="font-weight-bold"><?php the_title(); ?></h2>
                                                        <span><?php echo get_the_date('d/m Y') ?></span>
                                                        <span>
                                                            <?php foreach((get_the_category()) as $category){
                                                                echo $category->name."<br>";
                                                                echo category_description($category);
                                                            } ?>
                                                        </span>
                                                        <?php the_excerpt(); ?>
                                                    </div>
                                                </a>
                                                </div>
                                            </div>
                                          <?php else: ?>
                                            <div class="col-xs-12 col-sm-6 col-md-4">
                                                <div class="blog-item" data-tilt data-tilt-max="5" data-tilt-scale="1.02"> 
                                                <a class="blog-item-link" href="<?php the_permalink(); ?>">
                                                <?php if ( has_post_thumbnail() ) {
                                                        the_post_thumbnail('blog-item');
                                                        } else { ?>
                                                        <img class="blog-item-thumbnail" src="<?php bloginfo('template_directory'); ?>/assets/img/default-blog.jpg" alt="<?php the_title(); ?>" />
                                                    <?php } ?>
                                                    <div class="blog-item-info">
                                                        <h2 class="font-weight-bold"><?php the_title(); ?></h2>
                                                        <span class="blog-date"><?php echo get_the_date('d/m Y') ?></span>
                                                    </div>
                                                </a>
                                                </div>
                                            </div>
                                            <?php endif; ?>
                                        <?php endwhile; ?>
                                    <?php else : ?>
                                        <div class="col-xs-12">
                                        <p class="text-center color-gray-500"><?php echo __('Here it was empty, new posts coming soon!','rasande') ?></p>
                                        </div>
                                    <?php endif; ?>
                                    </div>
                                </div> <!-- entries -->
                                <nav class="pagination">
                                    <span class="pagination-prev"><?php previous_posts_link(); ?></span>
                                    <span class="pagination-next"><?php next_posts_link(); ?></span>
                                </nav>
                            </div><!-- row -->
                        </div> <!-- blog -->
                </div> <!-- container -->
		    </main> 
	</div> 

<?php get_footer(); ?>
