<template>
  <div id="field">
    <div id="health-menu">
      <Health></Health>
      <Menu></Menu>
    </div>
    <div id="story-content">
      <component
        :is="currentPhase.type"
        :phase="currentPhase"
        @finished="nextPhase"
        ref="phaseComponent"
      >
      </component>
    </div>

    <div id="buttons">
      <Buttons :phase="currentPhase" @finished="nextPhase"></Buttons>
    </div>

    <div id="language-bar">
      <Language-Bar></Language-Bar>
    </div>
  </div>
</template>

<script>
  import phases from "@/phases.js";
  import Story from "@/components/Story";
  import Choice from "@/components/Choice.vue";
  import Earned from "@/components/Earned.vue";
  import LanguageBar from "@/components/LanguageBar.vue";
  import Menu from "@/components/Menu.vue";
  import Health from "@/components/Health.vue";
  import Buttons from "@/components/Buttons.vue";
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
      initPhase() {
        if (this.$refs.phaseComponent.init) {
          this.$refs.phaseComponent.init();
        }
      },
    },
    components: {
      Story,
      Choice,
      LanguageBar,
      Menu,
      Health,
      Earned,
      Buttons,
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
    watch: {
      currentPhase() {
        this.initPhase();
      },
    },
    mounted() {
      this.initPhase();
    },
  };
</script>

<style scoped>
  #field {
    width: 100vw;
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto auto;
  }

  #story-content {
    display: flex;
    justify-content: center;
    align-items: center;
    overflow-y: hidden;
  }

  #health-menu {
    display: grid;
    grid-template-columns: 90% 10%;
    max-width: 90vw;
    margin: 1rem auto;
  }

  #language-bar {
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
</style>
