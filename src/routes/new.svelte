<script lang="ts">
  const ITEMS = [
    {
      code: `SUAVE.LA`,
      name: `Suave Arcade`,
      description: `Play skill-based games for money, with wagers powered by the Solana blockchain.`,
      link_text: `Website`,
      link_url: `https://suave.la`
    },
    {
      code: `@SUAVESEALS`,
      name: `Suave Seals`,
      description: `Solana NFT collection that earns revenue from the Suave Arcade. Art created in collaboration with <a href="https://twitter.com/cderecer"><u>Crsy</u></a>.`,
      link_text: `Marketplace`,
      link_url: `https://tensor.trade/trade/suaveseals`
    },
    {
      code: `BULLISH.LOL`,
      name: `Bullish`,
      description: `Simplified allowlist collabs for NFT projects and DAOs.`,
      link_text: `Website`,
      link_url: `https://bullish.lol`
    },
    // {
    //   code: `@BULLISHTSUYONEKO`,
    //   name: `Bullish Tsuyoneko`,
    //   description: `Solana NFT collection that gains allowlist opportunities from Bullish. Art created in collaboration with <a href="https://twitter.com/cderecer"><u>Crsy</u></a>.`,
    //   link_text: `Website`,
    //   link_url: `https://tensor.trade/trade/bullishtsuyoneko`
    // }
  ];

  let toggled_item_index = -1;
</script>

<!-- lefrost -->
<div class="container  grow--  col--  text  text-white--  lefrost">
  <!--  name -->
  <div class="l-name">
    LEFROST
  </div>

  <!-- heading -->
  <div class="l-heading">
    Portfolio as a<br />
    solo founder.
  </div>

  <!-- items -->
  <div class="container  stretch--  col--  l-items">
    {#each ITEMS as ITEM, ii}
      <!-- item -->
      <div 
        class="container  stretch--  col--  text  text-white--  card  white--  l-item"
        class:l-toggled--={toggled_item_index === ii}
        on:click={() => {
          try {
            if (toggled_item_index === ii) {
              toggled_item_index = -1;
            } else {
              toggled_item_index = ii;
            }
          } catch (e) {
            console.log(e);
          }
        }}
      >
        <!-- item -> code -->
        <div class="l-it__code">
          {@html ITEM.code || ``}
        </div>

        <!-- item -> name -->
        <div class="l-it__name">
          {@html ITEM.name || ``}
        </div>

        {#if toggled_item_index === ii}
          <!-- item -> description -->
          <div class="l-it__description">
            {@html ITEM.description || ``}
          </div>

          <!-- item -> link -->
          <a
            href={ITEM.link_url || null}
            target="_blank"
            rel="noreferrer"
            class="l-it__link"
          >
            {@html ITEM.link_text || ``} →
          </a>
        {/if}
      </div>
    {/each}
  </div>

  <!-- text -->
  <div class="l-text">
    Quiet
		cafes,
		casual
		<a href="https://chess.com/member/lefroste" target="_blank" rel="noreferrer">chess</a>,
		and classy
		<a href="https://last.fm/user/lefrst" target="_blank" rel="noreferrer">jazz</a>.
		Many episodes of
		<a href="https://anilist.co/user/lefrost/animelist" target="_blank" rel="noreferrer">anime</a>,
		many chapters of
		<a href="https://anilist.co/user/lefrost/mangalist" target="_blank" rel="noreferrer">manga</a>,
		many hours of
		gaming,
		many miles of
		travel.
		And in between, there's pragmatic
		<a href="https://github.com/lefrost" target="_blank" rel="noreferrer">code</a>,
		experimental design,
		and a couple commitments to show for it.
		<br /><br /><br /><br />
		My portfolio as a solo founder, in descending order by size of scope:
		<br /><br />
		• Suave, <a href="https://suave.la" target="_blank" rel="noreferrer">suave.la</a><br />
		• Loop, <a href="https://intheloop.fyi" target="_blank" rel="noreferrer">intheloop.fyi</a>
		<br /><br /><br /><br />
		I'm on
		<a href="https://discords.com/bio/p/lefrost" target="_blank" rel="noreferrer">Discord</a>
		and
		<a href="https://twitter.com/lefrost" target="_blank" rel="noreferrer">Twitter</a>,
		<br /><br />
		As of November 2023.
  </div>

  <!-- quote -->
  <div class="l-quote">
    難波津に 咲くやこの花 冬ごもり 今を春べと 咲くやこの花。
  </div>
</div>

<style lang="scss">
	@import '../assets/scss/all.scss';
  // tba: (global css) colours
  // tba: (global css) text kerning

  // lefrost

  .lefrost {
    // tba
  }

  // name

  .l-name {
    // tba
  }

  // heading

  .l-heading {
    // tba
  }

  // items

  .l-items {
    // tba
  }

  // item

  .l-item.card {
    // tba

    &.l-toggled-- {
      // tba
    }
  }

  // item -> code

  .l-it__code {
    // tba
  }

  // item -> name

  .l-it__name {
    // tba
  }

  // item -> description

  .l-it__description {
    // tba
  }

  // item -> link

  .l-it__link {
    // tba
  }

  // text

  .l-text {
    // tba

    > a {
      // tba
    }
  }

  // quote

  .l-quote {
    // tba
  }
</style>