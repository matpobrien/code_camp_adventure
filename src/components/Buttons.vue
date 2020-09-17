<template>
  <div id="container">
    <div id="buttons-container">
      <button
        v-for="choice in phase.choices"
        :key="choice.title"
        @click="makeDecision(choice.next, choice.learn, choice.item)"
        @mouseenter="hover = true"
        @mouseleave="hover = false"
      >
        {{ choice.title }}
        <template v-if="hover">
          <div id="impacts" v-if="choice.impacts">
            <div v-for="impact in choice.impacts" :key="impact.id">
              {{ impact.title }}
            </div>
          </div>
        </template>
      </button>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hover: false,
        loading: false,
        // impacts: [],
      };
    },
    methods: {
      finished() {
        this.$emit("finished", {
          next: this.phase.next,
        });
      },
      makeDecision(next, language, item) {
        this.$emit("finished", {
          next,
          language,
          item,
        });
      },
    },

    props: {
      phase: {
        type: Object,
        required: true,
      },
    },
    watch: {},

    // impactValues() {
    //   if (impacts.)
    // }
    // },
  };
</script>

<style lang="css" scoped>
  #container {
    width: 100%;
  }
  #buttons-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  button {
    display: flex;
    padding: 1rem;
    position: relative;
    justify-content: center;
    flex-direction: row;
  }

  #impacts {
    border: 2px solid white;
    margin: 0 auto;
    padding: 1rem;
    line-height: 2rem;
    position: absolute;
    background-color: black;
    z-index: 10;
    top: 100%;
  }
</style>
