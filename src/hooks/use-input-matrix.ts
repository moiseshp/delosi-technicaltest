import * as React from 'react';
import { useDebounce } from '@/hooks/use-debounce';
import {
  getRotateMatrixCounterClockwise,
  isValidNxNMatrix,
} from '@/lib/matrix';
import { Matrix } from '@/types/matrix';

interface InputMatrixState {
  value: string;
  handleValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  inputMatrix: Matrix | null;
  outputMatrix: Matrix | null;
  hasError: boolean;
}

export function useInputMatrix(): InputMatrixState {
  const [value, setValue] = React.useState<string>('');
  const [inputMatrix, setInputMatrix] = React.useState<Matrix | null>(null);
  const [outputMatrix, setOutputMatrix] = React.useState<Matrix | null>(null);
  const [hasError, setHasError] = React.useState(false);
  const debounceValue = useDebounce(value);

  const handleReset = () => {
    setHasError(false);
    setInputMatrix(null);
    setOutputMatrix(null);
  };

  React.useEffect(() => {
    if (!debounceValue) {
      handleReset();
      return;
    }
    if (isValidNxNMatrix(debounceValue)) {
      const matrix: Matrix = JSON.parse(debounceValue);
      setInputMatrix(matrix);
      setOutputMatrix(getRotateMatrixCounterClockwise(matrix));
      setHasError(false);
    } else {
      setHasError(true);
      setInputMatrix(null);
      setOutputMatrix(null);
    }
  }, [debounceValue]);

  return {
    value,
    handleValue: (event) => setValue(event.target.value),
    inputMatrix,
    outputMatrix,
    hasError,
  };
}
