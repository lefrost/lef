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
        {
          name: `Overview`,
          emoji: `☕`,
          colour: `green`,
          fragments: [
            {
              label: `One-liner`,
              placeholder: `eg. great cafe in ABC.`,
              value: ``
            },
            {
              label: `Drinks`,
              placeholder: `eg. various types of great blend and straight coffee are served here.`,
              value: ``
            },
            {
              label: `Service`,
              placeholder: `eg. service here is warm and friendly.`,
              value: ``
            },
            {
              label: `Aesthetic`,
              placeholder: `eg. the lighting is tastefully dim, and jazz music is played in the background.`,
              value: ``
            }
          ]
        },
        {
          name: `Details`,
          emoji: `🎯`,
          colour: `red`,
          fragmments: [
            {
              label: `Facade`,
              placeholder: `eg. the cafe has a brick facade lined with greenery, easily spottable from the street.`,
              value: ``
            },
            {
              label: `Entrance`,
              placeholder: `eg. the entrance is a wooden door to the right of a glass pane.`,
              value: ``
            },
            {
              label: `Layout`,
              placeholder: `eg. the tables and bar are immediately visible upon entering.`,
              value: ``
            },
            {
              label: `Washroom`,
              placeholder: `eg. the washroom is at the back of the space, through a small door.`,
              value: ``
            },
            {
              label: `Counter`,
              placeholder: `eg. the counter is on the right when entering.`,
              value: ``
            },
            {
              label: `Solo`,
              placeholder: `eg. there are several two-seater tables suitable if you're solo.`,
              value: ``
            },
            {
              label: `Smoking`,
              placeholder: `eg. smoking is permitted.`,
              value: ``
            }
          ]
        },
        {
          name: `Recommendation`,
          emoji: `✨`,
          colour: `yellow`,
          fragments: [
            {
              label: `Drinks and/or food`,
              placeholder: `eg. any of the coffee choices are worth trying, but you can't go wrong with an Irish coffee here.`,
              value: ``
            } 
          ]
        }
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
              placeholder: `eg. great hotel in ABC.`,
              value: ``
            },
            {
              label: `Staff`,
              placeholder: `eg. staff was nice and professional, and front desk could speak decent English.`,
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
            {
              label: `Check-in/out time`,
              placeholder: `eg. check-in begins at 1500, and check-out is until 1000.`,
              value: ``
            },
            {
              label: `Check-in/out system`,
              placeholder: `eg. check-in/out is done at the front desk in the lobby.`,
              value: ``
            },
            {
              label: `Cleaning system`,
              placeholder: `eg. room cleaning can be expected, and you paste a magnetic strip on your door to request it.`,
              value: ``
            },
            {
              label: `Cleaning time`,
              placeholder: `eg. cleaning takes place between 1100 and 1400.`,
              value: ``
            },
          ]
        },
        {
          name: `Room`,
          emoji: `🛋️`,
          colour: `red`,
          fragments: [
            {
              label: `General aesthetic`,
              placeholder: `eg. simple but tasteful room design and furnishing.`,
              value: ``
            },
            {
              label: `Workspace`,
              placeholder: `eg. there is a desk and chair suitable for working.`,
              value: ``
            },
            {
              label: `Air conditioning`,
              placeholder: `eg. the air conditioning works well, with responsive temperature control.`,
              value: ``
            },
            {
              label: `Window`,
              placeholder: `eg. the window can be opened for fresh air.`,
              value: ``
            },
            {
              label: `Lighting`,
              placeholder: `eg. the yellow lights in the room make for good ambiance.`,
              value: ``
            },
            {
              label: `Bathroom layout`,
              placeholder: `eg. the bathroom has a good and decently-sized layout.`,
              value: ``
            },
            {
              label: `Water heating`,
              placeholder: `eg. the water heating works well, and the tub's temperature control uses a convenient one-knob design.`,
              value: ``
            },
            {
              label: `Closet and hangers`,
              placeholder: `eg. there's a small closet with three clothes hangers provided.`,
              value: ``
            },
            {
              label: `Amenities`,
              placeholder: `eg. towels, pyjamas and bathroom amenities are provided in the room.`,
              value: ``
            }
          ]
        },
        {
          name: `Breakfast`,
          emoji: `🥞`,
          colour: `orange`,
          fragments: [
            {
              label: `Type and quality`,
              placeholder: `eg. breakfast buffet is great, with a large spread.`,
              value: ``
            },
            {
              label: `Venue`,
              placeholder: `eg. breakfast is held at the 12th floor.`,
              value: ``
            },
            {
              label: `System`,
              placeholder: `eg. breakfast tickets are given at check-in, and you'll use one for each morning.`,
              value: ``
            }
          ]
        },
        {
          name: `Location`,
          emoji: `📍`,
          colour: `blue`,
          fragments: [
            {
              label: `Transport`,
              placeholder: `eg. ABC Station is a 5-minute walk away.`,
              value: ``
            },
            {
              label: `Shops`,
              placeholder: `a 7-11 convenient shop is across the street.`,
              value: ``
            },
            {
              label: `Other places`,
              placeholder: `eg. the XYZ Park is a 10-minute walk along the XYZ Lake, making for a nice walk.`,
              value: ``
            }
          ]
        },
      ]
    },
    {
      code: `konbini`,
      name: `Konbini`,
      sections: [
        {
          name: `Summary`,
          emoji: ``,
          colour: `green`,
          fragments: [
            {
              label: `One-liner`,
              placeholder: `eg. perfectly fine.`,
              value: ``
            },
            {
              label: `Convenience`,
              placeholder: `eg. convenient when passing through ABC Station via the north exit.`,
              value: ``
            },
            {
              label: `Size and selection`,
              placeholder: `eg. pretty small shop, but still has a decent selection.`,
              value: ``
            },
            {
              label: `Service`,
              placeholder: `eg. staff at the counter was nice and professional.`,
              value: ``
            }
          ]
        }
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