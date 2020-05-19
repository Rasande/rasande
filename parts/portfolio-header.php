<?php 
/**
 * Page banner
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<div class="page-header">
 
    <?php if (get_field( 'custom_title' )) : ?>
        <?php $title = get_field( 'custom_title' ); ?>

        <h1 class="page-title"><?php echo $title; ?></h1>
    <?php else :?>
    <h1 class="page-title"><?php the_title();?></h1>
    <?php endif; ?>
    <?php get_template_part( 'parts/portfolio', 'meta' ) ?>

</div>

