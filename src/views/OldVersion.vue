<template>
  <div id="app">
    <div id="health-data">
      <h3>Social:</h3>
      <h3>Emotional:</h3>
      <h3>Motivational:</h3>
      <h3></h3>
    </div>
    <h1
      :class="{
        disabled: currentSentenceIndex > 0,
      }"
    >
      Code Camp Adventure
    </h1>
    <button @click="startGame" :class="{ disabled: currentSentenceIndex > 0 }">
      Start Learning!
    </button>
    <TypeWriter
      :text="currentSentence.text"
      @finished="typewriterFinished"
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
    <h3 class="inventory">Inventory:</h3>
    <div id="inventory">
      <img src="../src/assets/html_logo.png" alt="" srcset="" />
      <img src="../src/assets/javascript_logo.png" alt="" srcset="" />
      <img src="../src/assets/npm_logo.png" alt="" srcset="" />
      <img src="../src/assets/cli_tool.png" alt="" srcset="" />
    </div>
  </div>
</template>

<script>
  const sentences = [
    {
      text: "",
      continueLatency: -1,
      id: 0,
    },
    {
      type: "story",
      id: 1,
      content: [
        {
          text: "Welcome to Code Camp!",
          continueLatency: 1000,
        },
        {
          text: "We're really happy to have you here.",
          continueLatency: 2000,
        },
        {
          text: "You've got a lot to learn, so let's get started!",
          continueLatency: -1,
        },
      ],
    },
    {
      text:
        "Your first day is here, and you arrive in class. Today, you'll be dissassembling and reassembling a computer with your classmates.",
      continueLatency: 3000,
      id: "First day",
    },
    {
      text: "You really wanted to learn how to use the command line, though.",
      continueLatency: 2000,
      id: "First wish",
    },
    {
      text:
        "Your instructor, Gabe, gives you the choice to study a bit on your own, or join in with the class.",
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
        "You had a good time, but accidentally dropped a screwdriver on the motherboard...twice. Not having a computer might be a problem for the rest of the course.",
      continueLatency: -1,
    },
  ];
  import TypeWriter from "@/components/TypeWriter.vue";

  async function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  export default {
    components: {
      TypeWriter,
    },
    data() {
      return {
        currentSentenceIndex: 0,
        currentDisplay: "",
        markAsFinished: null,
      };
    },
    methods: {
      async setTypewriter(text) {
        this.currentDisplay = text;
        return new Promise((resolve) => {
          this.markAsFinished = resolve;
        });
      },
      startGame() {
        this.currentSentenceIndex = 1;
      },
      async nextSentence() {
        // this.executePhase(this.currentSentenceIndex);
        await this.setTypewriter("Hello");
        console.log("Finished");
      },
      async executePhase(id) {
        const phase = sentences.find((phase) => phase.id == id);

        if (phase.type == "story") {
          for (const sentence of phase.content) {
            await this.setTypewriter(sentence.text);
            await sleep(sentence.latency);
          }
        }
      },
      typewriterFinished() {
        this.markAsFinished();
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
