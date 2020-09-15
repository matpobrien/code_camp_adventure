<template>
  <div id="language-bar">
    <h3>Languages:</h3>
    <div id="languages">
      <img
        src="../assets/cli_tool.png"
        v-if="
          $store.state.languages.find((language) => {
            return language.name == CLI;
          })
        "
      />
      <img
        src="../assets/html_logo.png"
        alt=""
        v-if="
          $store.state.languages.find((language) => {
            return language.name == HTML;
          })
        "
      />
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
    max-height: 95%;
    max-width: 95%;
    margin: 0 auto;
  }

  #languages {
    display: grid;
    grid-template-columns: repeat(10, 1fr);
    /* margin: 1rem; */
    border: 2px solid white;
    min-height: 15vh;
    max-height: 15vh;
    max-width: 90vw;
    margin: 0 auto;
    padding: 1rem 0.75rem;
  }
</style>
