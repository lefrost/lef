<script lang="ts">
	// imports

	import { Ollesvege } from 'ollesvege';
	import _ from 'lodash';
	import { onDestroy, onMount } from 'svelte';
	import Loader from '../components/Loader.svelte';
	import Placeholder from '../components/Placeholder.svelte';
	import * as api from '../assets/js/api';

	// exports
	// none

	// consts

	const IN_MAINTENANCE = false;

	const ITEMS = [
		// {
		// 	code: `next`,
		// 	name: `What's next?`,
		// 	label: `...`,
		// 	date: null,
		// 	url: null,
		// 	is_active: false
		// },
		// {
		// 	code: `tabibito`,
		// 	name: `Tabibito by Lé`,
		// 	label: `Development`,
		// 	date: null,
		// 	url: `/tabibito`,
		// 	is_active: true
		// },
		// { // todo: bulletin
		// 	code: `bulletin_now`,
		// 	name: `Bulletin.now`,
		// 	label: `Development`,
		// 	date: null,
		// 	url: null,
		// 	is_active: false
		// },
		{
			code: `glance_la`,
			name: `Glance.la`,
			label: `Cryptocurrency`,
			date: `Apr 2025`,
			url: `https://glance.la`,
			is_active: true
		},
		{
			code: `frens_my`,
			name: `Frens.my`,
			label: `Social`,
			date: `Sep 2024`,
			url: `https://frens.my`,
			is_active: true
		},
		{
			code: `buggy_so`,
			name: `Buggy.so`,
			label: `Development`,
			date: `Aug 2024`,
			url: `https://buggy.so`,
			is_active: true
		},
		{
			code: `tsuyoneko`,
			name: `@tsuyoneko`,
			label: `NFTs`,
			date: `Jan 2024`,
			url: `https://tensor.trade/trade/tsuyoneko`,
			is_active: true
		},
		{
			code: `bullish_lol`,
			name: `Bullish.lol`,
			label: `Cryptocurrency`,
			date: `Dec 2023`,
			url: `https://bullish.lol`,
			is_active: true
		},
		{
			code: `intheloop_fyi`,
			name: `Intheloop.fyi`,
			label: `Cryptocurrency`,
			date: `Mar 2022`,
			url: null,
			is_active: false
		},
		{
			code: `suaveseals`,
			name: `@suaveseals`,
			label: `NFTs`,
			date: `Apr 2021`,
			url: `https://tensor.trade/trade/suaveseals`,
			is_active: true
		},
		{
			code: `suave_la`,
			name: `Suave.la`,
			label: `Cryptocurrency`,
			date: `Jan 2021`,
			url: `https://suave.la`,
			is_active: true
		},
		{
			code: `clients`,
			name: `+5 years of client work`,
			label: `Various`,
			date: `2017-2021`,
			url: null,
			is_active: false
		}
	];

	const LINKS = [
		{
			code: `adobe`,
			name: `Adobe`,
			url: `https://community.adobe.com/t5/user/viewprofilepage/user-id/3218095`
		},
		{
			code: `anilist`,
			name: `Anilist`,
			url: `https://anilist.co/user/lefrost`
		},
		{
			code: `behance`,
			name: `Behance`,
			url: `https://behance.net/ollefrost`
		},
		{
			code: `chess_com`,
			name: `Chess.com`,
			url: `https://chess.com/member/lefroste`
		},
		{
			code: `discord`,
			name: `Discord`,
			url: `https://discord.bio/lefrost`
		},
		{
			code: `dribbble`,
			name: `Dribbble`,
			url: `https://dribbble.com/lefrost`
		},
		{
			code: `email`,
			name: `email`,
			url: `mailto:elcasaboxi@gmail.com`
		},
		// {
		// 	code: `facebook`,
		// 	name: `Facebook`,
		// 	url: `tba`
		// },
		{
			code: `github`,
			name: `GitHub`,
			url: `https://github.com/lefrost`
		},
		{
			code: `gravatar`,
			name: `Gravatar`,
			url: `https://gravatar.com/ollefrost`
		},
		{
			code: `hacker_news`,
			name: `Hacker News`,
			url: `https://news.ycombinator.com/user?id=lefrost`
		},
		// {
		// 	code: `instagram`,
		// 	name: `Instagram`,
		// 	url: `tba`
		// },
		// {
		// 	code: `kitsu`,
		// 	name: `Kitsu`,
		// 	url: `https://kitsu.app/users/ollefrost`
		// },
		{
			code: `last_fm`,
			name: `Last.fm`,
			url: `https://last.fm/user/lefrst`
		},
		{
			code: `linkedin`,
			name: `LinkedIn`,
			url: `https://linkedin.com/in/lefrost`
		},
    // {
    //   code: `hoyolab`,
    //   name: `HoYoLAB`,
    //   url: `https://www.hoyolab.com/accountCenter/postList?id=19336852`
    // },
		{
			code: `medium`,
			name: `Medium`,
			url: `https://medium.com/@lefrost`
		},
		// {
		// 	code: `myanimelist`,
		// 	name: `MyAnimeList`,
		// 	url: `https://myanimelist.net/profile/ollefrost`
		// },
		{
			code: `npm`,
			name: `npm`,
			url: `https://npmjs.com/~lefrost`
		},
		{
			code: `product_hunt`,
			name: `Product Hunt`,
			url: `https://producthunt.com/@lefrost`
		},
		{
			code: `reddit`,
			name: `Reddit`,
			url: `https://reddit.com/user/ollefrost`
		},
		{
			code: `spotify`,
			name: `Spotify`,
			url: `https://open.spotify.com/user/gf4tasps3qmm1igne6th9wyj2?si=bd1117379a434290`
		},
		{
			code: `stackoverflow`,
			name: `StackOverflow`,
			url: `https://stackoverflow.com/users/8919391/lefrost`
		},
		{
			code: `stats_fm`,
			name: `Stats.fm`,
			url: `https://stats.fm/lefrost`
		},
		{
			code: `steam`,
			name: `Steam`,
			url: `https://steamcommunity.com/id/lefrst`
		},
    // {
    //   code: `teamfight_tactics`,
    //   name: `Teamfight Tactics`,
    //   url: `https://mobalytics.gg/tft/profile/sg/lefrost-chan/overview`
    // },
		// {
		// 	code: `threads`,
		// 	name: `Threads`,
		// 	url: `tba`
		// },
		{
			code: `twitter`,
			name: `Twitter / X`,
			url: `https://twitter.com/lefrost`
		},
		{
			code: `volt_fm`,
			name: `Volt.fm`,
			url: `https://volt.fm/lefrost`
		},
		{
			code: `wikipedia`,
			name: `Wikipedia`,
			url: `https://en.wikipedia.org/wiki/User:Lefrost`
		},
		// {
		// 	code: `youtube`,
		// 	name: `YouTube`,
		// 	url: `tba`
		// }
	];

	// vars

	let is_active = false;
	let data;
	let user;

	// dynamics
	// none

	// mount

	onMount(async () => {
		if (IN_MAINTENANCE) {
			return;
		}
		
		if (!is_active) {
			is_active = true;
		}

		await getData();
	});

	onDestroy(() => {
		try {
			is_active = false;	
		} catch (e) {
			console.log(e);
		}
	});

	// jobs

	let jobs = [];
	// let jobs = [`get_data`];

	async function getData() {
		try {
			jobs.push(`get_data`);
			jobs = jobs;

			// user = await api.getCurrentUser() || null;

			// if (!(user && user.id)) {
			// 	user = null;
			// }

			// data = await api.restPost({
			// 	url: `load`,
			// 	payload: {
			// 		type: `landing_main`,
			// 		obj: {
			// 			user_id: user ? user.id : ``
			// 		}
			// 	}
			// }) || null;
			
			data = `todo`;

			if (data) {
				// todo: data
			}

			jobs = jobs.filter(j => j !== `get_data`);
		} catch (e) {
			console.log(e);
		}
	}

	// execs
	// none

	// funcs
	// none
