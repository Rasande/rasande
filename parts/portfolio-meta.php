<?php
/**
 * 
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit; 

$customer = get_field( 'customer' );
$customerURL = get_field( 'customer_url' );

$coop = get_field( 'coop' );
$coopURL = get_field( 'coop_url' );

$contractor = get_field( 'contractor' );
$contractorURL = get_field( 'contractor_url' );

?>

<div class="portfolio-meta">
    <?php if( get_field('customer') ) : ?>
        <span><?php echo __('Customer: ','rasande'); ?><a href="<?php echo $customerURL; ?>" target="_blank"><?php echo $customer; ?></a></span>
    <?php endif; ?>
    <?php if( get_field('coop') ) : ?>
        <span><?php echo __('In association with: ','rasande'); ?><a href="<?php echo $coopURL; ?>" target="_blank"><?php echo $coop; ?></a></span>
    <?php endif; ?>
    <?php if( get_field('contractor') ) : ?>
        <span><?php echo __('On behalf of: ','rasande'); ?><a href="<?php echo $contractorURL; ?>" target="_blank"><?php echo $contractor; ?></a></span>
    <?php endif; ?>
</div>