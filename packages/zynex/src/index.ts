import './global.d.ts'
import { Client } from './client/index.js'

export const Zynex = {
  Client: Client,
}

if (typeof window !== 'undefined') {
  ;(window as any).Zynex = Zynex
}
