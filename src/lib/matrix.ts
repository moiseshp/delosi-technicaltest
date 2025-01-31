import { Matrix } from '@/types/matrix';

export function getRotateMatrixCounterClockwise(inputMatrix: Matrix): Matrix {
  return inputMatrix[0]
    .map((_, colIndex) => inputMatrix.map((row) => row[colIndex]))
    .reverse();
}

export function isValidNxNMatrix(jsonString: string): boolean {
  try {
    const parsedMatrix: Matrix = JSON.parse(jsonString);

    if (!isArrayOfArrays(parsedMatrix)) return false;

    const matrixSize = parsedMatrix.length;
    return isSquareMatrixWithIntegers(parsedMatrix, matrixSize);
  } catch {
    return false;
  }
}

function isArrayOfArrays(matrix: unknown): matrix is Matrix {
  return (
    Array.isArray(matrix) &&
    matrix.length > 0 &&
    matrix.every((row) => Array.isArray(row))
  );
}

function isSquareMatrixWithIntegers(matrix: Matrix, size: number): boolean {
  return matrix.every(
    (row) => row.length === size && row.every(Number.isInteger),
  );
}
