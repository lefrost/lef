<script lang="ts">
	import { page } from '$app/stores';
	import { onMount } from 'svelte';
	import * as api from '../../assets/js/api';
	import * as utils from '../../assets/js/utils';

	// vars

	let load_code = ``;
	let redemptions = [];
	let code_input = ``;
	let selected_redemption;
	let is_saved = false;

	// mount

	onMount(async () => {
		await getRedemptions();
		load_code = $page.url.searchParams.get(`code`);
		if (load_code) {
			findRedemption(load_code);
		}
	});

	// jobs

	let jobs = {
		get_redemptions: true,
		edit_redemption: false
	};

	async function getRedemptions() {
		jobs.get_redemptions = true;

		redemptions = await api.post({
			url: `get_many`,
			type: `lef_party_redemption`,
			filters: []
		});

		jobs.get_redemptions = false;
	}

	function findRedemption(input) {
		let matching_redemption = redemptions.find(
			(r) => r.code.toLowerCase() === input.trim().toLowerCase()
		);

		if (!utils.isEmptyObj(matching_redemption)) {
			selected_redemption = utils.clone(matching_redemption);
			is_saved = selected_redemption.is_saved || false;
		}
	}
</script>

<!-- party redeem -> container -->
<div class="container  stretch--  grow--  col--  col-centre--  party-container  redeem--">
	<!-- party redeem -->
	<div class="container  col--  party  party-redeem">
		<!-- party redeem -> back -->
		<a href="/party" class="party-back">↞ BALIK KAMPUNG</a>

		<!-- party redeem -> title -->
		<div class="party-title">/REDEEM 🎁</div>

		<!-- party redeem -> description -->
		<div class="party-description">Redeem gifts.</div>

		{#if utils.isEmptyObj(selected_redemption)}
			<!-- party redeem -> code -->
			<div class="container  stretch--  row--  row-left--  party-redeem__code">
				<!-- party redeem -> code -> input -->
				<input
					bind:value={code_input}
					type="text"
					placeholder="prize code..."
					class="container  stretch--  grow--  row--  row-left--  party-textbox"
				/>

				<!-- party redeem -> code -> button -->
				<div
					class="container  stretch--  row--  row-centre--  party-button"
					on:click={() => {
						findRedemption(code_input);
					}}
				>
					<div>→</div>
				</div>
			</div>
		{:else}
			<!-- party redeem -> text (one) -->
			<div class="container  stretch--  col--  party-redeem__text  one--">
				<div>Redemption code</div>
				<div>{selected_redemption.code}</div>
			</div>

			<!-- party redeem -> text (two) -->
			<div class="container  stretch--  col--  party-redeem__text  two--">
				<div>You have RM{selected_redemption.amount} to spend.</div>
				<div>What are you getting?</div>
			</div>

			<!-- party redeem -> text (three) -->
			<div class="container  stretch--  col--  party-redeem__text  three--">
				<div>Fill in the list below. Order by priority.</div>
				<div>
					If RM{selected_redemption.amount} has been spent, remaining items will be ignored. Any change
					will be given in cash.
				</div>
			</div>

			<!-- party redeem -> list -->
			<div
				class="container  stretch--  col--  party-redeem__list"
				class:inactive--={is_saved || jobs.edit_redemption}
			>
				{#each selected_redemption.items as item, i}
					<!-- item -->
					<div class="container  stretch--  row--  row-left--  party-redeem__list-item">
						<!-- item -> button -->
						<div class="party-redeem__list-item-index">
							<div>#{i}</div>
						</div>

						<!-- item -> textbox -->
						<input
							bind:value={item.text}
							type="text"
							placeholder="name of item..."
							class="container  stretch--  grow--  row--  row-left--  party-textbox  party-redeem__list-textbox"
						/>

						<!-- item -> button -->
						<div
							class="container  stretch--  row--  row-centre--  party-button"
							on:click={() => {
								selected_redemption.items.splice(i, 1);
								selected_redemption.items = selected_redemption.items;
							}}
						>
							<div>x</div>
						</div>
					</div>
				{/each}

				<!-- party redeem -> list -> buttons -->
				<div class="container  stretch--  row--  row-left--  party-redeem__buttons">
					<!-- party redeem -> list -> button (add) -->
					<div
						class="container  stretch--  row--  row-centre--  party-button"
						on:click={() => {
							selected_redemption.items.push({
								text: ``,
								status: `pending`
							});

							selected_redemption.items = selected_redemption.items;
						}}
					>
						<div>+ add</div>
					</div>

					<!-- party redeem -> list -> button (save) -->
					<div
						class="container  grow--  stretch--  row--  row-centre--  party-button  main--"
						on:click={async () => {
							if (!jobs.edit_redemption) {
								jobs.edit_redemption = true;

								await api.post({
									url: `edit`,
									type: `lef_party_redemption`,
									obj: {
										...selected_redemption,
										is_saved: true
									}
								});

								is_saved = true;

								jobs.edit_redemption = false;
							}
						}}
					>
						<div>Save</div>
					</div>
				</div>
			</div>

			{#if is_saved}
				<!-- party redeem -> saved -->
				<div class="container  stretch--  party-redeem__saved">
					List saved! Ryan will update you when he gets the items on your list.
				</div>

				<!-- party redeem -> button (edit) -->
				<div
					class="container  row--  row-centre--  party-button"
					on:click={() => {
						is_saved = false;
					}}
				>
					<div>Edit list</div>
				</div>
			{/if}
		{/if}
	</div>
</div>

<style lang="scss">
	@import '../../assets/scss/all.scss';

	.party-landing__items {
		padding-top: 2em;
		@include parent-col-bottom(0.8em);
	}

	.party-redeem__code {
		@include parent-row-left(0.5em);
		padding-top: 2em;
	}

	.party-redeem__text {
		padding-top: 2em;

		&.one-- {
			> div {
				&:nth-of-type(1) {
					opacity: 0.5;
					font-size: 0.6em;
				}

				&:nth-of-type(2) {
					font-size: 0.8em;
					font-weight: bold;
					padding-top: 0.2em;
					text-transform: uppercase;
				}
			}
		}

		&.two-- {
			> div {
				&:nth-of-type(1) {
					font-size: 1em;
					font-weight: bold;
				}

				&:nth-of-type(2) {
					font-size: 1em;
					opacity: 0.5;
					padding-top: 0.1em;
				}
			}
		}

		&.three-- {
			> div {
				&:nth-of-type(1) {
					font-size: 0.7em;
					font-weight: bold;
				}

				&:nth-of-type(2) {
					font-size: 0.7em;
					opacity: 0.5;
					padding-top: 0.3em;
				}
			}
		}
	}

	.party-redeem__list {
		padding-top: 2em;
		@include parent-col-bottom(0.5em);

		&.inactive-- {
			opacity: 0.3;
			pointer-events: none;
		}
	}

	.party-redeem__list-item {
		@include parent-row-left(0.5em);
		position: relative;
	}

	.party-redeem__list-item-index {
		font-weight: bold;
		font-size: 0.7em;
		position: absolute;
		left: 1em;
	}

	.party-redeem__list-textbox {
		padding-left: 4em;
	}

	.party-redeem__buttons {
		@include parent-row-left(0.5em);
	}

	.party-redeem__saved {
		font-size: 0.8em;
		padding-top: 2em;
		padding-bottom: 0.3em;
	}
</style>
