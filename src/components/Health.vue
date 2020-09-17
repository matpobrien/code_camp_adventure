<template>
  <div class="health">
    <div id="health-bar">
      <div class="emotional">
        <p>
          Emotional:
        </p>
        <div class="bars" id="emotional">
          <img src="../assets/heart.png" alt="" />
          <img src="../assets/heart.png" alt="" />
          <img src="../assets/heart.png" alt="" />
          <img src="../assets/heart.png" alt="" />
          <img src="../assets/heart.png" alt="" />
        </div>
      </div>
      <div id="motivational">
        <p>Motivational:</p>
        <div class="bars">
          <img src="../assets/motivation.png" alt="" />
          <img src="../assets/motivation.png" alt="" />
          <img src="../assets/motivation.png" alt="" />
          <img src="../assets/motivation.png" alt="" />
          <img src="../assets/motivation.png" alt="" />
        </div>
      </div>
      <div id="social">
        <p>Social:</p>
        <div class="bars">
          <img src="../assets/social.png" alt="" />
          <img src="../assets/social.png" alt="" />
          <img src="../assets/social.png" alt="" />
          <img src="../assets/social.png" alt="" />
          <img src="../assets/social.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {};
</script>

<style lang="css" scoped>
  p {
    margin-bottom: 1vh;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  #health-bar {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    border: 2px solid white;
    width: 100%;
    padding: 0.5rem;
  }

  #emotional {
    border-left: 2px solid white;
  }

  .bars {
    margin: 0.25rem;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    /* border-left: 2px solid white; */
    border-right: 2px solid white;
  }
  img {
    width: 50%;
    margin: 0.1rem auto;
  }

  img:after {
    padding-bottom: 100%;
  }
</style>
