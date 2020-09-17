<template>
  <div id="field">
    <div class="menu">
      <div id="health-menu" v-if="this.$store.state.phaseHistory.length">
        <Health></Health>
        <Menu></Menu>
      </div>
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

    <div id="language-bar" v-if="this.$store.state.phaseHistory.length">
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
    gap: 1rem;
    grid-template-columns: 80% 1fr;
    max-width: 90vw;
    margin: 0.5rem auto;
  }

  #language-bar {
    margin: 0.5rem 0;
  }
</style>
