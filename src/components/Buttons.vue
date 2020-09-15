<template>
  <div>
    <button
      v-for="choice in phase.choices"
      :key="choice.title"
      @click="makeDecision(choice.next, choice.learn, choice.item)"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      {{ choice.title }}
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hover: false,
        loading: false,
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
        require: true,
      },
    },
    watch: {
      currentPhase() {
        this.initPhase();
      },
    },
  };
</script>

<style lang="css" scoped></style>
