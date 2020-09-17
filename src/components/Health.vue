<template>
  <div id="health-bar">
    <div id="emotional">
      <h3>
        Emotional:
      </h3>
      <img src="../assets/heart.png" alt="" />
      <img src="../assets/heart.png" alt="" />
      <img src="../assets/heart.png" alt="" />
      <img src="../assets/heart.png" alt="" />
      <img src="../assets/heart.png" alt="" />
    </div>
    <div id="motivational">
      <h3>Motivational:</h3>
      <img src="../assets/motivation.png" alt="" />
      <img src="../assets/motivation.png" alt="" />
      <img src="../assets/motivation.png" alt="" />
      <img src="../assets/motivation.png" alt="" />
      <img src="../assets/motivation.png" alt="" />
    </div>
    <div id="social">
      <h3>Social:</h3>
      <img src="../assets/social.png" alt="" />
      <img src="../assets/social.png" alt="" />
      <img src="../assets/social.png" alt="" />
      <img src="../assets/social.png" alt="" />
      <img src="../assets/social.png" alt="" />
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="css" scoped>
  h3 {
    margin: auto auto;
  }
  #health-bar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 2px solid white;
    max-height: 12vh;
    max-width: 90vw;

    padding: 0.5rem;
  }
  img {
    max-height: 30px;
    max-width: 30px;
    margin: 0.2rem;
  }
</style>
