import { renderHook, act } from '@testing-library/react-hooks';

import useDebounce from '../../../src/lib/useDebounce';

describe('useDebounce', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    jest.useFakeTimers();
  });

  it('should call setTimeout with default delay', async () => {
    await act(async () => renderHook(() => useDebounce('searchTerm')));

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), 500);
  });

  it('should call setTimeout with custom delay', async () => {
    const delay = 1000;

    await act(async () => renderHook(() => useDebounce('searchTerm', delay)));

    expect(setTimeout).toHaveBeenCalledWith(expect.any(Function), delay);
  });

  it('should update debounced value after delay', async () => {
    let searchTerm = 'Hello';

    const { result, rerender } = renderHook(() => useDebounce(searchTerm, 500));

    act(() => jest.advanceTimersByTime(500));

    expect(result.current).toBe(searchTerm);

    searchTerm = 'Goodbye';

    rerender();

    act(() => jest.advanceTimersByTime(500));

    expect(result.current).toBe(searchTerm);
  });
});
