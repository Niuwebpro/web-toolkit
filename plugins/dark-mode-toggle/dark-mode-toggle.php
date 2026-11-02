<?php
/**
 * Plugin Name: Bouton mode sombre
 * Description: Bloc Gutenberg et shortcode pour choisir le mode clair, sombre ou système. Les palettes sont définies par le thème.
 * Version: 0.1.0
 * Requires at least: 6.3
 * Requires PHP: 7.4
 * License: MIT
 * Text Domain: dark-mode-toggle
 */

namespace WordPressToolkit\DarkModeToggle;

defined( 'ABSPATH' ) || exit;

function render_toggle( $attributes = array() ) {
    $label = isset( $attributes['label'] ) ? sanitize_text_field( $attributes['label'] ) : __( 'Mode sombre', 'dark-mode-toggle' );
    if ( '' === trim( $label ) ) { $label = __( 'Mode sombre', 'dark-mode-toggle' ); }
    $show_label = ! isset( $attributes['showLabel'] ) || $attributes['showLabel'];
    $wrapper = get_block_wrapper_attributes( array( 'class' => 'wpt-dark-mode' ) );
    ob_start();
    ?>
    <div <?php echo $wrapper; // Generated and escaped by WordPress. ?>>
        <button type="button" class="wpt-dark-mode__switch" role="switch" aria-checked="false" aria-label="<?php echo esc_attr( $label ); ?>" data-wpt-dark-toggle hidden>
            <span class="wpt-dark-mode__track" aria-hidden="true"><span class="wpt-dark-mode__thumb"></span></span>
            <?php if ( $show_label ) : ?><span><?php echo esc_html( $label ); ?></span><?php endif; ?>
        </button>
        <button type="button" class="wpt-dark-mode__system" aria-pressed="false" data-wpt-dark-system hidden><?php esc_html_e( 'Système', 'dark-mode-toggle' ); ?></button>
    </div>
    <?php
    return ob_get_clean();
}

add_action( 'init', function () {
    wp_register_script( 'wpt-dark-mode-editor', plugins_url( 'assets/editor.js', __FILE__ ), array( 'wp-blocks', 'wp-element', 'wp-block-editor', 'wp-components', 'wp-i18n' ), '0.1.0', true );
    wp_register_style( 'wpt-dark-mode', plugins_url( 'assets/style.css', __FILE__ ), array(), '0.1.0' );
    register_block_type( __DIR__, array( 'render_callback' => __NAMESPACE__ . '\\render_toggle' ) );
    add_shortcode( 'dark_mode_toggle', function () { return render_toggle(); } );
} );

// A small synchronous initializer applies the preference before the page paints,
// including pages without a toggle. Exclude it from cache-plugin delay features.
add_action( 'wp_enqueue_scripts', function () {
    wp_enqueue_script( 'wpt-dark-mode-init', plugins_url( 'assets/init.js', __FILE__ ), array(), '0.1.0', false );
    wp_enqueue_script( 'wpt-dark-mode-controls', plugins_url( 'assets/controls.js', __FILE__ ), array( 'wpt-dark-mode-init' ), '0.1.0', true );
    wp_enqueue_style( 'wpt-dark-mode' );
} );
