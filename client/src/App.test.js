import { calculateScore } from './util/ScoreCalculator';

it('Calculate score', () => {
  expect(calculateScore('EXCITING')).toEqual(18);
  expect(calculateScore('QUIZZIFY')).toEqual(41);
});
