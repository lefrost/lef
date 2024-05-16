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
      review_output = ``;

      if (selected_type) {
        for (let section of selected_type.sections) {
          if (section.fragments.some(f => f.value.trim())) {
            review_output += `\r\n\r\n${section.emoji}`;

            for (let fragment of section.fragments) {
              if (fragment.value.trim()) {
                review_output += ` ${fragment.value.trim() || ``}`;
              }
            }
          }
        }
      }

      review_output = review_output.replace(`\r\n\r\n`, ``);
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
                  class="container  stretch--  col--  r-se__fragmment"
                  class:r-left--={fi % 2 === 0}
                  class:r-right--={fi % 2 !== 0}  
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
                utils.copyToClipboard(review_output);
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
              {review_output || ``}
            </div>
          </div>
        </div>
      {/if}
    {/if}
  </div>
</div>

<style lang="scss">  
	@import '../../assets/scss/all.scss';

  // reviewsy container

  .reviewsy-container {
    // tba
  }

  // reviewsy

  .reviewsy {
    // tba
  }

  // top

  .r-top {
    // tba
  }

  // top -> heading

  .r-to__heading {
    // tba
  }

  // top -> types

  .r-to__types {
    // tba
  }

  // top -> type

  .r-to__type.card {
    // tba

    > div {
      // tba
    }

    &.r-selected-- {
      // tba

      > div {
        // tba
      }
    }
  }

  // sections

  .r-sections {
    // tba
  }

  // section

  .r-section {
    // tba
  }

  // section -> fragments

  .r-se__fragments {
    // tba
  }

  // section -> fragment

  .r-se__fragment {
    // tba

    &.r-left-- {
      // tba
    }

    &.r-right-- {
      // tba
    }
  }

  .r-se__fr-label {
    // tba
  }

  .r-se__fr-input.card {
    // tba

    &::placeholder {
      // tba
    }
  }

  // output

  .r-output {
    // tba
  }

  // output -> button
  
  .r-ou__button.card {
    // tba

    > div {
      // tba
    }
  }

  // output -> review

  .r-ou__review.card {
    // tba
  }

  .r-ou__re-label {
    // tba
  }

  .r-ou__re-text {
    // tba
  }
</style>