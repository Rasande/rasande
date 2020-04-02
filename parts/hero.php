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
            <h1 class="display bold"><?php the_title(); ?></h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <a href="">Call to action</a>
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