import { renderHook, act } from '@testing-library/react';
import { useDebounce } from '@/hooks/use-debounce';

jest.useFakeTimers();

describe('useDebounce hook', () => {
  it('should return the initial value immediately', () => {
    const { result } = renderHook(() => useDebounce('test', 500));

    expect(result.current).toBe('test');
  });

  it('should not update immediately when the value changes', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'test' },
      },
    );

    rerender({ value: 'other test' });

    expect(result.current).toBe('test');
  });

  it('should update after the delay', () => {
    const { result, rerender } = renderHook(
      ({ value }) => useDebounce(value, 500),
      {
        initialProps: { value: 'test' },
      },
    );

    rerender({ value: 'other test' });
    act(() => {
      jest.advanceTimersByTime(500);
    });

    expect(result.current).toBe('other test');
  });
});
