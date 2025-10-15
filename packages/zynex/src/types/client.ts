import { StreamElements } from './streamelements/events/integrated/index.js';
import { Twitch } from './streamelements/events/twitch/index.js';
import { Youtube } from './streamelements/events/youtube/index.js';

export type Provider = 'twitch' | 'youtube' | 'kick' | 'facebook' | 'streamelements';

export type ClientEvents =
  | { provider: 'twitch'; data: Twitch }
  | { provider: 'youtube'; data: Youtube }
  | { provider: 'kick'; data: unknown }
  | { provider: 'facebook'; data: unknown }
  | { provider: 'streamelements'; data: StreamElements };
