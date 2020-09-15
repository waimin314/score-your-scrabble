const ONE_POINT = ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'S', 'T', 'R'];
const TWO_POINT = ['D', 'G'];
const THREE_POINT = ['B', 'C', 'M', 'P'];
const FOUR_POINT = ['F', 'H', 'V', 'W', 'Y'];
const FIVE_POINT = ['K'];
const EIGHT_POINT = ['J', 'X'];
const TEN_POINT = ['Q', 'Z'];

const getPointOf = (letter) => {
  let point = -1;
  if (ONE_POINT.indexOf(letter) > -1) point = 1;
  if (TWO_POINT.indexOf(letter) > -1) point = 2;
  if (THREE_POINT.indexOf(letter) > -1) point = 3;
  if (FOUR_POINT.indexOf(letter) > -1) point = 4;
  if (FIVE_POINT.indexOf(letter) > -1) point = 5;
  if (EIGHT_POINT.indexOf(letter) > -1) point = 8;
  if (TEN_POINT.indexOf(letter) > -1) point = 10;
  return point;
};

const calcualateScore = (word) => {
  let score = 0;
  word.split('').forEach((letter) => {
    let point = getPointOf(letter);
    if (point !== -1) score += point;
  });
  return score;
};

export { calcualateScore };
