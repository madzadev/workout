// Quick Workout: Combines cardio and strength in a compact format.
// Flex and Stretch: Focuses on mobility, stretching, and recovery.
// Total Body Blitz: Balanced for full-body workout.
// Core Sculpt Session: Targets core strengthening.
// Strength Fusion Flow: Strength-focused using bodyweight.
// Muscle Madness Circuit: High-intensity, muscle-targeted circuit.
// Cardio Power Surge: Cardio-focused, intense exercises.
// HIIT the Beat: High-intensity interval training with fast, rhythmic moves.
// Warrior Boot Camp: Bootcamp-style with bodyweight training and conditioning.

const beginnerPresets = [
  {
    id: 1,
    title: "Easy Workout",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 5, // 10 seconds break between exercises
    roundBreaks: 60,
    completionEmoji: "🏆",
    workout: [
      {
        name: "Jumping Jacks",
        description: "Jump feet out, raise arms overhead.",
        time: 10,
      },
      {
        name: "Pushups",
        description: "Lower body towards the ground, push back up.",
        time: 10,
      },
      {
        name: "Bodyweight Squats",
        description: "Lower down, stand back up straight.",
        time: 10,
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
        time: 10,
      },
    ],
  },
  {
    id: 2,
    title: "Flex and Stretch",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    completionEmoji: "🏆",
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
    id: 3,
    title: "Total Body Blitz",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    completionEmoji: "🏆",
    workout: [
      {
        name: "Jumping Jacks",
        description: "Jump feet out, raise arms overhead.",
        time: 30,
      },
      {
        name: "Pushups",
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
    id: 4,
    title: "Core Sculpt Session",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    completionEmoji: "🏆",
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
    id: 5,
    title: "Strength Fusion Flow",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    completionEmoji: "🏆",
    workout: [
      {
        name: "Pushups",
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
    id: 6,
    title: "Muscle Madness Circuit",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    completionEmoji: "🏆",
    workout: [
      {
        name: "Bodyweight Squats",
        description: "Lower down, stand back up straight.",
        time: 30,
      },
      {
        name: "Pushups",
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
    id: 7,
    title: "Cardio Power Surge",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    completionEmoji: "🏆",
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
    id: 8,
    title: "HIIT the Beat",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    completionEmoji: "🏆",
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
        name: "Pushups",
        description: "Lower body towards the ground, push back up.",
        time: 30,
      },
    ],
  },
  {
    id: 9,
    title: "Warrior Boot Camp",
    difficulty: 1,
    rounds: 3,
    exerciseBreaks: 10, // 10 seconds break between exercises
    roundBreaks: 60,
    completionEmoji: "🏆",
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
        name: "Pushups",
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

export default beginnerPresets;
