<?php 

if( function_exists('acf_add_local_field_group') ):

    acf_add_local_field_group(array(
        'key' => 'group_5eb5de5b9d0bf',
        'title' => 'Social Media',
        'fields' => array(
            array(
                'key' => 'field_5eb5debba0c84',
                'label' => 'social_media',
                'name' => 'social_media',
                'type' => 'repeater',
                'instructions' => '',
                'required' => 0,
                'conditional_logic' => 0,
                'wrapper' => array(
                    'width' => '',
                    'class' => '',
                    'id' => '',
                ),
                'min' => 0,
                'max' => 0,
                'layout' => 'table',
                'button_label' => '',
                'collapsed' => '',
                'sub_fields' => array(
                    array(
                        'key' => 'field_5eb5e18a940fe',
                        'label' => 'social_channel',
                        'name' => 'social_channel',
                        'type' => 'select',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'choices' => array(
                            'facebook' => 'Facebook',
                            'linkedin' => 'LinkedIn',
                        ),
                        'default_value' => array(
                        ),
                        'allow_null' => 0,
                        'multiple' => 0,
                        'ui' => 0,
                        'return_format' => 'value',
                        'ajax' => 0,
                        'placeholder' => '',
                    ),
                    array(
                        'key' => 'field_5eb5e1a2940ff',
                        'label' => 'social_icon',
                        'name' => 'social_icon',
                        'type' => 'file',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'return_format' => 'url',
                        'library' => 'all',
                        'min_size' => '',
                        'max_size' => '',
                        'mime_types' => 'svg',
                    ),
                    array(
                        'key' => 'field_5eb5e1b894100',
                        'label' => 'social_url',
                        'name' => 'social_url',
                        'type' => 'url',
                        'instructions' => '',
                        'required' => 0,
                        'conditional_logic' => 0,
                        'wrapper' => array(
                            'width' => '',
                            'class' => '',
                            'id' => '',
                        ),
                        'default_value' => '',
                        'placeholder' => '',
                    ),
                ),
            ),
        ),
        'location' => array(
            array(
                array(
                    'param' => 'options_page',
                    'operator' => '==',
                    'value' => 'global-settings',
                ),
            ),
        ),
        'menu_order' => 0,
        'position' => 'normal',
        'style' => 'default',
        'label_placement' => 'top',
        'instruction_placement' => 'label',
        'hide_on_screen' => '',
        'active' => true,
        'description' => '',
    ));
    
    endif;