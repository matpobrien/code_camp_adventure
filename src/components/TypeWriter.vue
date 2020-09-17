<template>
  <div>
    <h2>{{ displayedText }}<span class="blink-caret"></span></h2>
  </div>
</template>

<script>
  async function sleep(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  export default {
    data() {
      return {
        displayedText: "",
        intervalHandle: null,
        wait: 0,
      };
    },
    props: {
      text: {
        type: String,
        default: "",
      },
      latency: {
        type: Number,
        default: 0,
      },
    },
    computed: {},
    methods: {
      // Start Interval
      startTypeWriter() {
        // if Update method is already running
        if (this.intervalHandle != null) {
          //return
          return;
        }
        // Otherwise, update every 10ms.
        this.intervalHandle = setInterval(this.update, 10);
      },
      async update() {
        //Skipping the update until "wait" becomes 0.
        if (this.wait) {
          this.wait--;
          return;
        }
        if (this.displayedText == this.text) {
          this.stopInterval();
          if (this.latency != -1) {
            //emit = creating a custom event
            await sleep(this.latency);
            this.$emit("finished");
          }
        } else {
          const nextCharacter = this.text[this.displayedText.length];
          if (nextCharacter == " ") {
            this.wait = 10;
          } else {
            this.wait = 8;
          }
          this.displayedText += nextCharacter;
        }
      },
      stopInterval() {
        clearInterval(this.intervalHandle);
        this.intervalHandle = null;
      },
    },
    created() {
      this.startTypeWriter();
    },
    beforeDestroy() {
      this.stopInterval();
    },
    watch: {
      text() {
        this.displayedText = "";
        this.startTypeWriter();
      },
    },
  };
</script>

<style scoped>
  h2 {
    line-height: 2rem;
    font-size: 1.5rem;
  }
  div {
    max-width: 90vw;
    text-align: center;
  }
  .blink-caret {
    border-left: 20px solid white;
    border-top: 2px solid white;
    animation: blink-caret 1s step-end infinite;
  }

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
