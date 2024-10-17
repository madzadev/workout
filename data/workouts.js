// const presets = [
//   {
//     title: "Full Body Quick Workout",
//     difficulty: 1,
//     rounds: 3,
//     exerciseBreaks: 10, // 10 seconds break between exercises
//     roundBreaks: 60,
//     workout: [
//       {
//         name: "Jumping Jacks",
//         description: "Jump feet out, raise arms overhead.",
//         time: 5, // Adjusted to 30 seconds for a warm-up
//       },
//       {
//         name: "Bodyweight Squats",
//         description: "Lower down, stand back up straight.",
//         time: 5, // Longer for a lower body workout
//       },
//       {
//         name: "Push-ups",
//         description: "Lower chest to ground, push up.",
//         time: 25, // Upper body strength exercise
//       },
//       {
//         name: "Mountain Climbers",
//         description: "Drive knees toward chest quickly.",
//         time: 25, // Core and cardio combined
//       },
//       {
//         name: "Plank",
//         description: "Hold straight body on elbows.",
//         time: 25, // Core stabilization
//       },
//       {
//         name: "Lunges",
//         description: "Step forward, lower hips, step back.",
//         time: 25, // Targets the legs and glutes
//       },
//       {
//         name: "Burpees",
//         description: "Squat, kick back, jump up explosively.",
//         time: 5, // Full-body explosive movement
//       },
//     ],
//   },
// ];

// Quick Workout: Combines cardio and strength in a compact format.
// Flex and Stretch: Focuses on mobility, stretching, and recovery.
// Total Body Blitz: Balanced for full-body workout.
// Core Sculpt Session: Targets core strengthening.
// Strength Fusion Flow: Strength-focused using bodyweight.
// Muscle Madness Circuit: High-intensity, muscle-targeted circuit.
// Cardio Power Surge: Cardio-focused, intense exercises.
// HIIT the Beat: High-intensity interval training with fast, rhythmic moves.
// Warrior Boot Camp: Bootcamp-style with bodyweight training and conditioning.

