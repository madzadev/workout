export function sumExercises(intervals) {
  return [...intervals].reduce((acc, val) => acc + val, 0);
}

export function sumBreaks(
  intervalsCount,
  roundsCount,
  exerciseBreaksLength,
  roundsBreaksLength
) {
  const exerciseBreaks =
    (intervalsCount / roundsCount - 1) * roundsCount * exerciseBreaksLength;
  const roundsBreaks = (roundsCount - 1) * roundsBreaksLength;
  return exerciseBreaks + roundsBreaks;
}

export function formatTime(seconds) {
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  let timeString = "";

  if (hours > 0) {
    timeString += `${hours} ${hours === 1 ? "hour" : "hours"}`;
  }
  if (minutes > 0) {
    if (timeString) timeString += " ";
    timeString += `${minutes} ${minutes === 1 ? "minute" : "minutes"}`;
  }
  if (remainingSeconds > 0) {
    if (timeString) timeString += " ";
    timeString += `${remainingSeconds} ${
      remainingSeconds === 1 ? "second" : "seconds"
    }`;
  }

  return timeString;
}
