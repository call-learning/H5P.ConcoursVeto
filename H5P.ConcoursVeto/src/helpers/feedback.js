export function selectFeedbackRange (score, feedbackRanges = []) {
  return [...feedbackRanges]
    .sort((a, b) => a.max - b.max)
    .find(range => score <= range.max);
}
