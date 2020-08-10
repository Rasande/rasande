<?php 
/**
 * Entry header
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<header class="entry-header">

    <?php 

    // Post meta data for single.php 
    if(is_singular('post')) : ?>
        <div class="post-meta fade-in">
            <span class="post-meta-date"><?php echo get_the_date('d/m Y') ?></span> - <span class="post-meta-category"><?php the_category('| '); ?></span>
        </div>
    <?php endif; ?>

    <!-- Entry title -->
    <div class="entry-title">

        <?php if(is_archive() || is_home()) : ?>
            <h1 class="title"><?php the_archive_title();?></h1>
            <div class="block-overlay"></div>
        <?php else: 
            
            // Check if has custom title, else use the_title();
            if (get_field( 'custom_title' )) : 
                $title = get_field( 'custom_title' );
            else : 
                $title = get_the_title();
            endif; ?>
            
            <h1 class="title"><?php echo $title ?></h1>
            <div class="block-overlay"></div>
        <?php endif; ?>

    </div>

    <!-- Entry lead --> 
    <div class="entry-lead">
    <?php $lead = get_field('custom_lead'); ?>
        <div class="lead">
            <?php echo $lead ?>
        </div>
        <div class="lead-block-overlay"></div>
    </div>

</header>
