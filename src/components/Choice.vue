<template>
  <div>
    <h1>{{ phase.text }}</h1>

    <button
      v-for="choice in phase.choices"
      @click="makeDecision(choice.next)"
      :key="choice.title"
    >
      {{ choice.title }}
    </button>
  </div>
</template>

<script>
  export default {
    methods: {
      finished() {
        this.$emit("finished", {
          next: this.phase.next,
        });
      },
      makeDecision(next) {
        this.$emit("finished", {
          next,
        });
      },
    },
    props: {
      phase: {
        type: Object,
        require: true,
      },
    },
  };
</script>

<style lang="css" scoped></style>
