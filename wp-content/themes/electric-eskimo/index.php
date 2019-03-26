<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package electric-eskimo
 */

get_header();
?>
<div id=border></div>

<div id="primary" class="content-area">
	<main id="main" class="site-main">
		<div id="landing-page">
			<div id="title">
				<div id="electric">electric </div>
				<div id="eskimo">eskimo</div>
			</div>
			<div id="confettiWrapper">
				<div id="confetti">
				</div>
			</div>

		</main><!-- #main -->
	</div><!-- #primary -->

	<?php
	get_sidebar();
	get_footer();
