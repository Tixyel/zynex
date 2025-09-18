import { onWidgetLoad } from '../types/streamelements/events/onWidgetLoad.js'
import { Alejo$Pronouns$name } from '../types/alejo/pronouns.js'
import { EventProvider } from '../utils/EventProvider.js'
import { useStorage } from '../utils/useStorage.js'
import { Session } from '../types/streamelements/session.js'
import { ClientEvents as events } from '../types/client.js'

type ClientEvents = {
  load: [event: onWidgetLoad]
  action: [action: any, type: 'created' | 'updated' | 'executed']
  session: [session: Session]
  event: [event: events]
}

type ClientOptions = {
  id?: string
}

type ClientStorageOptions<T> = {
  value: T
  timestamp: number
  expire: number
}

type ClientStorage = {
  user: Record<string, ClientStorageOptions<string>>
  avatar: Record<string, ClientStorageOptions<string>>
  pronoun: Record<string, ClientStorageOptions<Alejo$Pronouns$name>>
  emote: Record<string, ClientStorageOptions<string>>
}

export class Client extends EventProvider<ClientEvents> {
  public id: string = 'default'

  public storage!: useStorage<ClientStorage>

  public fields: Record<string, string | number | boolean> = {}

  public session!: Session

  constructor(options: ClientOptions) {
    super()

    this.id = options.id || this.id

    window.client = this

    this.storage = new useStorage({
      id: this.id,
      data: {
        user: {},
        avatar: {},
        pronoun: {},
        emote: {},
      },
    })
  }

  public actions: {
    commands: never[]
    buttons: never[]
  } = {
    commands: [],
    buttons: [],
  }

  public details!: {
    provider: 'twitch' | 'youtube' | 'kick'
    user: onWidgetLoad['channel']
    currency: onWidgetLoad['currency']
    overlay: onWidgetLoad['overlay']
  }

  public cache: { avatar: number; pronoun: number; emote: number } = {
    avatar: 30,
    pronoun: 30,
    emote: 30,
  }
}
