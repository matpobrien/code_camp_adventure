<template>
  <div>
    <component
      :is="currentPhase.type"
      :phase="currentPhase"
      @finished="nextPhase"
    >
    </component>
  </div>
</template>

<script>
  import phases from "@/phases.js";
  import Story from "@/components/Story";
  import Choice from "@/components/Choice.vue";
  export default {
    data() {
      return {
        phases,
      };
    },
    methods: {
      nextPhase(event) {
        this.$store.dispatch("nextPhase", event);
      },
    },
    components: {
      Story,
      Choice,
    },
    computed: {
      curentPhaseID() {
        return this.$store.state.phaseHistory[
          this.$store.state.phaseHistory.length - 1
        ].id;
      },
      currentPhase() {
        return phases.find((phase) => {
          return (
            phase.id ==
            this.$store.state.phaseHistory[
              this.$store.state.phaseHistory.length - 1
            ].id
          );
        });
      },
    },
  };
</script>

<style scoped></style>
