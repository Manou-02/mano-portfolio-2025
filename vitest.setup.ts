import '@testing-library/jest-dom/vitest';

// Polyfills/mocks for browser APIs used by components
if (typeof window !== 'undefined' && !('matchMedia' in window)) {
  // @ts-expect-error: define matchMedia for tests
  window.matchMedia = (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => false,
  });
}

// Ensure localStorage exists (jsdom provides it, but guard just in case)
if (typeof window !== 'undefined' && !('localStorage' in window)) {
  const store = new Map<string, string>();
  // @ts-expect-error: define localStorage for tests
  window.localStorage = {
    getItem: (key: string) => (store.has(key) ? store.get(key)! : null),
    setItem: (key: string, value: string) => {
      store.set(key, value);
    },
    removeItem: (key: string) => {
      store.delete(key);
    },
    clear: () => store.clear(),
    key: (index: number) => Array.from(store.keys())[index] ?? null,
    get length() {
      return store.size;
    },
  } as unknown as Storage;
}

// Mock IntersectionObserver for framer-motion and scroll hooks
if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
  // @ts-expect-error: define IntersectionObserver for tests
  window.IntersectionObserver = class {
    readonly root: Element | null = null;
    readonly rootMargin: string = '0px';
    readonly thresholds: ReadonlyArray<number> = [0];
    constructor() {}
    observe() {}
    unobserve() {}
    disconnect() {}
    takeRecords() { return []; }
  };
}


