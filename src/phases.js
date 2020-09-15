export default [
  {
    id: "intro",
    type: "Story",
    text: "Welcome to Code Camp!",
    next: "intro-2",
    latency: 2000,
  },
  {
    id: "intro-2",
    type: "Story",
    text: "We're really happy to have you here.",
    next: "intro-3",
    latency: 2000,
  },
  {
    id: "intro-3",
    type: "Choice",
    text: "You've got a lot to learn, so let's get started!",
    choices: [
      {
        title: "Begin first day",
        next: "first-day",
      },
    ],
  },
  {
    id: "first-day",
    type: "Story",
    text:
      "Your first day is here, and you arrive in class. Today, you'll be dissassembling and reassembling a computer with your classmates.",
    next: "first-day-2",
    latency: 3000,
  },
  {
    id: "first-day-2",
    type: "Story",
    text: "You really wanted to learn how to use the command line, though.",
    next: "first-day-3",
    latency: 2000,
  },
  {
    id: "first-day-3",
    type: "Story",
    text:
      "Your instructor, Gabe, gives you the choice to study on your own, or join in with the class.",
    next: "first-day-4",
    latency: 2000,
  },
  {
    id: "first-day-4",
    type: "Choice",
    text: "What do you do?",
    next: null,
    choices: [
      {
        title: "Build a computer",
        item: "Apple",
        next: "Apple",
        impact: [
          { motivation: "Motivation -1" },
          { social: "Social +1" },
          { emotional: null },
          { newItem: "+???" },
        ],
      },
      {
        title: "Learn the Command Line",
        learn: "CLI",
        next: "earn-CLI",
        impact: [
          { motivation: "Motivation +1" },
          { social: "Social -1" },
          { emotional: null },
          { newItem: "+???" },
        ],
      },
    ],
  },
  {
    id: "earn-CLI",
    text:
      "Nice! You can use the command line. You feel a bit separated from the others, though...",
    type: "Earned",
    next: "day-two",
    latency: -1,
    language: [
      {
        name,
      },
    ],
  },
  {
    id: "Apple",
    text:
      "That was so much fun! Even though you dropped a screwdriver on the motherboard... twice. So embarrassing! Takee an apple to refuel!",
    type: "Earned",
    next: "day-two",
    latency: -1,
  },
];
