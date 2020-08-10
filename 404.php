<?php

/**
 * Template for 404
 *
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

get_header(); ?>

<div class="site-content">
    <main class="main">
        <!-- 404 -->
        <div class="container height-100vh">
            <div class="row align-center justify-center height-80">
                <div>
                <h1 class="text-biggest text-center width-100 bold">
                    <span class="four-zero-four">4</span>
                    <span class="four-zero-four">0</span>
                    <span class="four-zero-four">4</span>
                </h1> 
                <p class="text-center color-gray-500"><?php echo __('The page you are looking for does not exist. ', 'rasande') ?></p>
                </div>
            </div>
        </div>
    </main>

</div>

<?php get_footer(); ?>
