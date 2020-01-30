<?php

add_action( 'widgets_init', 'rasande_widgets_init' );

function rasande_widgets_init() {
    register_sidebar(
        array(
            'name'          => __( 'Right Sidebar', 'rasande' ),
            'id'            => 'sidebar-right',
            'description'   => __( 'Right sidebar widget area', 'rasande' ),
            'before_widget' => '<div id="%1$s" class="widget %2$s">',
            'after_widget'  => '</div>',
            'before_title'  => '<span class="widget-title">',
            'after_title'   => '</span>',
        )
    );
}
