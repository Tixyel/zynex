import { Client } from './client/index.js'
import { onEventReceivedEvent } from './types/streamelements/events/onEventReceived.js'
import { onSessionUpdateEvent } from './types/streamelements/events/onSessionUpdate.js'
import { onWidgetLoadEvent } from './types/streamelements/events/onWidgetLoad.js'
import { Logger } from './utils/Logger.js'

export const Zynex = {
  Client: Client,
  logger: new Logger(),
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
