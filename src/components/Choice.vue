<template>
  <div>
    <TypeWriter
      :text="phase.text"
      @finished="finished"
      :latency="phase.latency"
    ></TypeWriter>

    <!-- <button
      v-for="choice in phase.choices"
      :key="choice.title"
      @click="makeDecision(choice.next, choice.learn, choice.item)"
      @mouseenter="hover = true"
      @mouseleave="hover = false"
    >
      {{ choice.title }}
    </button> -->
  </div>
</template>

<script>
  import TypeWriter from "@/components/TypeWriter.vue";
  export default {
    data() {
      return {
        hover: false,
        loading: false,
      };
    },
    methods: {
      finished() {},
      makeDecision(next, language, item) {
        this.$emit("finished", {
          next,
          language,
          item,
        });
      },
      init() {
        // console.log("init");
      },
    },
    components: {
      TypeWriter,
    },
    watch: {
      currentPhase() {
        this.initPhase();
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
  div {
    text-align: center;
  }
</style>
