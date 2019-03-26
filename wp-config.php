<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'electric_eskimo' );

/** MySQL database username */
define( 'DB_USER', 'admin' );

/** MySQL database password */
define( 'DB_PASSWORD', 'D2rtyh0rses' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         '40%bp0&wTP.Y5CRuYY>nx>=CNMfx(6,Cs=t-#gmM`$>u(:!pD$l;a?|w{VNT!Yym' );
define( 'SECURE_AUTH_KEY',  'pZ8,gXj7BE9dZfHOjDG{kEQ/d0_l2p.>1u!b_TSjGlGQX,$hM=DblvjAR(b[m?rf' );
define( 'LOGGED_IN_KEY',    'Kqa}HO4EytCI@ 4_$YmRj=&e]Gs2h.W];n*W+nrRc}Sc_>L92GJHH$a~WaZCO$Wu' );
define( 'NONCE_KEY',        ' KIg&%/5mPql6H_S~S_W<^HW!*]>)*c>{h$;G/oqLtr64e`sR6voe(2ILG`6-Pd/' );
define( 'AUTH_SALT',        '%g1tea=P4Bi&X?_Mg`c+E,a<6-e|8g?aNwc]J`J=LHQ}l# WfLN2)PjrxUu&{~dF' );
define( 'SECURE_AUTH_SALT', 'pu;iejuUG=f>,PFNH:&Ktv>c8WO:Fi;l-d.0dy<<rT:V;]$WSr@b /Bj(bv#D{tV' );
define( 'LOGGED_IN_SALT',   'E ++`(BYmi0!;j, Hq`_S:S^gLdV7Bsj]aYz4vD|G(;!IIbF~Oy[`rNxpvTc=]Ve' );
define( 'NONCE_SALT',       '&zv]@v+~%0v{Hz]qg7,Ub@yVH]{=kYy*i|MjQf+-Z:~xryvfa48/ZMsvxayARMq(' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
