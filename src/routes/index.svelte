<script lang="ts">
	// consts

	const ethos_items = [
		{
			heading: `Easy to <span style="color: #5892E8;">understand</span>`,
			description: `The purpose should<br />be straightforward.`
		},
		{
			heading: `Easy to <span style="color: #5892E8;">use</span>`,
			description: `The interface should<br />be intuitive.`
		},
		{
			heading: `Nice to <span style="color: #5892E8;">look</span> at`,
			description: `The design should be<br />clean, on all devices.`
		}
	];

	const founder_portfolio_items = [
		{
			link_url: `https://suave.la`,
			image_url: `https://pbs.twimg.com/profile_images/1563936350964895744/9cwRyJSR_400x400.png`,
			name: `Suave`,
			description: `Play skill-based games for .....?`,
			is_active: true
		},
		{
			link_url: ``,
			image_url: ``,
			name: `Fareast`,
			description: `Work in progress...`,
			is_active: false
		}
	];

	const side_portfolio_items = [
		{
			link_url: `https://intheloop.fyi`,
			image_url: `https://pbs.twimg.com/profile_images/1621249389779120130/et1nHyXZ_400x400.jpg`,
			name: `Loop`,
			description: `Stay in the web3 loop.`,
			is_active: true
		},
		{
			link_url: ``,
			image_url: ``,
			name: `Primogem`,
			description: `Work in progress...`,
			is_active: false
		}
	];
</script>

