<template>
  <div id="app">
    <h1>Code Camp Adventure</h1>
    <button @click="startGame" :class="{ disabled: currentSentenceIndex > 0 }">
      Start Learning!
    </button>
    <TypeWriter
      :text="currentSentence.text"
      @finished="nextSentence"
    ></TypeWriter>
    <button
      @click="currentSentenceIndex += 1"
      :class="{
        disabled: currentSentenceIndex < 3 || currentSentenceIndex > 3,
      }"
    >
      First day of class
    </button>
    <div v-if="currentSentence.choices">
      <button
        v-for="choice in currentSentence.choices"
        :key="choice.option"
        @click="currentSentenceIndex = choice.next"
      >
        {{ choice.option }}
      </button>
    </div>
  </div>
</template>

<script>
  const sentences = [
    {
      text: "",
      continueLatency: -1,
    },
    {
      text: "Welcome to Code Camp Leipzig!",
      continueLatency: 1000,
    },
    {
      text: "We're really happy to have you here.",
      continueLatency: 2000,
    },
    {
      text: "You've got a lot to learn, so let's get started.",
      continueLatency: -1,
    },
    {
      text:
        "Your first day is here, and you arrive in class. Today, you'll be dissassembling and reassembling a computer with your classmates.",
      continueLatency: 3000,
    },
    {
      text: "You really wanted to learn how to use the command line, though.",
      continueLatency: 2000,
    },
    {
      text:
        "Gabe gives you the choice to study a bit on your own, or join in with the class.",
      continueLatency: 2000,
    },
    {
      text: "What do you do?",
      continueLatency: -1,
      choices: [
        {
          option: "Learn command line",
          next: 8,
        },
        {
          option: "Build a computer",
          next: 9,
        },
      ],
    },
    {
      text:
        "Wow, you really managed to get a hang of it! These skills will be useful to you in the future. Your connection to the others seems to have suffered, though.",
      continueLatency: -1,
    },
    {
      text:
        "You had a good time, but accidentally dropped a screwdriver on the motherboard...twice. Not having a computer might be a problem for the rest off the course.",
      continueLatency: -1,
    },
  ];
  import TypeWriter from "@/components/TypeWriter.vue";
  export default {
    components: {
      TypeWriter,
    },
    data() {
      return {
        currentSentenceIndex: 0,
      };
    },
    methods: {
      startGame() {
        this.currentSentenceIndex = 1;
      },
      nextSentence() {
        const latency = this.currentSentence.continueLatency;
        console.log(latency);
        if (latency != -1) {
          setTimeout(
            function() {
              this.currentSentenceIndex += 1;
            }.bind(this),
            latency
          );
        }
      },
    },
    computed: {
      currentSentence() {
        return sentences[this.currentSentenceIndex];
      },
    },
  };
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
    visibility: hidden;
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
