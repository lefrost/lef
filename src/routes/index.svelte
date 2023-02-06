<div class="container  grow--  stretch--  col--  col-right--  col-middle--  me">
	<div class="container  grow--  col--  col-right--  me-texts">
		<div class="me-text">i'm lé ✌️</div>

		<div class="me-text">
			so far, i've established several solo ventures and find myself doing design, development,
			operational and directorial work for them.
		</div>

		<div class="me-text">
			currently, i'm working on @suave and @loop, both of which are in a phase of infancy. i enjoy
			the creative freedom!
		</div>

		<div class="me-text">
			during off hours, i'm mostly either writing unpublished fiction, or indulging in japanese pop
			culture.
		</div>

		<div class="me-text">
			i enjoy quiet cafés, impressionist jazz, and a good romance manga. find me on twitter or
			discord.
		</div>
	</div>

	<div class="container  grow--  col--  col-right--  me-titles">
		<div class="container  row--  row-right--  me-title">
			<div>creator + operator</div>
		</div>

		<div class="container  row--  row-right--  me-title">
			<div>developer + designer</div>
		</div>

		<div class="container  row--  row-right--  me-title">
			<div>founding director @</div>
			<a href="https://twitter.com/suaveseals" target="_blank">suave</a>
		</div>

		<div class="container  row--  row-right--  me-title">
			<div>tech lead @</div>
			<a href="https://twitter.com/intheloopfyi" target="_blank">loop</a>
		</div>
	</div>

	<div class="container  row--  row-right--  row-wrap--  me-bottom">
		<div class="me-bottom__text">gmt+8</div>

		<a href="https://twitter.com/lefrst" target="_blank" class="me-bottom__link">tweets</a>

		<a href="https://anilist.co/user/lefrost" target="_blank" class="me-bottom__link">manga</a>

		<a href="https://www.last.fm/user/lefrst" target="_blank" class="me-bottom__link">music</a>

		<a href="https://www.chess.com/member/lefroste" target="_blank" class="me-bottom__link">chess</a
		>

		<a href="https://github.com/lefrst" target="_blank" class="me-bottom__link">github</a>

		<div class="me-bottom__text">lefrost#0001</div>
	</div>
</div>

<style lang="scss">
	@import url('https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;600;700&display=swap');
	@import '../assets/scss/all.scss';

	.me {
		background-color: $me-black;
		color: $me-white;
		padding: 1.2em;

		@media (min-width: $bp-sm) {
			padding: 4em;
		}

		* {
			font-family: 'Red Hat Display';
			letter-spacing: -0.02em;
			line-height: 1.35em;
		}

		> * {
			&:not(:first-child) {
				padding-top: 2em;
			}
		}
	}

	.me-texts {
		max-width: 320px;
	}

	.me-text {
		opacity: 0.3;
		font-weight: 600;
		font-size: 0.72em;

		&:not(:first-child) {
			padding-top: 1.3em;
		}
	}

	.me-titles {
	}

	.me-title {
		font-size: 1.1em;
		font-weight: 600;

		@media (min-width: $bp-sm) {
			font-size: 1.8em;
		}

		> div {
			opacity: 0.2;
		}

		> a {
			color: $me-white;
			opacity: 0.5;
			@include swish;
			text-decoration: underline;

			&:hover {
				opacity: 0.7;
			}
		}

		> *:not(:first-child) {
			padding-left: 0.2em;
		}

		&:not(:first-child) {
			padding-top: 0.3em;
		}
	}

	.me-bottom {
		> *:not(:first-child) {
			margin-left: 1.5em;
		}
	}

	.me-bottom__text {
		font-weight: 600;
		font-size: 0.65em;
		opacity: 0.2;
	}

	.me-bottom__link {
		font-weight: 600;
		font-size: 0.68em;
		@include swish;
		opacity: 0.5;
		color: $me-white;

		&:hover {
			opacity: 0.7;
		}
	}
</style>
