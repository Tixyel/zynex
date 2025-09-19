import { Zynex } from '../index.js'
import { Alejo$Pronouns } from '../types/alejo/pronouns.js'
import { TwitchBadge } from '../types/badge.js'
import { BttvEmote, SeventvEmote, TwitchEmote } from '../types/emote.js'
import {
  FieldSettings,
  NormalizedFieldSettings,
  StreamElementsField,
  StreamElementsFieldTypes,
} from '../types/streamelements/customfields.js'
import { Session$AnyConfig, Session$AvailableData } from '../types/streamelements/session.generate.js'

export class Simulation {
  static data = {
    names: ['tixyel', 'urie_s2', 'itzzcatt', 'beniarts', 'cupidiko', 'shy_madeit'] as string[],
    messages: ['Hello!', 'How are you?', 'Goodbye!', 'Have fun!'] as string[],
    tiers: ['1000', '2000', '3000', 'prime'] as string[],
    avatars: [
      'https://static-cdn.jtvnw.net/user-default-pictures-uv/13e5fa74-defa-11e9-809c-784f43822e80-profile_image-300x300.png',
      'https://static-cdn.jtvnw.net/user-default-pictures-uv/dbdc9198-def8-11e9-8681-784f43822e80-profile_image-300x300.png',
      'https://static-cdn.jtvnw.net/user-default-pictures-uv/998f01ae-def8-11e9-b95c-784f43822e80-profile_image-300x300.png',
      'https://static-cdn.jtvnw.net/user-default-pictures-uv/de130ab0-def7-11e9-b668-784f43822e80-profile_image-300x300.png',
      'https://static-cdn.jtvnw.net/user-default-pictures-uv/ebe4cd89-b4f4-4cd9-adac-2f30151b4209-profile_image-300x300.png',
      'https://static-cdn.jtvnw.net/user-default-pictures-uv/215b7342-def9-11e9-9a66-784f43822e80-profile_image-300x300.png',
      'https://static-cdn.jtvnw.net/user-default-pictures-uv/ead5c8b2-a4c9-4724-b1dd-9f00b46cbd3d-profile_image-300x300.png',
    ] as string[],
    items: [] as any[],
    emotes: [
      {
        'type': 'twitch',
        'name': 'DinoDance',
        'id': 'emotesv2_dcd06b30a5c24f6eb871e8f5edbd44f7',
        'gif': true,
        'animated': true,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_dcd06b30a5c24f6eb871e8f5edbd44f7/animated/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_dcd06b30a5c24f6eb871e8f5edbd44f7/animated/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_dcd06b30a5c24f6eb871e8f5edbd44f7/animated/dark/3.0',
        },
        'start': 46,
        'end': 55,
      },
      {
        'type': 'twitch',
        'name': 'PopNemo',
        'id': 'emotesv2_5d523adb8bbb4786821cd7091e47da21',
        'gif': true,
        'animated': true,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_5d523adb8bbb4786821cd7091e47da21/animated/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_5d523adb8bbb4786821cd7091e47da21/animated/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/emotesv2_5d523adb8bbb4786821cd7091e47da21/animated/dark/3.0',
        },
        'start': 56,
        'end': 63,
      },
      {
        'type': 'twitch',
        'name': 'TransgenderPride',
        'id': '307827377',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827377/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827377/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827377/default/dark/3.0',
        },
        'start': 0,
        'end': 15,
      },
      {
        'type': 'twitch',
        'name': 'PansexualPride',
        'id': '307827370',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827370/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827370/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827370/default/dark/3.0',
        },
        'start': 17,
        'end': 30,
      },
      {
        'type': 'twitch',
        'name': 'NonbinaryPride',
        'id': '307827356',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827356/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827356/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827356/default/dark/3.0',
        },
        'start': 32,
        'end': 45,
      },
      {
        'type': 'twitch',
        'name': 'LesbianPride',
        'id': '307827340',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827340/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827340/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827340/default/dark/3.0',
        },
        'start': 47,
        'end': 58,
      },
      {
        'type': 'twitch',
        'name': 'IntersexPride',
        'id': '307827332',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827332/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827332/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827332/default/dark/3.0',
        },
        'start': 60,
        'end': 72,
      },
      {
        'type': 'twitch',
        'name': 'GenderFluidPride',
        'id': '307827326',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827326/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827326/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827326/default/dark/3.0',
        },
        'start': 74,
        'end': 89,
      },
      {
        'type': 'twitch',
        'name': 'GayPride',
        'id': '307827321',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827321/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827321/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827321/default/dark/3.0',
        },
        'start': 91,
        'end': 98,
      },
      {
        'type': 'twitch',
        'name': 'BisexualPride',
        'id': '307827313',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827313/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827313/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827313/default/dark/3.0',
        },
        'start': 100,
        'end': 112,
      },
      {
        'type': 'twitch',
        'name': 'AsexualPride',
        'id': '307827267',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/307827267/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/307827267/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/307827267/default/dark/3.0',
        },
        'start': 114,
        'end': 125,
      },
      {
        'type': 'twitch',
        'name': 'PogChamp',
        'id': '305954156',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/305954156/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/305954156/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/305954156/default/dark/3.0',
        },
        'start': 127,
        'end': 134,
      },
      {
        'type': 'twitch',
        'name': 'GlitchCat',
        'id': '304486301',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/304486301/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/304486301/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/304486301/default/dark/3.0',
        },
        'start': 136,
        'end': 144,
      },
      {
        'type': 'twitch',
        'name': 'DarkMode',
        'id': '461298',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/461298/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/461298/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/461298/default/dark/3.0',
        },
        'start': 146,
        'end': 153,
      },
      {
        'type': 'twitch',
        'name': 'LUL',
        'id': '425618',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/425618/default/dark/3.0',
        },
        'start': 155,
        'end': 157,
      },
      {
        'type': 'twitch',
        'name': 'TheIlluminati',
        'id': '145315',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/145315/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/145315/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/145315/default/dark/3.0',
        },
        'start': 159,
        'end': 171,
      },
      {
        'type': 'twitch',
        'name': 'imGlitch',
        'id': '112290',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/112290/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/112290/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/112290/default/dark/3.0',
        },
        'start': 173,
        'end': 180,
      },
      {
        'type': 'twitch',
        'name': 'DoritosChip',
        'id': '102242',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/102242/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/102242/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/102242/default/dark/3.0',
        },
        'start': 182,
        'end': 192,
      },
      {
        'type': 'twitch',
        'name': 'SSSsss',
        'id': '46',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/46/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/46/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/46/default/dark/3.0',
        },
        'start': 194,
        'end': 199,
      },
      {
        'type': 'twitch',
        'name': 'PunchTrees',
        'id': '47',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/47/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/47/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/47/default/dark/3.0',
        },
        'start': 201,
        'end': 210,
      },
      {
        'type': 'twitch',
        'name': 'BloodTrail',
        'id': '69',
        'gif': false,
        'urls': {
          '1': 'https://static-cdn.jtvnw.net/emoticons/v2/69/default/dark/1.0',
          '2': 'https://static-cdn.jtvnw.net/emoticons/v2/69/default/dark/2.0',
          '4': 'https://static-cdn.jtvnw.net/emoticons/v2/69/default/dark/3.0',
        },
        'start': 223,
        'end': 232,
      },
      {
        'type': '7tv',
        'name': 'CookieTime',
        'id': '635b0184ea9ce7391cbf77d6',
        'gif': true,
        'animated': true,
        'urls': {
          '1': 'https://cdn.7tv.app/emote/635b0184ea9ce7391cbf77d6/1x.webp',
          '2': 'https://cdn.7tv.app/emote/635b0184ea9ce7391cbf77d6/2x.webp',
          '3': 'https://cdn.7tv.app/emote/635b0184ea9ce7391cbf77d6/3x.webp',
          '4': 'https://cdn.7tv.app/emote/635b0184ea9ce7391cbf77d6/4x.webp',
        },
        'start': 0,
        'end': 10,
        'coords': {
          'x': 0,
          'y': 0,
        },
      },
      {
        'type': 'bttv',
        'name': 'catJAM',
        'id': '5f1b0186cf6d2144653d2970',
        'gif': true,
        'animated': true,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/1x',
          '2': 'https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/2x',
          '4': 'https://cdn.betterttv.net/emote/5f1b0186cf6d2144653d2970/3x',
        },
        'start': 0,
        'end': 6,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 112,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': ':tf:',
        'id': '54fa8f1401e468494b85b537',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/54fa8f1401e468494b85b537/1x',
          '2': 'https://cdn.betterttv.net/emote/54fa8f1401e468494b85b537/2x',
          '4': 'https://cdn.betterttv.net/emote/54fa8f1401e468494b85b537/3x',
        },
        'start': 7,
        'end': 11,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 112,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'AngelThump',
        'id': '566ca1a365dbbdab32ec055b',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/566ca1a365dbbdab32ec055b/1x',
          '2': 'https://cdn.betterttv.net/emote/566ca1a365dbbdab32ec055b/2x',
          '4': 'https://cdn.betterttv.net/emote/566ca1a365dbbdab32ec055b/3x',
        },
        'start': 12,
        'end': 22,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 334,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'ariW',
        'id': '56fa09f18eff3b595e93ac26',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/56fa09f18eff3b595e93ac26/1x',
          '2': 'https://cdn.betterttv.net/emote/56fa09f18eff3b595e93ac26/2x',
          '4': 'https://cdn.betterttv.net/emote/56fa09f18eff3b595e93ac26/3x',
        },
        'start': 23,
        'end': 27,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 112,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'BroBalt',
        'id': '54fbf00a01abde735115de5c',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/54fbf00a01abde735115de5c/1x',
          '2': 'https://cdn.betterttv.net/emote/54fbf00a01abde735115de5c/2x',
          '4': 'https://cdn.betterttv.net/emote/54fbf00a01abde735115de5c/3x',
        },
        'start': 28,
        'end': 35,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 184,
          'height': 120,
        },
      },
      {
        'type': 'bttv',
        'name': 'bttvNice',
        'id': '54fab7d2633595ca4c713abf',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/54fab7d2633595ca4c713abf/1x',
          '2': 'https://cdn.betterttv.net/emote/54fab7d2633595ca4c713abf/2x',
          '4': 'https://cdn.betterttv.net/emote/54fab7d2633595ca4c713abf/3x',
        },
        'start': 36,
        'end': 44,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 168,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'bUrself',
        'id': '566c9f3b65dbbdab32ec052e',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/566c9f3b65dbbdab32ec052e/1x',
          '2': 'https://cdn.betterttv.net/emote/566c9f3b65dbbdab32ec052e/2x',
          '4': 'https://cdn.betterttv.net/emote/566c9f3b65dbbdab32ec052e/3x',
        },
        'start': 45,
        'end': 52,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 112,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'c!',
        'id': '6468f7acaee1f7f47567708e',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/6468f7acaee1f7f47567708e/1x',
          '2': 'https://cdn.betterttv.net/emote/6468f7acaee1f7f47567708e/2x',
          '4': 'https://cdn.betterttv.net/emote/6468f7acaee1f7f47567708e/3x',
        },
        'start': 53,
        'end': 55,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 112,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'CandianRage',
        'id': '54fbf09c01abde735115de61',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/54fbf09c01abde735115de61/1x',
          '2': 'https://cdn.betterttv.net/emote/54fbf09c01abde735115de61/2x',
          '4': 'https://cdn.betterttv.net/emote/54fbf09c01abde735115de61/3x',
        },
        'start': 56,
        'end': 67,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 112,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'CiGrip',
        'id': '54fa8fce01e468494b85b53c',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/54fa8fce01e468494b85b53c/1x',
          '2': 'https://cdn.betterttv.net/emote/54fa8fce01e468494b85b53c/2x',
          '4': 'https://cdn.betterttv.net/emote/54fa8fce01e468494b85b53c/3x',
        },
        'start': 68,
        'end': 74,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 112,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'ConcernDoge',
        'id': '566c9f6365dbbdab32ec0532',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/566c9f6365dbbdab32ec0532/1x',
          '2': 'https://cdn.betterttv.net/emote/566c9f6365dbbdab32ec0532/2x',
          '4': 'https://cdn.betterttv.net/emote/566c9f6365dbbdab32ec0532/3x',
        },
        'start': 75,
        'end': 86,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 101,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'CruW',
        'id': '55471c2789d53f2d12781713',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/55471c2789d53f2d12781713/1x',
          '2': 'https://cdn.betterttv.net/emote/55471c2789d53f2d12781713/2x',
          '4': 'https://cdn.betterttv.net/emote/55471c2789d53f2d12781713/3x',
        },
        'start': 87,
        'end': 91,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 112,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'cvHazmat',
        'id': '5e76d338d6581c3724c0f0b2',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/5e76d338d6581c3724c0f0b2/1x',
          '2': 'https://cdn.betterttv.net/emote/5e76d338d6581c3724c0f0b2/2x',
          '4': 'https://cdn.betterttv.net/emote/5e76d338d6581c3724c0f0b2/3x',
        },
        'start': 92,
        'end': 100,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 112,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'D:',
        'id': '55028cd2135896936880fdd7',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/1x',
          '2': 'https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/2x',
          '4': 'https://cdn.betterttv.net/emote/55028cd2135896936880fdd7/3x',
        },
        'start': 101,
        'end': 103,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 112,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'haHAA',
        'id': '555981336ba1901877765555',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/555981336ba1901877765555/1x',
          '2': 'https://cdn.betterttv.net/emote/555981336ba1901877765555/2x',
          '4': 'https://cdn.betterttv.net/emote/555981336ba1901877765555/3x',
        },
        'start': 104,
        'end': 109,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 112,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'LuL',
        'id': '567b00c61ddbe1786688a633',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/567b00c61ddbe1786688a633/1x',
          '2': 'https://cdn.betterttv.net/emote/567b00c61ddbe1786688a633/2x',
          '4': 'https://cdn.betterttv.net/emote/567b00c61ddbe1786688a633/3x',
        },
        'start': 110,
        'end': 113,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 112,
          'height': 112,
        },
      },
      {
        'type': 'bttv',
        'name': 'DuckerZ',
        'id': '573d38b50ffbf6cc5cc38dc9',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.betterttv.net/emote/573d38b50ffbf6cc5cc38dc9/1x',
          '2': 'https://cdn.betterttv.net/emote/573d38b50ffbf6cc5cc38dc9/2x',
          '4': 'https://cdn.betterttv.net/emote/573d38b50ffbf6cc5cc38dc9/3x',
        },
        'start': 114,
        'end': 121,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 149,
          'height': 112,
        },
      },
      {
        'type': 'ffz',
        'name': 'CatBag',
        'id': '25927',
        'gif': false,
        'animated': false,
        'urls': {
          '1': 'https://cdn.frankerfacez.com/emote/25927/1',
          '2': 'https://cdn.frankerfacez.com/emote/25927/2',
          '4': 'https://cdn.frankerfacez.com/emote/25927/4',
        },
        'start': 122,
        'end': 128,
        'coords': {
          'x': 0,
          'y': 0,
          'width': 143,
          'height': 128,
        },
      },
    ] as Array<TwitchEmote | BttvEmote | SeventvEmote>,
    badges: {
      '100 bits': {
        type: '100 bits',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/09d93036-e7ce-431c-9a9e-7044297133f2/3',
        description: '100 bits badge',
      },
      'no audio': {
        type: 'no audio',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/aef2cd08-f29b-45a1-8c12-d44d7fd5e6f0/3',
        description: 'Individuals with unreliable or no sound can select this badge',
      },
      'no video': {
        type: 'no video',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/199a0dba-58f3-494e-a7fc-1fa0a1001fb8/3',
        description: 'Individuals with unreliable or no video can select this badge',
      },
      'bot': {
        type: 'bot',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/df9095f6-a8a0-4cc2-bb33-d908c0adffb8/3',
        description: 'Twitch bot',
      },
      'twitch staff': {
        type: 'twitch staff',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/d97c37bd-a6f5-4c38-8f57-4e4bef88af34/3',
        description: 'Twitch Staff',
      },
      'admins': {
        type: 'admins',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/9ef7e029-4cdf-4d4d-a0d5-e2b3fb2583fe/3',
        description: 'Admins',
      },
      'artist': {
        type: 'artist',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/4300a897-03dc-4e83-8c0e-c332fee7057f/3',
        description: 'Artist',
      },
      'game developer': {
        type: 'game developer',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/85856a4a-eb7d-4e26-a43e-d204a977ade4/3',
        description: 'Game Developer',
      },
      'prime': {
        type: 'prime',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/a1dd5073-19c3-4911-8cb4-c464a7bc1510/3',
        description: 'Prime',
      },
      'turbo': {
        type: 'turbo',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/bd444ec6-8f34-4bf9-91f4-af1e3428d80f/3',
        description: 'Turbo',
      },
      'subscriber': {
        type: 'subscriber',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/5d9f2208-5dd8-11e7-8513-2ff4adfae661/3',
        description: 'Subscriber',
      },
      'broadcaster': {
        type: 'broadcaster',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/5527c58c-fb7d-422d-b71b-f309dcb85cc1/3',
        description: 'Broadcaster',
      },
      'verified': {
        type: 'verified',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/d12a2e27-16f6-41d0-ab77-b780518f00a3/3',
        description: 'Verified',
      },
      'moderator': {
        type: 'moderator',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/3267646d-33f0-4b17-b3df-f923a41db1d0/3',
        description: 'Moderator',
      },
      'vip': {
        type: 'vip',
        version: '1',
        url: 'https://static-cdn.jtvnw.net/badges/v1/b817aba4-fad8-49e2-b88a-7cc744dfa6ec/3',
        description: 'VIP',
      },
    } as Record<string, TwitchBadge>,
    pronouns: Alejo$Pronouns,
    tts: [
      'Filiz',
      'Astrid',
      'Tatyana',
      'Maxim',
      'Carmen',
      'Ines',
      'Cristiano',
      'Vitoria',
      'Ricardo',
      'Maja',
      'Jan',
      'Jacek',
      'Ewa',
      'Ruben',
      'Lotte',
      'Liv',
      'Seoyeon',
      'Takumi',
      'Mizuki',
      'Giorgio',
      'Carla',
      'Bianca',
      'Karl',
      'Dora',
      'Mathieu',
      'Celine',
      'Chantal',
      'Penelope',
      'Miguel',
      'Mia',
      'Enrique',
      'Conchita',
      'Geraint',
      'Salli',
      'Matthew',
      'Kimberly',
      'Kendra',
      'Justin',
      'Joey',
      'Joanna',
      'Ivy',
      'Raveena',
      'Aditi',
      'Emma',
      'Brian',
      'Amy',
      'Russell',
      'Nicole',
      'Vicki',
      'Marlene',
      'Hans',
      'Naja',
      'Mads',
      'Gwyneth',
      'Zhiyu',
      'Tracy',
      'Danny',
      'Huihui',
      'Yaoyao',
      'Kangkang',
      'HanHan',
      'Zhiwei',
      'Asaf',
      'An',
      'Stefanos',
      'Filip',
      'Ivan',
      'Heidi',
      'Herena',
      'Kalpana',
      'Hemant',
      'Matej',
      'Andika',
      'Rizwan',
      'Lado',
      'Valluvar',
      'Linda',
      'Heather',
      'Sean',
      'Michael',
      'Karsten',
      'Guillaume',
      'Pattara',
      'Jakub',
      'Szabolcs',
      'Hoda',
      'Naayf',
    ] as string[],
  }

  static color = {
    random() {
      return `#${Math.floor(Math.random() * 0xffffff)
        .toString(16)
        .padStart(6, '0')}`
    },

    opacity(opacity: number = 100, color: string) {
      color = color.length > 7 ? color.substring(0, 6) : color
      opacity = opacity > 1 ? opacity / 100 : opacity

      let result = Math.round(Math.min(Math.max(opacity, 0), 1) * 255)
        .toString(16)
        .toLowerCase()

      result = result.padStart(2, '0')

      return color + result
    },

    getOpacity(hex: string) {
      if (!hex.startsWith('#') || hex.length <= 7) return { opacity: 100, hex }

      var ohex = hex.slice(-2)
      var decimal = parseInt(ohex, 16) / 255
      var percentage = Math.round(decimal * 100)
      var color = hex.length > 7 ? hex.slice(0, 7) : hex

      return { opacity: percentage, color: color }
    },

    validate(str: string): 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla' | 'css-color-name' | false {
      if (typeof str !== 'string' || !str.length) return false

      const s = str.trim()

      // HEX (#FFF, #FFFFFF, #FFFFFFFF)
      if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(s) || /^#([A-Fa-f0-9]{4}|[A-Fa-f0-9]{8})$/.test(s)) {
        return 'hex'
      }

      // rgb(255, 255, 255)
      if (/^rgb\(\s*(?:\d{1,3}\s*,\s*){2}\d{1,3}\s*\)$/.test(s)) {
        return 'rgb'
      }

      // rgba(255, 255, 255, 0.5)
      if (/^rgba\(\s*(?:\d{1,3}\s*,\s*){3}(?:0|1|0?\.\d+)\s*\)$/.test(s)) {
        return 'rgba'
      }

      // hsl(360, 100%, 100%)
      if (/^hsl\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*\)$/.test(s)) {
        return 'hsl'
      }

      // hsla(360, 100%, 100%, 0.5)
      if (/^hsla\(\s*\d{1,3}\s*,\s*\d{1,3}%\s*,\s*\d{1,3}%\s*,\s*(?:0|1|0?\.\d+)\s*\)$/.test(s)) {
        return 'hsla'
      }

      if (
        [
          'aliceblue',
          'antiquewhite',
          'aqua',
          'aquamarine',
          'azure',
          'beige',
          'bisque',
          'black',
          'blanchedalmond',
          'blue',
          'blueviolet',
          'brown',
          'burlywood',
          'cadetblue',
          'chartreuse',
          'chocolate',
          'coral',
          'cornflowerblue',
          'cornsilk',
          'crimson',
          'cyan',
          'darkblue',
          'darkcyan',
          'darkgoldenrod',
          'darkgray',
          'darkgreen',
          'darkgrey',
          'darkkhaki',
          'darkmagenta',
          'darkolivegreen',
          'darkorange',
          'darkorchid',
          'darkred',
          'darksalmon',
          'darkseagreen',
          'darkslateblue',
          'darkslategray',
          'darkslategrey',
          'darkturquoise',
          'darkviolet',
          'deeppink',
          'deepskyblue',
          'dimgray',
          'dimgrey',
          'dodgerblue',
          'firebrick',
          'floralwhite',
          'forestgreen',
          'fuchsia',
          'gainsboro',
          'ghostwhite',
          'gold',
          'goldenrod',
          'gray',
          'green',
          'greenyellow',
          'grey',
          'honeydew',
          'hotpink',
          'indianred',
          'indigo',
          'ivory',
          'khaki',
          'lavender',
          'lavenderblush',
          'lawngreen',
          'lemonchiffon',
          'lightblue',
          'lightcoral',
          'lightcyan',
          'lightgoldenrodyellow',
          'lightgray',
          'lightgreen',
          'lightgrey',
          'lightpink',
          'lightsalmon',
          'lightseagreen',
          'lightskyblue',
          'lightslategray',
          'lightslategrey',
          'lightsteelblue',
          'lightyellow',
          'lime',
          'limegreen',
          'linen',
          'magenta',
          'maroon',
          'mediumaquamarine',
          'mediumblue',
          'mediumorchid',
          'mediumpurple',
          'mediumseagreen',
          'mediumslateblue',
          'mediumspringgreen',
          'mediumturquoise',
          'mediumvioletred',
          'midnightblue',
          'mintcream',
          'mistyrose',
          'moccasin',
          'navajowhite',
          'navy',
          'oldlace',
          'olive',
          'olivedrab',
          'orange',
          'orangered',
          'orchid',
          'palegoldenrod',
          'palegreen',
          'paleturquoise',
          'palevioletred',
          'papayawhip',
          'peachpuff',
          'peru',
          'pink',
          'plum',
          'powderblue',
          'purple',
          'rebeccapurple',
          'red',
          'rosybrown',
          'royalblue',
          'saddlebrown',
          'salmon',
          'sandybrown',
          'seagreen',
          'seashell',
          'sienna',
          'silver',
          'skyblue',
          'slateblue',
          'slategray',
          'slategrey',
          'snow',
          'springgreen',
          'steelblue',
          'tan',
          'teal',
          'thistle',
          'tomato',
          'turquoise',
          'violet',
          'wheat',
          'white',
          'whitesmoke',
          'yellow',
          'yellowgreen',
          'transparent',
        ].includes(s.toLowerCase())
      ) {
        return 'css-color-name'
      }

      return false
    },
  }

  static rand = {
    number(min: number, max: number, float: number = 0): number {
      if (min > max) [min, max] = [max, min]

      const rand = Math.random() * (max - min) + min
      return float ? Number(rand.toFixed(float)) : Math.round(rand)
    },

    boolean(threshold: number = 0.5): boolean {
      return Math.random() > threshold
    },

    string(length: number, chars: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'): string {
      let result = ''

      for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length))
      }

      return result
    },

    array<T>(arr: T[]): [T, number] {
      const index = this.number(0, arr.length - 1)

      return [arr[index], index]
    },

    date(rangeDays: number = 365): string {
      const now = Date.now()
      const past = now - this.number(0, rangeDays * 24 * 60 * 60 * 1000)

      return new Date(past).toISOString()
    },
  }
}
