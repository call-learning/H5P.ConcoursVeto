export function calculateSectionScore (results, weights, surveyDefinition) {
  let score = 0, totalWeight = 0;

  weights?.forEach((weightDef) => {
    let value;
    const { id: key, value: weight } = weightDef;
    const max_range = findMaxRange(key, surveyDefinition);
    // TODO Handle compound key like 'common_subjects_terminal.history_geography'
    if (typeof results[key] === 'object' && results[key] !== null) {
      // If the result is an object, calculate the average of its values
      const values = Object.values(results[key]);
      value = values.length > 0 ? values.reduce((sum, val) => sum + val, 0) / values.length : 0;
    } else {
      // If it's a direct value, use it as is
      value = results[key] !== undefined ? results[key] : 0;
    }

    score += value / max_range * weight / 100;
    totalWeight += weight;
  });
  return totalWeight > 0 ? (score / (totalWeight / 100)) * 100 : 0;
}

function findMaxRange (key, surveyDefinition) {
  let maxRange = MAX_DEFAULT_RANGE;
  // Find the max range for the question from the surveyDefinition
  surveyDefinition.pages.forEach(page => {
    page.elements.forEach(element => {
      if (element.name === key) {
        if (element.type === 'dropdown' || element.type === 'tagbox') {
          maxRange = Math.max(...element.choices.map(col => col.value));
        } else if (element.type === 'matrix') {
          maxRange = Math.max(...element.columns.map(col => col.value));
        } else if (element.type === 'rating') {
          maxRange = Math.max(...element.rateValues.map(col => col.value));
        }
      }
    });
  });
  return maxRange;
}

const MAX_DEFAULT_RANGE = 5;