<div class="container  grow--  stretch--  col--  col-centre--  col-top--  me">
	<!-- inner -->
	<div class="container  grow--  col--  col-centre--  m-sections">
		<!-- (section) top -->
		<div class="container  stretch--  col--  col-centre--  m-section  m-top">
			<!-- top -> heading -->
			<div class="m-se__heading">
				I'm Lefrost, and I'm...
			</div>

			<!-- top -> hero -->
			<div class="m-to__hero">
				Making things
				<br class="visibility  lg-down--"/>
				you'll use.
			</div>

			<!-- top -> bio -->
			<div class="m-to__bio">
				Solo founder, software engineer.<br />
				Big into cafes, travel, jazz, and manga.
			</div>
		</div>

		<!-- (section) ethos -->
		<div class="container  stretch--  col--  col-centre--  m-section  m-ethos">
			<!-- ethos -> heading -->
			<div class="m-se__heading">
				Core ethos
			</div>

			<!-- ethos -> items -->
			<div class="container  stretch--  row--  row-centre--  row-wrap--  m-et__items">
				{#each ethos_items as item}
					<!-- item -->
					<div class="container  col--  col-centre--  m-et__item">
						<!-- item -> heading -->
						<div class="m-et__it-heading">
							{@html item.heading}
						</div>

						<!-- item -> description -->
						<div class="m-et__it-description">
							{@html item.description}
						</div>
					</div>
				{/each}
			</div>
		</div>

		<!-- (section) portfolio (founder) -->
		<div class="container  col--  col-centre--  m-section  m-portfolio">
			<!-- portfolio (heading) -> heading -->
			<div class="m-se__heading">
				Portfolio as founder
			</div>

			<!-- portfolio (heading) -> items -->
			<div class="container  stretch--  col--  col-centre--  m-po__items">
				{#each founder_portfolio_items as item}
					<!-- item -->
					<a
						href={item.link_url || null}
						target="_blank"
						rel="noreferrer"
						class="container  stretch--  row--  row-left--  m-po__item"
						class:m-inactive--={!item.is_active}	
					>
						{#if item.image_url}
							<!-- item -> image -->
							<img
								src={item.image_url}
								alt=""
								class="m-po__it-image"
							/>
						{/if}

						<!-- item -> name -->
						<div class="m-po__it-name">
							{@html item.name}
						</div>

						<!-- item -> divider -->
						<div class="visibility  sm-up--  container  grow--  row--  row-left--  m-po__it-divider" />

						<!-- item -> description -->
						<div class="m-po__it-description">
							{@html item.description}
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- (section) portfolio (side) -->
		<div class="container  col--  col-centre--  m-section  m-portfolio">
			<!-- portfolio (heading) -> heading -->
			<div class="m-se__heading">
				Side projects
			</div>

			<!-- portfolio (heading) -> items -->
			<div class="container  stretch--  col--  col-centre--  m-po__items">
				{#each side_portfolio_items as item}
					<!-- item -->
					<a
						href={item.link_url || null}
						target="_blank"
						rel="noreferrer"
						class="container  stretch--  row--  row-left--  m-po__item"
						class:m-inactive--={!item.is_active}	
					>
						{#if item.image_url}
							<!-- item -> image -->
							<img
								src={item.image_url}
								alt=""
								class="m-po__it-image"
							/>
						{/if}

						<!-- item -> name -->
						<div class="m-po__it-name">
							{@html item.name}
						</div>

						<!-- item -> divider -->
						<div class="visibility  sm-up--  container  grow--  row--  row-left--  m-po__it-divider" />

						<!-- item -> description -->
						<div class="m-po__it-description">
							{@html item.description}
						</div>
					</a>
				{/each}
			</div>
		</div>

		<!-- (section) bottom -->
		<div class="container  stretch--  col--  col-centre--  m-section  m-bottom">
			<!-- bottom -> text -->
			<div class="m-bo__text">
				Contact me via
				<br class="visibility  sm-down--"/>
				Discord
				<a
					href="https://discords.com/bio/p/lefrost"
					target="_blank"
					rel="noreferrer"
				>
					#lefrost
				</a>
				or Twitter
				<a
					href="https://twitter.com/lefrst"
					target="_blank"
					rel="noreferrer"
				>@lefrst</a>.
			</div>
		</div>
	</div>
</div>

<style lang="scss">
	@import '../assets/scss/all.scss';

	// me

	.me {
		color: $black-hex;
		padding: 4em $wrapper-gutter;

		@media (min-width: $bp-sm) {
			padding: 8em 0;
		}
	}

	// sections

	.m-sections {
		width: 100%;
		max-width: 1200px;

		@media (max-width: $bp-sm) {
			@include parent-col-bottom(5em);
		}

		@media (min-width: $bp-sm) {
			@include parent-col-bottom(10em);
		}
	}

	// (common) section

	.m-section {
	}

	.m-se__heading {
		opacity: 0.3;
		font-size: 1.2em;
		padding-bottom: 0.8em;
		
		@media (min-width: $bp-sm) {
			font-size: 1.4em;
		}
	}

	// top

	.m-top {

	}

	.m-to__hero {
		font-size: 2.2em;
		margin-top: -0.2em;
		padding-bottom: 0.35em;
		
		@media (min-width: $bp-sm) {
			font-size: 4.2em;
		}
	}

	.m-to__bio {
		font-size: 0.8em;
		opacity: 0.5;
	}

	// ethos

	.m-ethos {

	}

	.m-et__items {
		margin-right: -1.2em;
		margin-bottom: -1.2em;
	}
	
	.m-et__item {
		border: 0.1em solid rgba($black-hex, 0.05);
		border-radius: 0.4em;
		padding: 1.1em 1.2em;
		width: calc(100% - 1.2em * 2);
		max-width: calc(250px - 1.2em * 2);
		margin-right: 1.2em;
		margin-bottom: 1.2em;
		@include swish;

		&:hover {
			border: 0.1em solid rgba(#5892E8, 0.2);
		}

		@media (min-width: $bp-sm) {
			max-width: calc(320px - 1.2em * 2);
		}
	}

	.m-et__it-heading {
		font-size: 1.1em;
	}

	.m-et__it-description {
		opacity: 0.5;
		font-size: 0.82em;
		padding-top: 0.25em;
	}

	// portfolio

	.m-portfolio {
		width: 100%;
		max-width: calc(280px - $wrapper-gutter);

		@media (min-width: $bp-sm) {
		max-width: 600px;
		}
	}

	.m-po__items {
		@include parent-col-bottom(0.35em);
	}

	.m-po__item {
		&.m-inactive-- {
			opacity: 0.3;
			pointer-events: none;
		}

		&:hover {
			> .m-po__it-name,
			> .m-po__it-description {
				color: #5892E8;
			}

			> .m-po__it-divider {
				background-color: rgba(#5892E8, 0.1);
			}
		}
	}

	.m-po__it-image {
		width: 1.3em;
		height: 1.3em;
		border-radius: 50%;
		margin-right: 0.4em;
	}

	.m-po__it-name {
		@include swish;
		font-size: 1em;
		padding-right: 0.5em;
	}

	.m-po__it-divider {
		@include swish;
		margin-right: 0.5em;
		background-color: rgba($black-hex, 0.1);
		height: 0.1em;
		border-radius: 0.4em;
	}

	.m-po__it-description {
		@include swish;
		font-size: 0.7em;
		opacity: 0.5;

		@media (min-width: $bp-sm) {
		font-size: 0.75em;
		}
	}

	// bottom
	
	.m-bottom {

	}

	.m-bo__text {
		font-size: 0.75em;
		opacity: 0.5;

		> a {
			@include swish;
			text-decoration: underline;
			
			&:hover {
				color: #5892E8;
			}
		}
	}
</style>
