import { useState, useEffect, useCallback } from 'react';

interface AsyncState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export function useAsync<T>(
  asyncFunction: () => Promise<T>,
  immediate = true,
  deps: unknown[] = []
) {
  const [state, setState] = useState<AsyncState<T>>({
    data: null,
    loading: immediate,
    error: null,
  });

  const execute = useCallback(async () => {
    setState((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const result = await asyncFunction();
      setState({ data: result, loading: false, error: null });
      return result;
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : 'An unexpected error occurred.';
      setState({ data: null, loading: false, error: message });
      throw err;
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return {
    ...state,
    execute,
    retry: execute,
  };
}
