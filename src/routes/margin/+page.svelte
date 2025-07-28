<script lang="ts">
  // vars

  let leverage = 100;
  let risk = 10;
  let increment = 0.1;
  let price = 200; 
  let rows = []; // [{diff, value, is_highlighted<true, false>}]

  // dynamics

  $: if (leverage || risk || increment || price) {
    generateRows();
  }

  // funcs

  function generateRows() {
    try {
      rows = [];

      if ((!isNaN(leverage)) && (leverage > 0) && (!isNaN(risk)) && (risk > 0) && (!isNaN(increment)) && (increment > 0) && (!isNaN(price) && (price > 0))) {
        for (let i = increment; i <= increment * 10; i += increment) {
          let diff = Number(i.toFixed(increment.toString().length));
          let margin = Number((risk / (((price + i * 0.5) - (price - i * 0.5)) / (price - i * 0.5)) / leverage).toFixed(2)) || 0;

          rows.push({
            diff,
            margin,
            is_highlighted: ((diff === (increment * 5)) || (diff === (increment * 10)))
          });
        }
      }
    } catch (e) {
      console.log(e);
      rows = [];
    }
  }
</script>

<!-- margin -->
<div class="container  grow--  col--  margin">
  <!-- heading -->
  <div class="m-heading">
    Margin calculator
  </div>

  <!-- section (leverage) -->
  <div class="container  stretch--  col--  m-section">
    <!-- section (leverage) -> label -->
    <div class="m-se__label">
      Leverage x
    </div>

    <!-- section (leverage) -> input -->
    <input
      type="number"
      bind:value={leverage}
      placeholder="eg. 100"
      class="container  stretch--  row--  row-left--  text  text-white--  m-se__input"
    />
  </div>

  <!-- section (risk) -->
  <div class="container  stretch--  col--  m-section">
    <!-- section (risk) -> label -->
    <div class="m-se__label">
      Max risk USD
    </div>

    <!-- section (risk) -> input -->
    <input
      type="number"
      bind:value={risk}
      placeholder="eg. 10"
      class="container  stretch--  row--  row-left--  text  text-white--  m-se__input"
    />
  </div>

  <!-- section (increment) -->
  <div class="container  stretch--  col--  m-section">
    <!-- section (increment) -> label -->
    <div class="m-se__label">
      Diff increment USD
    </div>

    <!-- section (increment) -> input -->
    <input
      type="number"
      bind:value={increment}
      placeholder="eg. 0.1"
      class="container  stretch--  row--  row-left--  text  text-white--  m-se__input"
    />
  </div>

  <!-- section (price) -->
  <div class="container  stretch--  col--  m-section">
    <!-- section (price) -> label -->
    <div class="m-se__label">
      Average price USD
    </div>

    <!-- section (price) -> input -->
    <input
      type="number"
      bind:value={price}
      placeholder="eg. 200"
      class="container  stretch--  row--  row-left--  text  text-white--  m-se__input"
    />
  </div>

  <!-- rows -->
  <div class="container  stretch--  col--  m-rows">
    {#each rows as row}
      <!-- row -->
      <div
        class="container  stretch--  row--  row-left--  row-wrap--  text  m-row"
        class:text-yellow--={row.is_highlighted}
        class:text-white--={!row.is_highlighted}
      >
        <!-- row -> diff -->
        <div class="m-ro__diff">
          {row.diff || `n/a`}:
        </div>

        <!-- row -> value -->
        <div class="m-ro__value">
          ${row.margin || `n/a`}
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
	@import '../../assets/scss/all.scss';

  // margin

  .margin {
		width: calc(100% - 2em * 2);
		max-width: 300px;
		padding: 3.5em 0 5em;
  }

  // heading

  .m-heading {
    font-size: 1.5em;
  }

  // section

  .m-section {
    padding-top: 1em;
  }

  .m-se__label {
    font-size: 0.9em;
    opacity: 0.5;
  }

  .m-se__input {
    margin-top: 0.3em;
    font-size: 1em;
    border: 0.12em solid rgba($white-hex, 0.5);
    background: none;
    outline: none;
    padding: 0.3em 0.6em;

    &::placeholder {
      color: $white-hex;
      opacity: 0.5;
    }
    
    &::-webkit-outer-spin-button,
    &::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }

  // rows

  .m-rows {
    padding-top: 2em;
    @include parent-col-bottom(0.3em);
  }

  // row

  .m-row {
    // none
  }

  .m-ro__diff {
    font-size: 1em;
    padding-right: 0.5em;
  }

  .m-ro__value {
    opacity: 0.5;
  }
</style>