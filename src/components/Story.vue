<template>
  <div>
    <TypeWriter
      :text="phase.text"
      @finished="finished"
      :latency="phase.latency"
    ></TypeWriter>
    <button @click="finished">Continue</button>
  </div>
</template>

<script>
import TypeWriter from "@/components/TypeWriter.vue";
export default {
  methods: {
    finished() {
      this.$emit("finished", {
        next: this.phase.next
      });
    }
  },
  components: {
    TypeWriter
  },
  props: {
    phase: {
      type: Object,
      require: true
    }
  }
};
</script>

<style scoped></style>
