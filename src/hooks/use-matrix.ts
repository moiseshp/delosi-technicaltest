import * as React from 'react';
import { useDebounce } from '@/hooks/use-debounce';
import {
  getRotateMatrixCounterClockwise,
  isValidNxNMatrix,
} from '@/lib/matrix';
import { Matrix } from '@/types/matrix';

interface MatrixState {
  value: string;
  handleValue: (event: React.ChangeEvent<HTMLInputElement>) => void;
  input: Matrix | null;
  output: Matrix | null;
  hasError: boolean;
}

export function useMatrix(): MatrixState {
  const [value, setValue] = React.useState<string>('');
  const [input, setInput] = React.useState<Matrix | null>(null);
  const [output, setOutput] = React.useState<Matrix | null>(null);
  const [hasError, setHasError] = React.useState(false);
  const debounceValue = useDebounce(value);

  const handleReset = () => {
    setInput(null);
    setOutput(null);
  };

  React.useEffect(() => {
    if (!debounceValue) {
      setHasError(false);
      handleReset();
      return;
    }
    if (isValidNxNMatrix(debounceValue)) {
      const matrix: Matrix = JSON.parse(debounceValue);
      setInput(matrix);
      setOutput(getRotateMatrixCounterClockwise(matrix));
      setHasError(false);
    } else {
      setHasError(true);
      handleReset();
    }
  }, [debounceValue]);

  return {
    value,
    handleValue: (event) => setValue(event.target.value),
    input,
    output,
    hasError,
  };
}
