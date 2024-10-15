const presets = [
  {
    name: "Full Body Quick Workout",
    difficulty: 1,
    rounds: 1,
    breaks: 10, // 10 seconds break between exercises
    workout: [
      {
        name: "Jumping Jacks",
        description: "Jump feet out, raise arms overhead.",
        time: 30, // Adjusted to 30 seconds for a warm-up
      },
      {
        name: "Bodyweight Squats",
        description: "Lower down, stand back up straight.",
        time: 40, // Longer for a lower body workout
      },
      {
        name: "Push-ups",
        description: "Lower chest to ground, push up.",
        time: 30, // Upper body strength exercise
      },
      {
        name: "Mountain Climbers",
        description: "Drive knees toward chest quickly.",
        time: 30, // Core and cardio combined
      },
      {
        name: "Plank",
        description: "Hold straight body on elbows.",
        time: 40, // Core stabilization
      },
      {
        name: "Lunges",
        description: "Step forward, lower hips, step back.",
        time: 40, // Targets the legs and glutes
      },
      {
        name: "Burpees",
        description: "Squat, kick back, jump up explosively.",
        time: 30, // Full-body explosive movement
      },
    ],
  },
];

export default presets;
