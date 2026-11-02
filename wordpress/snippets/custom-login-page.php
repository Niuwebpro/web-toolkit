// === CUSTOM LOGIN PAGE ===

// Clickable logo → homepage
add_filter('login_headerurl', fn() => home_url());
add_filter('login_headertext', fn() => get_bloginfo('name'));

// Custom styles
add_action('login_enqueue_scripts', function() {
    ?>
    <style>
        body.login {
            background-color: #fff;
            font-family: inherit;
        }

        #login {
            width: 360px;
            padding: 0;
        }

        #login h1 a {
            background-size: contain;
            width: 300px;
            height: 100px;
            background-image: url('IMG_URL');
        }

        .login form {
            border-radius: 8px;
            border: none;
            box-shadow: 0 2px 12px rgba(0,0,0,0.08);
            padding: 32px;
            background: #fff;
            margin-top: 0;
        }

        .login label {
            font-size: 14px;
            color: #333;
        }

        .login input[type="text"],
        .login input[type="password"] {
            border-radius: 6px;
            border: 1px solid #ddd;
            padding: 10px 12px;
            font-size: 15px;
            width: 100%;
            box-sizing: border-box;
        }

        .wp-core-ui .button-primary {
            background: #6d29d3 !important;
            border-color: #6d29d3 !important;
            border-radius: 6px;
            width: 100%;
            padding: 10px;
            font-size: 15px;
            text-transform: none;
            letter-spacing: 0;
            box-shadow: none;
            height: auto;
        }

        .wp-core-ui .button-primary:hover,
        .wp-core-ui .button-primary:focus {
            background: #9700e8 !important;
            border-color: #9700e8 !important;
            box-shadow: none !important;
        }

        .login #nav a,
        .login #backtoblog a {
            color: #555;
            text-decoration: none;
        }

        .login #nav a:hover,
        .login #backtoblog a:hover {
            color: #1a1a1a;
        }

        #login_error {
            border-left-color: #cc0000;
            border-radius: 4px;
        }
    </style>
    <?php
});
