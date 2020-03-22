<?php
/**
 * Theme Hooks
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;

// Print copyright info
if ( ! function_exists( 'rasande_copyright' )) {
    function rasande_copyright() { ?>
        <div class="copyright">
            <small class="copyright-info">&copy; <?php echo bloginfo( 'name' ); ?> <?php echo date("Y"); ?></small>
        </div>
   <?php }
}
