<?php

$heroBGimg = get_field('hero_bg_img');
$heroBGvideo = get_field('hero_bg_video');
$heroSelect = get_field('hero_bg_select');

?>

<?php if ( $heroSelect == 'img' ) : ?>

<header class="hero hero-image" style="background-image: url(<?php echo $heroBGimg['url'] ?>);">
    <div class="hero-content">
        <div class="grid-container">
            <div class="grid-x ">
                <div class="cell auto">
                    <h1 class="hero-title">
                        <?php single_post_title(); ?>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</header>

<?php elseif ( $heroSelect == 'video' ) : ?>

<header class="hero hero-video">
    <div class="hero-video">
        <video preload="auto" autoplay="" playsinline="" loop="" muted="" src="<?php echo $heroBGvideo['url'] ?>" type="video/mp4"></video>
        <div class="hero-video-overlay"></div>
    </div>
    <div class="hero-content">
        <div class="grid-container">
            <div class="grid-x ">
                <div class="cell auto">
                    <h1 class="hero-title">
                        <?php single_post_title(); ?>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</header>

<?php else: ?>

<header class="hero">
    <div class="hero-content">
            <div class="grid-container">
                <div class="grid-x ">
                    <div class="cell auto">
                        <h1 class="hero-title">
                            <?php single_post_title(); ?>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
</header>

<?php endif; ?>
