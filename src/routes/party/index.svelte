<script lang="ts">
	let items = [
		{
			name: `/exchange`,
			emoji: `🎀`,
			url: `/party/exchange`,
			colour_rgb: `243, 40, 102`,
			is_active: false
		},
		{
			name: `/draw`,
			url: `/party/draw`,
			emoji: `🍀`,
			colour_rgb: `42, 230, 117`,
			is_active: false
		},
		{
			name: `/redeem`,
			emoji: `🎁`,
			url: `/party/redeem`,
			colour_rgb: `240, 102, 30`,
			is_active: true
		}
	];
</script>

<!-- party landing -> container -->
<div class="container  stretch--  grow--  col--  col-centre--  party-container  landing--">
	<!-- party landing -->
	<div class="container  col--  party  party-landing">
		<!-- party landing -> title -->
		<div class="party-title">KATUK MANANG</div>

		<!-- party landing -> description -->
		<div class="party-description">Party events by Léfrost.</div>

		<!-- party landing -> items -->
		<div class="container  stretch--  col--  party-landing__items">
			{#each items as item}
				<!-- item -->
				<a
					href={item.url}
					class="container  stretch--  row--  row-left--  party-landing__item"
					class:inactive--={item.is_active === false}
					style="background-color: rgba({item.colour_rgb}, 0.2);"
				>
					<!-- item -> name -->
					<div class="container  grow--  row--  row-left--  party-landing__item-name">
						{item.name}
					</div>

					<!-- item -> emoji -->
					<div class="party-landing__item-emoji">
						{item.emoji}
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style lang="scss">
	@import '../../assets/scss/all.scss';

	.party-landing__items {
		padding-top: 2em;
		@include parent-col-bottom(0.8em);
	}

	.party-landing__item {
		padding: 1.2em;
		border: 0.15em solid rgba(white, 0.5);
		@include swish;

		&.inactive-- {
			pointer-events: none;
			opacity: 0.3;
		}

		&:hover {
			opacity: 0.8;
		}
	}

	.party-landing__item-name {
		font-size: 1.4em;
		font-weight: bold;
		color: $white-hex;
	}

	.party-landing__item-emoji {
		font-size: 1.2em;
	}
</style>
