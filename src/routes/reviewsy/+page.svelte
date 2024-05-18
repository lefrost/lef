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
          fragments: [
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
              label: `Menu`,
              placeholder: `eg. a separate English menu is available on request.`,
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
              label: `Key system`,
              placeholder: `eg. your room key is a normal door key, which you should leave at the front desk when leaving the hotel.`,
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
            },
            {
              label: `Wifi`,
              placeholder: `eg. the wifi is strong, with decent upload speed.`,
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
              placeholder: `a 7-11 convenience shop is across the street.`,
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
      review_output = ``;

      if (selected_type) {
        for (let section of selected_type.sections) {
          if (section.fragments.some(f => f.value.trim())) {
            review_output += `<br /><br />${section.emoji || ``}`;

            for (let fragment of section.fragments) {
              if (fragment.value.trim()) {
                review_output += `${(review_output.length === 0) ? `` : ` `}${fragment.value.trim() || ``}`;
              }
            }
          }
        }
      }

      review_output = review_output.replace(`<br /><br />`, ``); // note: replace only first instance of newline
    } catch (e) {
      console.log(e);
      review_output = ``;
    }
  }

  // mount

  onMount(() => {
    try {
      // none
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

<!-- reviewsy container -->
<div class="container  stretch--  col--  col-centre--  text  text-reviewsy-white--  reviewsy-container">
  <!-- reviewsy -->
  <div class="container  col--  col-centre--  reviewsy">
    <!-- top -->
    <div class="container  stretch--  col--  col-centre--  r-top">
      <!-- top -> heading -->
      <div class="r-to__heading">
        Reviewsy
      </div>

      <!-- top -> types -->
      <div class="container  stretch--  col--  col-centre--  r-to__types">
        {#each TYPES as TYPE}
          <!-- type -->
          <div
            class="container  stretch--  row--  row-centre--  text  text-reviewsy-white--  card  reviewsy-white--  r-to__type"
            class:r-selected--={selected_type && (selected_type.code === TYPE.code)}
            on:click={() => {
              try {
                selected_type = utils.clone(TYPE);
              } catch (e) {
                console.log(e);
              }
            }}
          >
            <div>{TYPE.name || `n/a`}</div>
          </div>
        {/each}
      </div>
    </div>

    {#if selected_type}
      <!-- sections -->
      <div class="container  stretch--  col--  col-centre--  r-sections">
        {#each selected_type.sections as section, si}
          <!-- section -->
          <div class="container  stretch--  col--  col-centre--  text  text-reviewsy-{section.colour || `white`}--  r-section">
            <!-- section -> name -->
            <div class="r-se__name">
              {section.name || `n/a`}
            </div>

            <!-- section -> fragments -->
            <div class="container  stretch--  col--  col-centre--  r-se__fragments">
              {#each section.fragments as fragment, fi}
                <!-- fragment -->
                <div
                  class="container  stretch--  col--  r-se__fragment"
                  class:r-left--={fi % 2 === 0}
                  class:r-right--={fi % 2 !== 0}
                  class:r-highlighted--={fragment.value.trim()}
                >
                  <!-- fragment -> label -->
                  <div class="r-se__fr-label">
                    {fragment.label || `n/a`}
                  </div>

                  <!-- fragment -> input -->
                  <textarea
                    bind:value={selected_type.sections[si].fragments[fi].value}
                    placeholder={fragment.placeholder || `n/a`}
                    class="container  grow--  stretch--  text  text-reviewsy-{section.colour}--  card  reviewsy-{section.colour}--  r-se__fr-input"
                  />
                </div>
              {/each}
            </div>
          </div>
        {/each}
      </div>

      {#if review_output.trim()}
        <!-- output -->
        <div class="container  stretch--  col--  col-centre--  r-output">
          <!-- output -> button (copy) -->
          <div 
            class="container  stretch--  row--  row-centre--  text  text-reviewsy-green--  card  reviewsy-green--  r-ou__button"
            on:click={() => {
              try {
                utils.copyToClipboard(review_output.replaceAll(`<br />`, `\r\n`));
              } catch (e) {
                console.log(e);
              }
            }}  
          > 
            <div>Copy to clipboard</div>
          </div>

          <!-- output -> review -->
          <div class="container  stretch--  col--  text  text-reviewsy-green--  card  reviewsy-green--  r-ou__review">
            <!-- output -> review -> label -->
            <div class="r-ou__re-label">
              Full review
            </div>

            <!-- output -> review -> text -->
            <div class="r-ou__re-text">
              {@html review_output || ``}
            </div>
          </div>
        </div>
      {/if}
    {/if}
  </div>
</div>

<style lang="scss">  
	@import '../../assets/scss/all.scss';

  @mixin reviewsy-heading {
    letter-spacing: 0.3em;
    text-transform: uppercase;
  }

  // reviewsy container

  .reviewsy-container {
    background-color: #{$reviewsy-black-hex};
    padding: 1em 0;
  }

  // reviewsy

  .reviewsy {
    padding: 2em 0;
    padding-bottom: 8em;
    width: calc(100% - $wrapper-gutter);
    max-width: calc(300px - $wrapper-gutter);
    @include parent-col-bottom(3em);

    * {
      font-family: $ff-belanosima;
    }
  }

  // top

  .r-top {
    // none
  }

  // top -> heading

  .r-to__heading {
    font-size: 0.7em;
    @include reviewsy-heading;
  }

  // top -> types

  .r-to__types {
    padding-top: 0.8em;
    @include parent-col-bottom(0.4em);
  }

  // top -> type

  .r-to__type.card {
    padding: 0.35em 0.6em 0.3em;
    @include hover-forward(1.04);
    @include clickable;
    --bg-a1: 0;
    --bg-a2: 0;
    --bd-a: 0.2;
    --bd-w: 0.1em;

    > div {
      font-size: 0.95em;
      opacity: 0.5;
    }

    &.r-selected-- {
      --bd-a: 0.5;
      --bg-a1: 0.2;
      --bg-a2: 0.2;

      > div {
        opacity: 1;
      }
    }
  }

  // sections

  .r-sections {
    @include parent-col-bottom(2em);
  }

  // section

  .r-section {
    // none
  }

  // section -> name

  .r-se__name {
    @include reviewsy-heading;
    font-size: 0.65em;
  }

  // section -> fragments

  .r-se__fragments {
    padding-top: 0.6em;
    @include parent-col-bottom(-1.1em);
  }

  // section -> fragment

  .r-se__fragment {
    position: relative;

    &.r-left-- {
      margin-left: -0.3em;
      transform: rotate(1deg);
    }

    &.r-right-- {
      margin-right: -0.3em;
      transform: rotate(-1deg);
    }

    &.r-highlighted-- {
      // none

      > .r-se__fr-input.card {
        --bd-a: 1;
      }
    }
  }

  .r-se__fr-label {
    @include reviewsy-heading;
    font-size: 0.6em;
    opacity: 0.5;
    position: absolute;
    top: 1.2em;
    left: 1.2em;
    z-index: 1;
  }

  .r-se__fr-input.card {
    @include card-fill(#{$reviewsy-black});
    font-size: 0.75em;
    padding: 0.85em;
    padding-top: 1.9em;
    height: 5em;
    --bd-w: 0.1em;
    --bd-a: 0.2;
    resize: none;

    &::placeholder {
      opacity: 0.15;
      color: inherit;
    }
  }

  // output

  .r-output {
    @include parent-col-bottom(0.5em);
  }

  // output -> button
  
  .r-ou__button.card {
    --bg-a1: 0.2;
    --bg-a2: 0.2;
    --bd-w: 0.1em;
    --bd-a: 1;
    padding: 0.35em 0.6em 0.3em;

    > div {
      font-size: 1.05em;
    }
  }

  // output -> review

  .r-ou__review.card {
    padding: 0.7em;
    @include card-fill(#{$reviewsy-black});
    --bd-w: 0.1em;
    --bd-a: 1;
  }

  .r-ou__re-label {
    @include reviewsy-heading;
    font-size: 0.6em;
    opacity: 0.5;
  }

  .r-ou__re-text {
    padding-top: 0.4em;
    font-size: 0.7em;
  }
</style>