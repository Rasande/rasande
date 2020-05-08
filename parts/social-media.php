<?php 
/**
 * List of social media links
 * 
 *  ACF depended
 * 
 */

// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;


if( have_rows('social_media', 'option') ):
	echo '<ul class="social-media ">';
    while ( have_rows('social_media', 'option') ) : the_row();
    
        $socialchannel = get_sub_field('social_channel', 'option');
        $getsocialicon = get_sub_field( 'social_icon', 'option' );
        $socialicon = file_get_contents( $getsocialicon );
        $socialurl = get_sub_field('social_url', 'option');
        
		echo '<li class="social-item">';
        echo '<a class="social-link" rel="nofollow noopener noreferrer" title="' . $socialchannel . '" href="' . $socialurl . '" target="_blank">';  
		echo $socialicon;
        echo '</a></li>';
        
	endwhile;
	echo '</ul>';
endif;
?>
