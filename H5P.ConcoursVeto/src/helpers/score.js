export function calculateSectionScore (results, weights, surveyDefinition) {
  let score = 0, maxValues = 0;

  weights?.forEach((weightDef) => {
    let value;
    const { id, weight } = weightDef;
    // TODO Handle compound id like 'common_subjects_terminal.history_geography'
    if (typeof results[id] === 'object' && results[id] !== null) {
      // If the result is an object, calculate the average of its values
      const values = Object.values(results[id]).map(val => Number.isInteger(Number(val)) ? Number.parseInt(val) : 0);
      value = values.reduce((sum, val) => sum + val, 0);
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
          const choicesValues = [...element.choices].map(col => Number.isInteger(Number(col.value)) ? Number.parseInt(col.value) : 0)
          maxValue = Math.max(...choicesValues);
        } else if (element.type === 'tagbox') {
          // Add all choices col.values
          // Sort choices by value from highest to lowest
          const choicesValues = [...element.choices].map(col => Number.isInteger(Number(col.value)) ? Number.parseInt(col.value) : 0);
          choicesValues.sort((a, b) => b - a);
          let choicesValuesRange = choicesValues;
          if (element.maxSelectedChoices) {
            choicesValuesRange = choicesValues.slice(0, element.maxSelectedChoices);
          }
          maxValue = choicesValuesRange.reduce((sum, choice) => sum + Number.parseInt(choice), 0);
        } else if (element.type === 'matrix') {
          const choicesValues = [...element.columns].map(col => Number.isInteger(Number(col.value)) ? Number.parseInt(col.value) : 0);
          maxValue = Math.max(...choicesValues) * element.rows.length;
        } else if (element.type === 'rating') {
          const choicesValues = [...element.rateValues].map(col => Number.isInteger(Number(col.value)) ? Number.parseInt(col.value) : 0);
          maxValue = Math.max(...choicesValues);
        }
      }
    });
  });
  return maxValue;
}

const MAX_DEFAULT_VALUE = 5;
