import { calcualateScore } from './util/ScoreCalculator';

it('Calculate score', () => {
  expect(calcualateScore('EXCITING')).toEqual(18);
  expect(calcualateScore('QUIZZIFY')).toEqual(41);
});
