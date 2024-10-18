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

  if (hours > 0) {
    return `${hours} hours ${minutes} minutes ${remainingSeconds} seconds`;
  } else if (minutes > 0) {
    return `${minutes} minutes ${remainingSeconds} seconds`;
  } else {
    return `${remainingSeconds} seconds`;
  }
}
