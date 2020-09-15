<template>
  <div>
    <h3>
      Emotional
    </h3>
    <h3>Motivational</h3>
    <h3>Social</h3>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="css" scoped>
  h3 {
    margin: auto auto;
  }
  div {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 2px solid white;
    max-height: 5vh;
    max-width: 90vw;
    margin: 0 auto;
  }
</style>
