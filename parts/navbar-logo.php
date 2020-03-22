<?php 
/**
 * Custom logo part.
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

    <?php if ( ! has_custom_logo() ) : ?>

        <?php if ( is_front_page() && is_home() ) : ?>

            <h1 class="brand-name"><a class="brand-link" rel="home" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" itemprop="url"><?php bloginfo( 'name' ); ?></a></h1>

        <?php else : ?>

            <a class="brand-name brand-link" rel="home" href="<?php echo esc_url( home_url( '/' ) ); ?>" title="<?php echo esc_attr( get_bloginfo( 'name', 'display' ) ); ?>" itemprop="url"><?php bloginfo( 'name' ); ?></a>

        <?php endif; ?>

    <?php else :

        the_custom_logo();

    endif; ?>
