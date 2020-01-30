<?php ?>

<div class="entry-meta">
	<?php
	printf( __( '%1$s - %2$s', 'rasande' ),
		get_the_time( __('j F, Y', 'rasande') ),
		get_the_category_list(', ')
	);
	?>
</div>	