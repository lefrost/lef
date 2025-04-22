<!-- tabibito -->
<div class="container  grow--  col--  tabibito">
    <!-- text -->
    <div class="t-text">
      <a
        href="https://github.com/tabibitobyle"
        target="_blank"
        rel="noreferrer"
      >TABIBITO BY LÉ</a>:
      <span>Under construction.</span>
      Travel-centric data bank powering numerous Lefrost products.
    </div>

    <!-- back -->
    <a
      href="/"
      class="t-back"
    >
      {`← Return`}
    </a>
</div>

<style lang="scss">
	@import '../../assets/scss/all.scss';

  // tabibito

  .tabibito {
		width: calc(100% - 2em * 2);
		max-width: 1000px;
		padding: 3.5em 0 5em;
  }

  // text

  .t-text {
		font-size: 1.45em;

    > a {
      @include swish;
      @include clickable;
      opacity: 1;
      text-decoration: underline;
      min-width: 0;
      width: 0;

      &:hover {
        opacity: 0.5;
      }
    }

    > span {
      opacity: 0.5;
    }
  }

  // back

  .t-back {
    margin-top: 1em;
    font-size: 1.2em;
    opacity: 0.5;
    @include swish;
    @include clickable;

    &:hover {
      opacity: 1;
    }
  }
</style>