const presets = [
  {
    title: "Easy Workout",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 20, // 10 seconds break between exercises
    roundBreaks: 60,
    workout: [
      {
        name: "Jumping Jacks",
        description: "Jump feet out, raise arms overhead.",
        time: 5,
      },
      {
        name: "Push-Ups",
        description: "Lower body towards the ground, push back up.",
        time: 30,
      },
      {
        name: "Bodyweight Squats",
        description: "Lower down, stand back up straight.",
        time: 30,
      },
      {
        name: "High Knees",
        description: "Jog in place, lift knees to waist height.",
        time: 30,
      },
      {
        name: "Lunges",
        description: "Step forward and lower body until knee is at 90°.",
        time: 30,
      },
      {
        name: "Mountain Climbers",
        description: "Alternately drive knees to chest in plank position.",
        time: 30,
      },
      { name: "Plank", description: "Hold body in plank position.", time: 30 },
      {
        name: "Burpees",
        description: "Drop into a push-up, then jump up.",
        time: 30,
      },
      {
        name: "Bicycle Crunches",
        description: "Alternate knees towards opposite elbows.",
        time: 30,
      },
    ],
  },
  {
    title: "Flex and Stretch",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    workout: [
      {
        name: "Standing Forward Bend",
        description: "Bend forward, reaching for your toes.",
        time: 30,
      },
      {
        name: "Cat-Cow Stretch",
        description: "Alternate arching and rounding your back.",
        time: 30,
      },
      {
        name: "Seated Hamstring Stretch",
        description: "Reach towards your toes while seated.",
        time: 30,
      },
      {
        name: "Child’s Pose",
        description: "Kneel and stretch arms forward on the ground.",
        time: 30,
      },
      {
        name: "Torso Twist",
        description: "Twist your torso side to side gently.",
        time: 30,
      },
      {
        name: "Side Stretch",
        description: "Reach one arm overhead and lean sideways.",
        time: 30,
      },
    ],
  },
  {
    title: "Total Body Blitz",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    workout: [
      {
        name: "Jumping Jacks",
        description: "Jump feet out, raise arms overhead.",
        time: 30,
      },
      {
        name: "Push-Ups",
        description: "Lower body towards the ground, push back up.",
        time: 30,
      },
      {
        name: "Bodyweight Squats",
        description: "Lower down, stand back up straight.",
        time: 30,
      },
      { name: "Plank", description: "Hold body in plank position.", time: 30 },
      {
        name: "Russian Twists",
        description: "Twist torso with legs elevated.",
        time: 30,
      },
      {
        name: "Lunges",
        description: "Step forward and lower body until knee is at 90°.",
        time: 30,
      },
      {
        name: "Mountain Climbers",
        description: "Alternately drive knees to chest in plank position.",
        time: 30,
      },
      {
        name: "Leg Raises",
        description: "Raise legs while lying flat.",
        time: 30,
      },
      {
        name: "Burpees",
        description: "Drop into a push-up, then jump up.",
        time: 30,
      },
    ],
  },
  {
    title: "Core Sculpt Session",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    workout: [
      { name: "Plank", description: "Hold body in plank position.", time: 30 },
      {
        name: "Bicycle Crunches",
        description: "Alternate knees towards opposite elbows.",
        time: 30,
      },
      {
        name: "Leg Raises",
        description: "Raise legs while lying flat.",
        time: 30,
      },
      {
        name: "Russian Twists",
        description: "Twist torso with legs elevated.",
        time: 30,
      },
      {
        name: "Mountain Climbers",
        description: "Alternately drive knees to chest.",
        time: 30,
      },
      {
        name: "Side Plank",
        description: "Hold plank position on one side.",
        time: 30,
      },
      {
        name: "Flutter Kicks",
        description: "Kick legs alternately in a flutter motion.",
        time: 30,
      },
      {
        name: "Toe Touches",
        description: "Reach for toes while lying down.",
        time: 30,
      },
      {
        name: "Superman Hold",
        description: "Lift arms and legs while lying on stomach.",
        time: 30,
      },
    ],
  },
  {
    title: "Strength Fusion Flow",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    workout: [
      {
        name: "Push-Ups",
        description: "Lower body towards the ground, push back up.",
        time: 30,
      },
      {
        name: "Bodyweight Squats",
        description: "Lower down, stand back up straight.",
        time: 30,
      },
      {
        name: "Lunges",
        description: "Step forward and lower body until knee is at 90°.",
        time: 30,
      },
      { name: "Plank", description: "Hold body in plank position.", time: 30 },
      {
        name: "Mountain Climbers",
        description: "Alternately drive knees to chest.",
        time: 30,
      },
      {
        name: "Tricep Dips",
        description: "Lower and raise body using triceps.",
        time: 30,
      },
      {
        name: "Glute Bridges",
        description: "Lift hips off the ground.",
        time: 30,
      },
      {
        name: "Leg Raises",
        description: "Raise legs while lying flat.",
        time: 30,
      },
      {
        name: "Burpees",
        description: "Drop into a push-up, then jump up.",
        time: 30,
      },
    ],
  },
  {
    title: "Muscle Madness Circuit",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    workout: [
      {
        name: "Bodyweight Squats",
        description: "Lower down, stand back up straight.",
        time: 30,
      },
      {
        name: "Push-Ups",
        description: "Lower body towards the ground, push back up.",
        time: 30,
      },
      {
        name: "Lunges",
        description: "Step forward and lower body until knee is at 90°.",
        time: 30,
      },
      { name: "Plank", description: "Hold body in plank position.", time: 30 },
      {
        name: "Mountain Climbers",
        description: "Alternately drive knees to chest.",
        time: 30,
      },
      {
        name: "Jumping Jacks",
        description: "Jump feet out, raise arms overhead.",
        time: 30,
      },
      {
        name: "Burpees",
        description: "Drop into a push-up, then jump up.",
        time: 30,
      },
      {
        name: "Glute Bridges",
        description: "Lift hips off the ground.",
        time: 30,
      },
      {
        name: "Superman Hold",
        description: "Lift arms and legs while lying on stomach.",
        time: 30,
      },
    ],
  },
  {
    title: "Cardio Power Surge",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    workout: [
      {
        name: "Jumping Jacks",
        description: "Jump feet out, raise arms overhead.",
        time: 30,
      },
      {
        name: "High Knees",
        description: "Jog in place, lift knees to waist height.",
        time: 30,
      },
      {
        name: "Mountain Climbers",
        description: "Alternately drive knees to chest.",
        time: 30,
      },
      {
        name: "Burpees",
        description: "Drop into a push-up, then jump up.",
        time: 30,
      },
      {
        name: "Butt Kicks",
        description: "Jog in place, kicking heels towards glutes.",
        time: 30,
      },
      {
        name: "Jump Squats",
        description: "Squat, then explode into a jump.",
        time: 30,
      },
      {
        name: "Skaters",
        description: "Leap side to side in a skating motion.",
        time: 30,
      },
      {
        name: "Star Jumps",
        description: "Jump up, spreading arms and legs wide.",
        time: 30,
      },
      {
        name: "Plank Jacks",
        description: "Jump feet out and in while holding plank.",
        time: 30,
      },
    ],
  },
  {
    title: "HIIT the Beat",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    workout: [
      {
        name: "Jumping Jacks",
        description: "Jump feet out, raise arms overhead.",
        time: 30,
      },
      {
        name: "Burpees",
        description: "Drop into a push-up, then jump up.",
        time: 30,
      },
      {
        name: "Mountain Climbers",
        description: "Alternately drive knees to chest.",
        time: 30,
      },
      {
        name: "High Knees",
        description: "Jog in place, lift knees to waist height.",
        time: 30,
      },
      {
        name: "Squat Jumps",
        description: "Squat, then explode into a jump.",
        time: 30,
      },
      {
        name: "Plank Jacks",
        description: "Jump feet out and in while holding plank.",
        time: 30,
      },
      {
        name: "Side Shuffles",
        description: "Shuffle side to side quickly.",
        time: 30,
      },
      {
        name: "Skaters",
        description: "Leap side to side in a skating motion.",
        time: 30,
      },
      {
        name: "Push-Ups",
        description: "Lower body towards the ground, push back up.",
        time: 30,
      },
    ],
  },
  {
    title: "Warrior Boot Camp",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    workout: [
      {
        name: "Burpees",
        description: "Drop into a push-up, then jump up.",
        time: 30,
      },
      {
        name: "Jump Squats",
        description: "Squat, then explode into a jump.",
        time: 30,
      },
      {
        name: "Push-Ups",
        description: "Lower body towards the ground, push back up.",
        time: 30,
      },
      {
        name: "Mountain Climbers",
        description: "Alternately drive knees to chest.",
        time: 30,
      },
      {
        name: "Lunges",
        description: "Step forward and lower body until knee is at 90°.",
        time: 30,
      },
      {
        name: "Bodyweight Squats",
        description: "Lower down, stand back up straight.",
        time: 30,
      },
      { name: "Plank", description: "Hold body in plank position.", time: 30 },
      {
        name: "High Knees",
        description: "Jog in place, lift knees to waist height.",
        time: 30,
      },
      {
        name: "Bicycle Crunches",
        description: "Alternate knees towards opposite elbows.",
        time: 30,
      },
    ],
  },
];

{
  /* <WorkoutPresetCard workoutPresetName="Total Body Blitz" />
        <WorkoutPresetCard workoutPresetName="Core Sculpt Session" />
        <WorkoutPresetCard workoutPresetName="Strength Fusion Flow" />
        <WorkoutPresetCard workoutPresetName="Muscle Madness Circuit" />
        <WorkoutPresetCard workoutPresetName="Cardio Power Surge" />
        <WorkoutPresetCard workoutPresetName="HIIT the Beat" />
        <WorkoutPresetCard workoutPresetName="Warrior Boot Camp" /> */
}

export default presets;
