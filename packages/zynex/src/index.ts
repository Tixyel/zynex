export const Zynex = {
  Client: class {
    // ...
  },
}

// Para garantir que window.Zynex exista no UMD:
if (typeof window !== 'undefined') {
  ;(window as any).Zynex = Zynex
}
