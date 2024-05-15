<script lang="ts">
  // imports
	import { onDestroy, onMount } from 'svelte';
  import * as utils from '../../assets/js/utils';
  
	// exports
	// none
  
	// consts
  
  const TYPES = [
    {
      code: `cafe`,
      name: `Cafe`,
      sections: [
        // tba
      ]
    },
    {
      code: `hotel`,
      name: `Hotel`,
      sections: [
        {
          name: `Overview`,
          emoji: `🛏️`,
          colour: `green`,
          fragments: [
            {
              label: `One-liner`,
              placeholder: `eg. great hotel north of ABC Station.`,
              value: ``
            },
            {
              label: `Staff`,
              placeholder: `eg. staff was nice and professional.`,
              value: ``
            },
            {
              label: `General comments`,
              placeholder: `eg. overall, good value for money.`,
              value: ``
            }
          ]
        },
        {
          name: `Service`,
          emoji: `🛎️`,
          colour: `yellow`,
          fragments: [
            // tba
          ]
        },
        {
          name: `Room`,
          emoji: `🛋️`,
          colour: `red`,
          fragments: [
            // tba
          ]
        },
        {
          name: `Breakfast`,
          emoji: `🥞`,
          colour: `orange`,
          fragments: [
            // tba
          ]
        },
        {
          name: `Location`,
          emoji: `📍`,
          colour: `blue`,
          fragments: [
            // tba
          ]
        },
      ]
    },
    {
      code: `konbini`,
      name: `Konbini`,
      sections: [
        // tba
      ]
    }
  ];

  // vars

  let selected_type = utils.clone(TYPES[0]);
  let review_output = ``;

  // dynamics
  
  $: if (selected_type) {
    try {
      // tba: update review output
    } catch (e) {
      console.log(e);
    }
  }

  // mount

  onMount(() => {
    try {
      // tba
    } catch (e) {
      console.log(e);
    }
  });

  onDestroy(() => {
    try {
      // none
    } catch (e) {
      console.log(e);
    }
  });

  // jobs
  // none

  // execs
  // none

  // funcs
  // none
</script>

<!-- tba: html -->

<style lang="scss">  
	@import '../../assets/scss/all.scss';

  // tba: css
</style>