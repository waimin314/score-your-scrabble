import { calculateScore } from './util/ScoreCalculator';
import { saveEntry } from './util/API';

it('Calculate score', () => {
  expect(calculateScore('EXCITING')).toEqual(18);
  expect(calculateScore('QUIZZIFY')).toEqual(41);
});

it('Send invalid word', async () => {
  let entry = { letters: 'ASDFG', score: 111 };
  let { alertType, message } = await saveEntry(entry);
  expect(alertType).toEqual('Error');
  expect(message).toEqual(`${entry.letters} is not a valid word`);
});
