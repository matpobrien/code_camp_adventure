<template>
  <div id="language-bar">
    <h3>Languages:</h3>
    <div id="languages">
      <img src="../assets/cli_tool.png" :class="{ have: hasLanguage('CLI') }" />
      <img src="../assets/html_logo.png" alt="" />
      <img src="../assets/javascript_logo.png" alt="" />
      <img src="../assets/npm_logo.png" alt="" />
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      hasLanguage(language) {
        return this.$store.state.languages.find((l) => {
          return l.name == language;
        });
      },
    },
  };
</script>

<style lang="css" scoped>
  h3 {
    margin-bottom: 1vh;
    margin-left: 3.9vw;
  }

  img {
    width: 100%;
    margin: 0 auto;
    opacity: 0.25;
    transition: opacity 0.3s ease-in;
  }

  img:after {
    padding-bottom: 100%;
  }
  #languages {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 1rem;
    border: 2px solid white;
    max-width: 90vw;
    margin: 0 auto;
    padding: 1rem 0.75rem;
  }

  .have {
    opacity: 1;
    animation: pop 0.3s linear 1;
  }

  @keyframes pop {
    50% {
      transform: scale(1.2);
    }
  }
</style>
