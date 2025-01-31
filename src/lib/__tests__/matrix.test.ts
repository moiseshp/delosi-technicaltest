import { getRotateMatrixCounterClockwise, isValidNxNMatrix } from '../matrix';

describe('isValidNxNMatrix', () => {
  test.each([
    ['[[1,2],[3,4]]'],
    ['[[1,2,3],[4,5,6],[7,8,9]]'],
    ['[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]'],
  ])('returns true for valid NxN matrix: %s', (value) => {
    expect(isValidNxNMatrix(value)).toBeTruthy();
  });

  test.each([
    ['', 'Empty string'],
    ['[]', 'Empty array'],
    ['[[1],[2,3]]', 'Rows of different lengths'],
    ['[[1,2],[]]', 'Row with empty array'],
  ])('returns false for invalid NxN matrix: %s (%s)', (value) => {
    expect(isValidNxNMatrix(value)).toBeFalsy();
  });
});

describe('getRotateMatrixCounterClockwise', () => {
  test.each([
    [
      [
        [1, 2],
        [3, 4],
      ],
      [
        [2, 4],
        [1, 3],
      ],
    ],
    [
      [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9],
      ],
      [
        [3, 6, 9],
        [2, 5, 8],
        [1, 4, 7],
      ],
    ],
    [
      [
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
      ],
      [
        [4, 8, 12, 16],
        [3, 7, 11, 15],
        [2, 6, 10, 14],
        [1, 5, 9, 13],
      ],
    ],
  ])('rotates the NxN matrix counterclockwise: %s', (value, result) => {
    expect(getRotateMatrixCounterClockwise(value)).toEqual(result);
  });
});
