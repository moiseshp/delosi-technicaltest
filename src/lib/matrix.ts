import { Matrix } from '@/types/matrix';

export function isValidNxNMatrix(value: string): boolean {
  try {
    const matrix: Matrix = JSON.parse(value);
    if (
      !Array.isArray(matrix) ||
      matrix.length === 0 ||
      !matrix.every((row) => Array.isArray(row))
    ) {
      return false;
    }

    const size = matrix.length;

    return matrix.every(
      (row) => row.length === size && row.every((num) => Number.isInteger(num)),
    );
  } catch {
    return false;
  }
}

export function getRotateMatrixCounterClockwise(inputMatrix: Matrix): Matrix {
  return inputMatrix[0]
    .map((_, colIndex) => inputMatrix.map((row) => row[colIndex]))
    .reverse();
}
