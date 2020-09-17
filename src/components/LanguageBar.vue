<template>
  <div id="language-bar">
    <h3>Languages:</h3>
    <div id="languages">
      <img src="../assets/cli_tool.png" />
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
  }

  img:after {
    padding-bottom: 100%;
  }
  #languages {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    gap: 1rem;
    /* margin: 1rem; */
    border: 2px solid white;
    max-width: 90vw;
    margin: 0 auto;
    padding: 1rem 0.75rem;
  }
</style>
