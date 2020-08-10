<?php
/**
 * Functions for the admins
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

if ( ! function_exists( 'rasande_admin_bar_css' )) {
    function rasande_admin_bar_css() { 

        if ( is_admin_bar_showing() ) { ?>
     
           <style>
                body.admin-bar {
                margin-top: -46px;
                margin-bottom: 46px;
                }
                body.admin-bar #wpadminbar {
                bottom: 0;
                top: auto;
                position: fixed;
                }
                body.admin-bar #wpadminbar .ab-top-menu>.menupop>.ab-sub-wrapper {
                min-width: auto;
                }
                body.admin-bar #wpadminbar ul {
                position: static;
                }
                body.admin-bar .quicklinks .menupop ul {
                bottom: 46px;
                }
                body.admin-bar .ab-sub-wrapper {
                bottom: 46px;
                }
                @media screen and (min-width: 783px) {
                    body.admin-bar {
                        margin-top: -32px;
                        margin-bottom: 32px;
                    }
                    body.admin-bar .quicklinks .menupop ul {
                        bottom: 32px;
                    }
                    body.admin-bar .ab-sub-wrapper {
                        bottom: 32px;
                    }
                }
           </style>
     
        <?php }
     
     }
     add_action( 'wp_head', 'rasande_admin_bar_css' );
}
