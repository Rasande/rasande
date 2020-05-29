<?php 
/**
 * Custom logo part.
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
?>

<div class="hero">
<div class="grid-container">
    <div class="grid-x align-center align-middle">
        <div class="cell medium-6">
    
        </div>
        <div class="cell shrink text-right">
        <?php 
$image = get_field('hero_img');
if( !empty( $image ) ): ?>
    <img src="<?php echo esc_url($image['url']); ?>" alt="<?php echo esc_attr($image['alt']); ?>" />
<?php endif; ?>

        </div>
    </div>
</div>

</div>