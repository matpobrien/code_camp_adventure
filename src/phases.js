export default [
  {
    id: "intro",
    type: "Story",
    text: "Welcome to Code Camp!",
    next: "intro-2",
    choices: null,
    latency: 2000,
  },
  {
    id: "intro-2",
    type: "Story",
    text: "We're really happy to have you here.",
    next: "intro-3",
    choices: null,
    latency: 2000,
  },
  {
    id: "intro-3",
    type: "Choice",
    text: "You've got a lot to learn, so let's get started!",
    choices: [
      {
        title: "Begin first day",
        next: "day-one",
      },
    ],
  },
  {
    id: "day-one",
    type: "Story",
    text:
      "Your first day is here, and you arrive in class. Today, you'll be dissassembling and reassembling a computer with your classmates.",
    next: "day-one-2",
    choices: null,
    latency: 3000,
  },
  {
    id: "day-one-2",
    type: "Story",
    text: "You really wanted to learn how to use the command line, though.",
    next: "day-one-3",
    choices: null,
    latency: 2000,
  },
  {
    id: "day-one-3",
    type: "Story",
    text:
      "Your instructor, Gabe, gives you the choice to study on your own, or join in with the class.",
    next: "day-one-4",
    choices: null,
    latency: 2000,
  },
  {
    id: "day-one-4",
    type: "Choice",
    text: "What do you do?",
    choices: [
      {
        title: "Build a computer",
        item: "Apple",
        next: "Apple",
        impacts: [
          { title: "Motivation -1", value: "Motivation -1" },
          { title: "Social +1", value: "Social +1" },
          { title: null, value: null },
          { title: "+???", value: "Apple" },
        ],
      },
      {
        title: "Learn the Command Line",
        learn: {
          name: "CLI",
        },
        next: "earn-CLI",
        impacts: [
          { title: "Motivation +1" },
          { title: "Social -1" },
          { title: null },
          { title: "+???" },
        ],
      },
    ],
  },
  {
    id: "earn-CLI",
    text:
      "Nice! You can use the command line. You feel a bit separated from the others, though...",
    type: "Earned",
    image: require("../src/assets/cli_tool.png"),
    latency: -1,

    choices: [{ title: "Continue", next: "day-two" }],
  },
  {
    id: "Apple",
    text:
      "That was so much fun! Even though you dropped a screwdriver on the motherboard... twice. So embarrassing! Takee an apple to refuel!",
    type: "Earned",
    choices: [{ title: "Continue", next: "day-two" }],
    image: require("../src/assets/apple.png"),
    latency: -1,
  },
  {
    id: "day-two",
    text: "What will you learn next!?",
    type: "Story",
    latency: -1,
  },
];
