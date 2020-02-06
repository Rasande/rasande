<?php
/**
 * This is where you create the structure for your individual portfolio items.
 */
    // Get the taxonomy terms for Portfolio custom post type.
    $terms = get_the_terms( $post->ID, 'projekt_kategori' );
    if ( $terms && ! is_wp_error( $terms ) ) :
    $filtering_links = array();
    foreach ( $terms as $term ) {
        $filtering_links[] = $term->slug;
    }
    $filtering = join( " ", $filtering_links );
?>
    <article id="post-<?php the_ID(); ?>" <?php post_class( $filtering ); ?>>
        <a class="portfolio-item" href="<?php the_permalink(); ?>" rel="bookmark" class="image-link" tabindex="-1">
                <?php if ( has_post_thumbnail() ) {
                    the_post_thumbnail();
                } ?>
                <?php the_title(); ?>
        </a>
    </article><!-- #post-## -->
<?php endif;