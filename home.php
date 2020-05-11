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
                        <div class="row">
                            <div class="col-9">
                                <div class="blog">
                                <div class="row">
                                    <?php if (have_posts()) : 
                                        $args = array(
                                            'posts_per_page' => 3,
                                            'post_status' => 'publish',
                                            'post_type' => 'post',
                                            'orderby' => 'post_date',
                                        );
                                        query_posts( $args );
                                         while (have_posts()) : the_post(); ?>
                                          <?php if (is_sticky()) :?>
                                            <div class="col-xs-12">
                                                <div class="blog-item" data-tilt data-tilt-max="5" data-tilt-scale="1.05">
                                                <a class="blog-item-link" href="<?php the_permalink(); ?>">
                                                <?php if ( has_post_thumbnail() ) {
                                                        the_post_thumbnail('blog-sticky');
                                                        } else { ?>
                                                        <img class="blog-item-thumbnail" src="<?php bloginfo('template_directory'); ?>/assets/img/default-blog-sticky.jpg" alt="<?php the_title(); ?>" />
                                                    <?php } ?>
                                                    <div class="entry-header">
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
                                            <div class="col-xs-12 col-sm-6">
                                                <div class="blog-item" data-tilt data-tilt-max="5" data-tilt-scale="1.05"> 
                                                <a class="blog-item-link" href="<?php the_permalink(); ?>">
                                                <?php if ( has_post_thumbnail() ) {
                                                        the_post_thumbnail('blog-item');
                                                        } else { ?>
                                                        <img class="blog-item-thumbnail" src="<?php bloginfo('template_directory'); ?>/assets/img/default-blog.jpg" alt="<?php the_title(); ?>" />
                                                    <?php } ?>
                                                    <div class="entry-header">
                                                        <h2 class="font-weight-bold"><?php the_title(); ?></h2>
                                                        <span><?php echo get_the_date('d/m Y') ?></span>
                                                        <span>
                                                            <?php foreach((get_the_category()) as $category){
                                                                echo $category->name."<br>";
                                                                echo category_description($category);
                                                            } ?>
                                                        </span>
                                                    </div>
                                                </a>
                                                </div>
                                            </div>
                                            <?php endif; ?>
                                        <?php endwhile; ?>	
                                    <?php endif; ?>
                                    </div>
                                </div> <!-- entries -->
                            </div><!-- col -->
                            <div class="col-3">
                            <aside class="sidebar">
                                <?php if ( is_active_sidebar('blog-sidebar')) : ?>
                                    <ul id="sidebar">
                                        <?php dynamic_sidebar( 'blog-sidebar' ); ?>
                                    </ul>
                                <?php endif; ?>
                            </aside>
                            </div>
                        </div> <!-- row -->
                </div> <!-- container -->
		    </main> 
	</div> 

<?php get_footer(); ?>
