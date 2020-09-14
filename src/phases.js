export default [
  {
    id: "intro",
    type: "Story",
    text: "Welcome to Code Camp!",
    next: "intro-2",
    latency: 2000
  },
  {
    id: "intro-2",
    type: "Story",
    text: "We're really happy to have you here.",
    next: "intro-3",
    latency: 2000
  },
  {
    id: "intro-3",
    type: "Choice",
    text: "What do you want to do?",
    choices: [
      {
        title: "yes",
        next: "intro"
      },
      {
        title: "no",
        next: "intro-2"
      }
    ]
  }
];
