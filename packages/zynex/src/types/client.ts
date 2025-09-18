import { Twitch } from './streamelements/events/twitch/index.js'

export type Provider = 'twitch' | 'youtube' | 'kick' | 'facebook' | 'streamelements'

export type ClientEvents =
  | { provider: 'twitch'; data: Twitch }
  | { provider: 'youtube'; data: unknown }
  | { provider: 'kick'; data: unknown }
  | { provider: 'facebook'; data: unknown }
  | { provider: 'streamelements'; data: unknown }
