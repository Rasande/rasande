<?php 
/**
 * Page banner
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<div class="page-header">
<?php if(is_archive() || is_home()) : ?>
    <h1 class="page-title"><?php the_archive_title();?></h1>
<?php elseif(is_404()) : ?>
    <h1 class="page-title">404</h1>
<?php else: ?> 
    <?php if (get_field( 'custom_title' )) : ?>
        <?php $title = get_field( 'custom_title' ); ?>

        <h1 class="page-title"><?php echo $title; ?></h1>
    <?php else :?>
    <h1 class="page-title"><?php the_title();?></h1>
    <?php endif; ?>
<?php endif; ?>
<?php if(get_field('custom_lead')) : ?>
    <?php $lead = get_field('custom_lead'); ?>

    <span class="lead"><?php echo $lead ?></span>
<?php endif; ?>
</div>
