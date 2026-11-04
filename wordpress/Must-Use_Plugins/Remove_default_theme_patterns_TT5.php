<?php
/**
 * Plugin Name: Remove default theme patterns.
 * Author: Jb Audras
 * Version: 0.1
 * Author URI: https://whodunit.fr
 */

/**
 * Unregisters default patterns from TT5.
 */
function jba_unregister_tt5_patterns() {
	/**
	 * Add the patterns you want to unregister.
	 * Structure: {theme_slug}/{pattern_file}
	 */
	$block_patterns = array(
		'twentytwentyfive/banner-about-book',
		'twentytwentyfive/banner-cover-big-heading'
	);
	foreach ( $block_patterns as $block_pattern ) {
		unregister_block_pattern( $block_pattern );
	}
}
add_filter( 'init', 'jba_unregister_tt5_patterns' );
