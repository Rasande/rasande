<?php

$bannerBGimg = get_field('banner_bg_img');
$bannerBGvideo = get_field('banner_bg_video');
$bannerSelect = get_field('banner_bg_select');

?>

<?php if ( $bannerSelect == 'img' ) : ?>

<header class="banner banner-image" style="background-image: url(<?php echo $bannerBGimg['url'] ?>);">
    <div class="banner-content">
        <div class="grid-container">
            <div class="grid-x ">
                <div class="cell auto">
                        <h1 class="banner-title">
                        <?php single_post_title(); ?>
                    </h1>
                </div>
            </div>
        </div>
    </div>
</header>

<?php elseif ( $bannerSelect == 'video' ) : ?>

    <header class="banner banner-video">
        <div class="banner-video">
            <video preload="auto" autoplay="" playsinline="" loop="" muted="" src="<?php echo $bannerBGvideo['url'] ?>" type="video/mp4"></video>
            <div class="banner-video-overlay"></div>
        </div>
        <div class="banner-content">
            <div class="grid-container">
                <div class="grid-x ">
                    <div class="cell auto">
                        <h1 class="banner-title">
                            <?php single_post_title(); ?>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </header>

<?php else: ?>

<header class="banner">
    <div class="banner-content">
            <div class="grid-container">
                <div class="grid-x ">
                    <div class="cell auto">
                        <h1 class="banner-title">
                            <?php single_post_title(); ?>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
</header>

<?php endif; ?>
