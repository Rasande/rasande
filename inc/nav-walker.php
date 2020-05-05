<?php
/**
 * WP Bootstrap Navwalker
 *
 * @package rasande
 */
// Exit if accessed directly.
defined( 'ABSPATH' ) || exit;
/* Check if Class Exists. */
if ( ! class_exists( 'Rasande_WP_Navwalker' ) ) {
    class Rasande_WP_Navwalker extends Walker_Nav_Menu {
        public function start_lvl(&$output, $depth = 0, $args = array()) {
            $indent = str_repeat("\t", $depth);
            $output .= "\n$indent<button class=\"dropdown-btn \" type=\"button\"><i class=\"fa fa-angle-down\"></i></button>\n";
        
            parent::start_lvl($html, $depth, $args);
            $html = str_replace('sub-menu', 'dropdown-menu', $html);
            $output .= $html;
         }
        public function start_el( &$output, $item, $depth = 0, $args = array(), $current_object_id = 0 ) {
            global $wp_query;
            $title = $item->title;
            $attr_title = $item->attr_title;
            $description = $item->description;
            $permalink = $item->url;
    
            // Explode menu_class string so we can output only the first class 
            $prefix = explode(" ", $args->menu_class);
            
            // Item classes
            $item_classes = array(
                'item'                      => $depth == 0 ? $item_class = 'nav-item' . " " . 'menu-item-' . $item->ID : '',
                'depth_class'               => $depth >=1 ? $item_class = 'dropdown-item' . " " . 'menu-item-' . $item->ID : '',
                'parent_class'              => $args->has_children ? $parent_class = 'dropdown' : '',
                'active_class'              => in_array("current-menu-item", $item->classes) ? 'active' : '',
                'active_parent_class'       => in_array("current-menu-parent", $item->classes) ? 'active' : '',
                'active_ancestor_class'     => in_array("current-menu-ancestor", $item->classes) && ! in_array("current-menu-parent", $item->classes) ? 'active' : '',
                'user_class'                => $item->classes[0] !== '' ? $item->classes[0] : '',
            );
     
            $class_string = implode(" ", array_filter($item_classes));
    
    
            // Check if item has attribute title
            if ( $attr_title ) {
                $attr_title_output = 'title="'. $attr_title .'"';
            } else {
                $attr_title_output = '';
            }

            // Check permalink and output <span> if false, <a> if true
     
            $link_output_pre = '<a class="nav-link"' . " " . 'href="' . $permalink . '"' . $attr_title_output . '>';
            $link_output_end = '</a>';
    
            // Output description if depth level = 0
            if ( $description != '' && $depth == 0 ) {
                $description_output = ' <small class="' . $prefix[0] . '__link--description">' . $description . '</small>';
            } else {
                $description_output = null;
            }
    
            // Item output 
            $output .= '<li class="' . $class_string . '">';
            $output .= $link_output_pre;
            $output .= $title;
            $output .= $description_output;
            $output .= $link_output_end;
        }
        public function display_element( $element, &$children_elements, $max_depth, $depth, $args, &$output ) {
            $id_field = $this->db_fields['id'];
        
            if ( is_object( $args[0] ) ) {
                $args[0]->has_children = !empty( $children_elements[$element->$id_field] );
            }
            
            return parent::display_element( $element, $children_elements, $max_depth, $depth, $args, $output );
        }
        public static function fallback( $args ) {
            if ( current_user_can( 'edit_theme_options' ) ) {
				/* Get Arguments. */
				$container       = $args['container'];
				$container_id    = $args['container_id'];
				$container_class = $args['container_class'];
				$menu_class      = $args['menu_class'];
				$menu_id         = $args['menu_id'];
				// initialize var to store fallback html.
				$fallback_output = '';
				if ( $container ) {
					$fallback_output .= '<' . esc_attr( $container );
					if ( $container_id ) {
						$fallback_output .= ' id="' . esc_attr( $container_id ) . '"';
					}
					if ( $container_class ) {
						$fallback_output .= ' class="' . esc_attr( $container_class ) . '"';
					}
					$fallback_output .= '>';
				}
				$fallback_output .= '<ul';
				if ( $menu_id ) {
					$fallback_output .= ' id="' . esc_attr( $menu_id ) . '"'; }
				if ( $menu_class ) {
					$fallback_output .= ' class="' . esc_attr( $menu_class ) . '"'; }
				$fallback_output .= '>';
				$fallback_output .= '<li><a href="' . esc_url( admin_url( 'nav-menus.php' ) ) . '" title="' . esc_attr__( 'Add a menu', 'rasande' ) . '">' . esc_html__( 'Add a menu', 'rasande' ) . '</a></li>';
				$fallback_output .= '</ul>';
				if ( $container ) {
					$fallback_output .= '</' . esc_attr( $container ) . '>';
				}
				// if $args has 'echo' key and it's true echo, otherwise return.
				if ( array_key_exists( 'echo', $args ) && $args['echo'] ) {
					echo $fallback_output; // WPCS: XSS OK.
				} else {
					return $fallback_output;
				}
            }
        }
    }
}
