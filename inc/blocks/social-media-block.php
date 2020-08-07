<?php
/**
 * Social media icons block
 * 
 */

 $id = 'social-media-' . $block['id'];
 if( !empty($block['anchor']) ) {
    $id = $block['anchor'];
 }

 $className = 'social-media';
if( !empty($block['className']) ) {
   $className .= ' ' . $block['className'];
}
if( !empty($block['align']) ) {
   $className .= ' align' . $block['align'];
}

// Load values and assing defaults.

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
