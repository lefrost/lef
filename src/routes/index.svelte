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
      description: `Solana NFT collection that earns revenue from the Suave Arcade. Art created in collaboration with <a href="https://twitter.com/cdercer" target="_blank" rel="noreferrer"><u>Crsy</u></a>.`,
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
    {
      code: `INTHELOOP.FYI`,
      name: `Loop`,
      description: `NFT news & social as-a-service. Content produced in collaboration with <a href="https://twitter.com/the_sol_army" target="_blank" rel="noreferrer"><u>The Sol Army</u></a>.`,
      link_text: `Website`,
      link_url: `https://intheloop.fyi`
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
        class="container  stretch--  col--  l-item"
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
            on:click|stopPropagation={() => {
              // none
            }}
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
		<br /><br />
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

  // lefrost

  .lefrost {
    padding: 3em $wrapper-gutter 6em;
    width: calc(100% - $wrapper-gutter * 2);
    max-width: calc(350px - $wrapper-gutter * 2);
  }

  // name

  .l-name {
    font-size: 0.75em;
    opacity: 0.7;
    letter-spacing: 0.1em;
  }

  // heading

  .l-heading {
    font-size: 1.8em;
    padding-top: 0.2em;
  }

  // items

  .l-items {
    padding: 2.5em 0;
    @include parent-col-bottom(0.6em);
  }

  // item

  .l-item {
    padding: 0.9em 0.9em;
    background-color: rgba($white-hex, 0);
    border: 0.1em solid rgba($white-hex, 0.4);
    @include swish;
    cursor: pointer;

    &.l-toggled-- {
      background-color: rgba($white-hex, 0.05);
      border: 0.1em solid rgba($white-hex, 0.8);
    }

    &:hover {
      background-color: rgba($white-hex, 0.1);
      border: 0.1em solid rgba($white-hex, 1);
    }
  }

  // item -> code

  .l-it__code {
    font-size: 0.55em;
    opacity: 0.7;
    letter-spacing: 0.1em;
  }

  // item -> name

  .l-it__name {
    font-size: 1.2em;
    padding-top: 0.05em;
  }

  // item -> description

  .l-it__description {
    font-size: 0.75em;
    opacity: 0.5;
    padding: 0.8em 0;
  }

  // item -> link

  .l-it__link {
    font-size: 0.8em;
    text-decoration: underline;
    @include swish;

    &:hover {
      opacity: 0.8;
    }
  }

  // text

  .l-text {
    font-size: 0.85em;
    line-height: 1.2em;

    > a {
      text-decoration: underline;
      @include swish;
      
      &:hover {
        opacity: 0.8;
      }
    }
  }

  // quote

  .l-quote {
    font-size: 1em;
    padding-top: 2.5em;
  }
</style>