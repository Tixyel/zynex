import { Twitch } from './twitch/index.js'

export type onEventReceivedEvent = CustomEvent<onEventReceived>

export type onEventReceived = Twitch
