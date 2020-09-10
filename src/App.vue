<template>
  <div id="app">
    <router-view>
      
    </router-view>
  </div>
</template>

<script>
  export default {};
</script>

<style>
  @import url("https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap");
  * {
    margin: 0;
    padding: 0;
  }
  #app {
    font-family: "Press Start 2P";
    background-color: black;
    color: white;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  #health-data {
    width: 100%;
    margin-top: 1rem;
    position: fixed;
    top: 0;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
  #health-data h3 {
    margin: 0 auto;
  }
  #inventory {
    height: 125px;
    width: 90vw;
    position: fixed;
    bottom: 1rem;
    border: 2px solid white;
    padding: 1rem;
    justify-content: center;
    align-items: center;
    display: grid;
    grid-template-columns: repeat(10, 1fr);
  }
  #inventory img {
    margin: 5px;
  }
  .inventory {
    position: fixed;
    left: 3rem;
    bottom: 12rem;
  }
  h1 {
    text-align: center;
    line-height: 3rem;
  }
  button {
    background-color: black;
    font-family: inherit;
    font-size: 1.25rem;
    padding: 0.5rem;
    border: 2px solid white;
    color: white;
    outline: none;
    cursor: pointer;
    margin: 1rem;
  }
  .disabled {
    display: none;
  }
  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from,
    to {
      border-color: transparent;
    }
    50% {
      border-color: white;
    }
  }
</style>
