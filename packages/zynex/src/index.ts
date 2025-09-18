import { Client } from './client/index.js'
import { onEventReceivedEvent } from './types/streamelements/events/onEventReceived.js'
import { onSessionUpdateEvent } from './types/streamelements/events/onSessionUpdate.js'
import { onWidgetLoadEvent } from './types/streamelements/events/onWidgetLoad.js'

export const Zynex = {
  Client: Client,
}

declare global {
  interface Window {
    Zynex: typeof Zynex
    client?: Client
  }
  interface WindowEventMap {
    'onWidgetLoad': onWidgetLoadEvent
    'onSessionUpdate': onSessionUpdateEvent
    'onEventReceived': onEventReceivedEvent
  }
}

if (typeof window !== 'undefined') {
  ;(window as any).Zynex = Zynex
}
