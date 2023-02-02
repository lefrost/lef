<div class="container  col--  col-middle--  landing">
	<img src="/images/dove.png" />
	<span>LÉFROST IS A</span>
	<span><b>DESIGNER.</b></span>
	<span><b>DEVELOPER.</b></span>
	<span>& <b>FOUNDER.</b></span>
	<br /><br /><br /><br />
	<a href="https://twitter.com/lefrst" target="_blank" class="link">TWITTER</a>
	<a href="https://github.com/lefrst" target="_blank" class="link">GITHUB</a>
	<a href="/" class="link">LEF.LA</a>
	<br /><br /><br /><br />
	<a href="https://suaveseals.com" target="_blank" class="link"><b>@SUAVESEALS</b></a>
</div>

<style lang="scss">
	@import '../assets/scss/all.scss';

	.landing {
		max-width: calc(100% - $wrapper-gutter * 2);
		background-color: $black-hex;
		color: $white-hex;
		padding: 2em;
		padding-right: 3em;
		position: relative;
		font-family: $ff-base;

		> img {
			width: calc(120px * 0.5);
			position: absolute;
			top: 3em;
			right: 2em;

			@media (min-width: $bp-sm) {
				width: 120px;
			}
		}

		> span {
			font-size: 3.5em;
		}

		> a {
			color: $white-hex;
			font-size: 2.2em;
			margin: 0.02em 0;
		}
	}
</style>
