import { renderHook, act } from '@testing-library/react';
import { useMatrix } from '@/hooks/use-matrix';

describe('useMatrix hook', () => {
  it('must be initialized with default values', () => {
    const { result } = renderHook(() => useMatrix());
    expect(result.current.value).toBe('');
    expect(result.current.input).toBeNull();
    expect(result.current.output).toBeNull();
    expect(result.current.hasError).toBeFalsy();
  });

  it('should update value when handleValue is called', () => {
    const { result } = renderHook(() => useMatrix());

    act(() => {
      result.current.handleValue({
        target: { value: '[[1,2],[3,4]]' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.value).toBe('[[1,2],[3,4]]');
  });

  it('should update input and output when a valid NxN matrix is entered', async () => {
    jest.useFakeTimers();

    const { result } = renderHook(() => useMatrix());

    act(() => {
      result.current.handleValue({
        target: { value: '[[1,2],[3,4]]' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current.input).toEqual([
      [1, 2],
      [3, 4],
    ]);
    expect(result.current.output).toEqual([
      [2, 4],
      [1, 3],
    ]);
    expect(result.current.hasError).toBeFalsy();
    jest.useRealTimers();
  });

  it('should set error when an invalid matrix is entered', () => {
    jest.useFakeTimers();
    const { result } = renderHook(() => useMatrix());

    act(() => {
      result.current.handleValue({
        target: { value: '[[1],[3,4,5]]' },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current.input).toBeNull();
    expect(result.current.output).toBeNull();
    expect(result.current.hasError).toBeTruthy();

    jest.useRealTimers();
  });
});
