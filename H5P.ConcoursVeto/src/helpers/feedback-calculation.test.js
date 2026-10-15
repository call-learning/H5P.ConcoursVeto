import genContent from '../../../concours-veto/content/content.json';
import hemiSudContent from '../../../concours-veto-hemi-sud/content/content.json';
import stavContent from '../../../concours-veto-stav/content/content.json';
import stlContent from '../../../concours-veto-stl/content/content.json';
import fixture from '../../data/feedback-calculation-cases.json';
import { calculateSectionScore } from './score.js';
import { selectFeedbackRange } from './feedback.js';

const contentByVariant = {
  gen: genContent,
  'hemi-sud': hemiSudContent,
  stav: stavContent,
  stl: stlContent,
};

function getSurveyDefinition (content) {
  return JSON.parse(content.surveyDefinition);
}

function getSection (content, title) {
  return content.feedback.sections.find(section => section.title === title);
}

describe('feedback calculation cases', () => {
  Object.entries(fixture.cases).forEach(([variant, cases]) => {
    const content = contentByVariant[variant];
    const surveyDefinition = getSurveyDefinition(content);

    describe(variant, () => {
      cases.forEach(testCase => {
        it(`calculates ${testCase.name}`, () => {
          const section = getSection(content, testCase.section);
          const score = calculateSectionScore(
            testCase.answers,
            section.questions_weight,
            surveyDefinition,
          );
          const feedback = selectFeedbackRange(score, section.feedback_ranges);

          expect(score).toBeCloseTo(testCase.expectedPercentage, 8);
          expect(feedback?.max).toBe(testCase.expectedFeedbackMax);
        });
      });
    });
  });
});

describe('feedback range boundaries', () => {
  Object.entries(contentByVariant).forEach(([variant, content]) => {
    const sections = content.feedback.sections;

    sections.forEach(section => {
      describe(`${variant} ${section.title}`, () => {
        const sortedRanges = [...section.feedback_ranges].sort((a, b) => a.max - b.max);

        sortedRanges.forEach((range, index) => {
          it(`selects the range at ${range.max}%`, () => {
            expect(selectFeedbackRange(range.max, sortedRanges)).toBe(range);
          });

          if (index < sortedRanges.length - 1) {
            it(`moves past ${range.max}%`, () => {
              expect(selectFeedbackRange(range.max + 0.01, sortedRanges)).toBe(sortedRanges[index + 1]);
            });
          }
        });
      });
    });
  });
});