</script>

<!-- landing -->
<div
	class="container  grow--  col--  col-centre--  col-middle--  text  text-white--  landing"
>
	{#if IN_MAINTENANCE}
		<Placeholder
			is_loading={false}
			text="In maintenance."
			colour="red"
		/>
	{:else}
		<!-- note: sample component - https://github.com/lefrost/ollesvege -->
		<!-- <Ollesvege
			sample_text="Testing Ollesvege component"
		/> -->

		<!-- bio -->
		<div class="l-bio">
			LEFROST: Solo founder, fullstack software engineer, multidisciplinary designer. Launched 5+ indie projects. Have built in art, cryptocurrency, desktop apps, development, ecommerce, education, entertainment, F&B, fintech, gaming, leisure, insurance, mobile apps, music, news, NFTs, productivity, search engines, social, telco, travel, web apps, and ∞ more niches. Extensive experience working with both large multinational teams and completely solo, both on-site and remotely. Bachelor at 17, now early 20s. Working globally and remotely while perpetually solo travelling.
			<!-- Shipping multiple projects every month. -->
			Selected portfolio below. Reach through
			<a href={(LINKS.find(L => L.code === `twitter`) || {}).url || null} target="_blank">Twitter / X</a>,
			<a href={(LINKS.find(L => L.code === `discord`) || {}).url || null} target="_blank">Discord</a>, or
			<a href={(LINKS.find(L => L.code === `email`) || {}).url || null} target="_blank">email</a>.
		</div>

		<!-- items -->
		<div class="container  grow--  stretch--  col--  l-items">
			{#each ITEMS as ITEM}
				<!-- item -->
				<a
					href={ITEM.url || null}
					target={(ITEM.url || ``).startsWith(`/`) ? null : `_blank`}
					class="container  stretch--  row--  row-left--  l-item"
					class:l-faded--={!ITEM.is_active}
				>
					<div>{ITEM.name || `n/a`}</div>
					<div class="visibility  sm-up--">{ITEM.label || `n/a`}</div>
					<div class="container  grow--  row--  row-right--">{ITEM.date ? (ITEM.date || `n/a`) : `Now building`}</div>
			</a>
			{/each}
		</div>

		<!-- other -->
		<div class="l-other">
			Off hours: Watched 6,000+ episodes of
			<a href={(LINKS.find(L => L.code === `anilist`) || {}).url || null} target="_blank" rel="noreferrer">anime</a>.
			Visited 400+ cafes.
			<!-- Active 280+ day streak of
			<a href={(LINKS.find(L => L.code === `github`) || {}).url || null} target="_blank">coding</a>. -->
			Played 4,000+ games of
			<a href={(LINKS.find(L => L.code === `chess_com`) || {}).url || null} target="_blank" rel="noreferrer">chess</a>.
			Played ∞ hours of
			<a href={(LINKS.find(L => L.code === `steam`) || {}).url || null} target="_blank" rel="noreferrer">games</a>.
			Listened to 130,000+ tracks' worth of
			<a href={(LINKS.find(L => L.code === `last_fm`) || {}).url || null} target="_blank" rel="noreferrer">jazz</a>.	 
			<!-- Active 430+ day streak of learning foreign languages. -->
			Read 16,000+ chapters of
			<a href={(LINKS.find(L => L.code === `anilist`) || {}).url || null} target="_blank" rel="noreferrer">manga</a>.
			Visited 200+ cities on my travels. Travelled to all 47 prefectures of Japan in one trip. Lived with 6+ cats. Getting 7+ hours of sleep every night.
		</div>

		<!-- links -->
		<div class="l-links">
			Links:
			{#each LINKS as LINK, li}
				<a href={LINK.url || null} target="_blank">{LINK.name || `n/a`}</a>{(li < (LINKS.length - 1)) ? `, ` : ``}
			{/each}
		</div>
	{/if}
</div>

<style lang="scss">
	@import '../assets/scss/all.scss';

	// landing

	.landing {
		width: calc(100% - 2em * 2);
		max-width: 1000px;
		padding: 3.5em 0 5em;
	}

	// bio

	.l-bio {
		text-align: left;
		font-size: 1.45em;
		
		> a {
			@include swish;
			@include clickable;
			text-decoration: underline;

			&:hover {
				opacity: 0.8;
			}
		}
	}

	// items

	.l-items {
		padding-top: 4em;
		padding-bottom: 8em;
	}

	// item

	.l-item {
		> div {
			font-size: 1.45em;
      white-space: nowrap;

			&:nth-of-type(1) {
				width: 28em;
				padding-right: 0.5em;
			}

			&:nth-of-type(2) {
				width: 20em;
				padding-right: 0.5em;
        opacity: 0.5;
			}

			&:nth-of-type(3) {
				width: 9em;
			}
		}

		&:not(.l-faded--) {
			@include swish;
			@include clickable;

			&:hover {
				opacity: 0.8;
			}
		}

		&.l-faded-- {
			opacity: 0.35;
		}
	}

	// other

	.l-other {
		font-size: 1.32em;
		text-align: left;

		> a {
			@include swish;
			@include clickable;
			text-decoration: underline;

			&:hover {
				opacity: 0.8;
			}
		}
	}

	// links

	.l-links {
		padding-top: 1.5em;
		font-size: 1.2em;
		opacity: 0.5;
		text-align: left;

		> a {
			@include swish;
			@include clickable;
			text-decoration: underline;

			&:hover {
				opacity: 0.8;
			}
		}
	}
</style>
