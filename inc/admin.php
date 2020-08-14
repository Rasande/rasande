<?php

/**
 * Functions for the admins
 * 
 */

// Exit if accessed directly.
defined('ABSPATH') || exit;

if (!function_exists('rasande_admin_bar_css')) {
    function rasande_admin_bar_css()
    {

        if (is_admin_bar_showing()) { ?>
        
            <style>
                body.admin-bar #wpadminbar {
                    position: fixed;
                }

                .site-header {
                    margin-top: 46px;
                }

                @media screen and (min-width: 783px) {
                    .site-header {
                        margin-top: 32px;
                    }
                }
            </style>

<?php }
    }
    add_action('wp_head', 'rasande_admin_bar_css');
}
