<?php 
/**
 * Page banner
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<!-- page header -->
<div class="page-header">
    <?php if(is_singular('post')) : ?>
        <div class="post-meta fade-in">
            <span class="post-meta-date"><?php echo get_the_date('d/m Y') ?></span> - <span class="post-meta-category"><?php the_category('| '); ?></span>
        </div>
    <?php endif; ?>
    <div class="page-title">
        <?php if(is_archive() || is_home()) : ?>
            <h1 class="title"><?php the_archive_title();?></h1>
            <div class="block-overlay"></div>
        <?php else: ?>
            
            <?php if (get_field( 'custom_title' )) : ?>
                <?php $title = get_field( 'custom_title' ); ?>
                <h1 class="title"><?php echo $title; ?></h1>
                <div class="block-overlay"></div>
            <?php else :?>
                <h1 class="title"><?php the_title();?></h1>
                <div class="block-overlay"></div>
            <?php endif; ?>
        </div>

            <div class="page-lead">
               
                <?php $lead = get_field('custom_lead'); ?>
                    <div class="lead">
                    <?php echo $lead ?>
           
    
                </div>
                <div class="lead-block-overlay"></div>
            </div>

    <?php endif; ?>
</div>
