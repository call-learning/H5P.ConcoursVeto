import React from 'react';
import { Radar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend } from 'chart.js';

ChartJS.register(RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend);

function shortenTitle(title) {
  // Simple function to shorten the title for display
  return title.split(' ')[0]; // You can improve this based on your shortening preference
}

function calculateAverage(scores) {
  // Calculate the average of an array of scores
  const values = Object.values(scores);
  return values.length > 0 ? values.reduce((a, b) => a + b, 0) / values.length : 0;
}

const RadarChart = ({ pageIds, results , definition}) => {
  const labels = [];
  const data = [];

  pageIds.forEach((id) => {
    const title = getPageTitle(id, definition);
    const titleShort = shortenTitle(title);
    labels.push(titleShort);

    // Retrieve the score for this element from results
    let score;
    if (results[id]) {
      if (typeof results[id] === 'object') {
        // For matrix-type elements, calculate the average of all values
        score = calculateAverage(results[id]);
      } else {
        // For rating-type elements, use the score directly
        score = results[id];
      }
    } else {
      score = 0; // Default to 0 if no result is found
    }

    data.push(score);
  });

  const chartData = {
    labels: labels,
    datasets: [
      {
        data: data,
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgba(54, 162, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5, // Adjust according to your rating range
      },
    },
    plugins: {
      legend: {
        display: false
      },
    },
  };

  return (
    <div style={{ width: '400px', height: '400px', marginBottom: '20px' }}>
      <Radar data={chartData} options={options} />
    </div>
  );
};


function getPageTitle(pageId, surveyDefinition) {
  for (const page of surveyDefinition.pages) {
    for (const element of page.elements) {
      if (element.name === pageId) {
        return page.title ??'';
      }
    }
  }
  return '';
}

export default RadarChart;
