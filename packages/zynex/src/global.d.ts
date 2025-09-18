declare global {
  interface Window {
    Zynex: typeof import('./index.ts').Zynex
  }
  interface WindowEventMap {
    'my-event': CustomEvent<{ foo: string }>
  }
}

export {}
