<?php 
/**
 * Page banner
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<div class="page-header">
    <div class="page-title">
        <?php if(is_archive() || is_home()) : ?>
            
            <h1 class="title"><?php the_archive_title();?></h1>
        
        <?php else: ?> 
            <?php if (get_field( 'custom_title' )) : ?>

                <?php $title = get_field( 'custom_title' ); ?>
                
                <h1 class="title"><?php echo $title; ?></h1>
                
            <?php else :?>
                
                <h1 class="title"><?php the_title();?></h1>
                    
            <?php endif; ?>

        <?php endif; ?>

        <div class="block-overlay"></div>

    </div>

    <?php if(get_field('custom_lead')) : ?>
        <?php $lead = get_field('custom_lead'); ?>

        <div class="page-lead">
            <div class="lead">
                <?php echo $lead ?>
            </div>
            <div class="lead-block-overlay"></div>
        </div>
        
    <?php endif; ?>

</div>
