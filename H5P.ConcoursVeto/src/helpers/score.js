export function calculateSectionScore (results, weights, surveyDefinition) {
  let score = 0, maxValues = 0;

  weights?.forEach((weightDef) => {
    let value;
    const { id, weight } = weightDef;
    // TODO Handle compound id like 'common_subjects_terminal.history_geography'
    if (typeof results[id] === 'object' && results[id] !== null) {
      // If the result is an object, calculate the average of its values
      const values = Object.values(results[id]);
      value = values.reduce((sum, val) => sum + Number.parseInt(val), 0);
    } else {
      // If it's a direct value, use it as is
      value = results[id] !== undefined ? results[id] : 0;
    }

    score += value * weight;
    maxValues += findMaxValue(id, surveyDefinition) * weight;
  });
  return maxValues > 0 ? (score / maxValues ) * 100 : 0;
}

function findMaxValue (key, surveyDefinition) {
  let maxValue = MAX_DEFAULT_VALUE;
  // Find the max range for the question from the surveyDefinition
  surveyDefinition.pages.forEach(page => {
    page.elements.forEach(element => {
      if (element.name === key) {
        if (element.type === 'dropdown') {
          maxValue = Math.max(...element.choices.map(col => col.value));
        } else if (element.type === 'tagbox') {
          // Add all choices col.values
          // Sort choices by value from highest to lowest
          const choicesValues = [...element.choices].map(col => col.value);
          choicesValues.sort((a, b) => b - a);
          const choicesValuesRange = [...element.choices].map(col => col.value).slice(0, element.maxSelectedChoices);
          maxValue = choicesValuesRange.reduce((sum, choice) => sum + Number.parseInt(choice), 0);
        } else if (element.type === 'matrix') {
          maxValue = Math.max(...element.columns.map(col => col.value)) * element.rows.length;
        } else if (element.type === 'rating') {
          maxValue = Math.max(...element.rateValues.map(col => col.value));
        }
      }
    });
  });
  return maxValue;
}

const MAX_DEFAULT_VALUE = 5;
