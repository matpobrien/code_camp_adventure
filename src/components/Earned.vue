<template>
  <div id="earned">
    <div id="earned-box">
      <h3>
        {{ phase.text }}
      </h3>
      <img :src="phase.image" alt="" />
    </div>
    <button
      v-for="choice in phase.choices"
      :key="choice.title"
      @click="makeDecision(choice.next)"
    >
      {{ choice.title }}
    </button>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
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

<style lang="css" scoped>
  img {
    margin: 0 auto;
  }
  h3 {
    margin: 1rem auto;
  }
  #earned {
    height: 90%;
    max-width: 90vw;
  }
  #earned-box {
    border: 2px white solid;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    text-align: center;
  }
</style>
