import { ClientEvents, Provider } from '../types/client.js'
import { Client } from './index.js'

window.addEventListener('load', () => {
  if (window.client instanceof Client) {
  }
})

window.addEventListener('onWidgetLoad', (data) => {
  const { detail } = data

  if (window.client instanceof Client) {
    const client = window.client

    client.fields = detail.fieldData
    client.session = detail.session.data

    client.details.user = detail.channel
    client.details.currency = detail.currency
    client.details.overlay = detail.overlay

    if (detail.channel.id && !detail.emulated) {
      fetch(`https://api.streamelements.com/kappa/v2/channels/${detail.channel.id}/`)
        .then((res) => res.json())
        .then((profile) => {
          if (profile.provider) {
            client.details.provider = profile.provider
          } else {
            client.details.provider = 'twitch'
          }
        })
        .catch(() => {
          client.details.provider = 'twitch'
        })
    }

    client.storage.on('load', () => {
      client.storage.add(`avatar.${detail.channel.providerId.toLowerCase()}`, {
        value: detail.channel.avatar,
        timestamp: Date.now(),
        expire: Date.now() + client.cache.avatar * 60 * 60 * 1000,
      })
    })
  }
})

window.addEventListener('onSessionUpdate', (data) => {
  const { detail } = data

  if (window.client instanceof Client) {
    const client = window.client

    client.session = detail.session

    client.emit('session', detail.session)
  }
})

window.addEventListener('onEventReceived', ({ detail }) => {
  if (window.client instanceof Client) {
    var provider: Provider =
      // @ts-ignore
      detail.event?.provider || detail.event?.service || detail.event?.data?.provider || window.client.details.provider

    const actAsStreamElements = [
      'kvstore:update',
      'bot:counter',
      'alertService:toggleSound',
      'event:skip',
      'tip-latest',
      'event:test',
    ]

    if (actAsStreamElements.some((l) => l === detail.listener)) provider = 'streamelements'

    const received: ClientEvents = { provider: provider, data: detail }

    switch (received.provider) {
      case 'streamelements': {
        const data = received.data

        break
      }
      case 'twitch': {
        const data = received.data

        switch (data.listener) {
          case 'delete-message': {
            const event = detail.event
            break
          }
          case 'delete-messages': {
            const event = detail.event
            break
          }
          case 'message': {
            const event = detail.event
            break
          }
          case 'follower-latest': {
            const event = detail.event
            break
          }
          case 'cheer-latest': {
            const event = detail.event
            break
          }
          case 'subscriber-latest': {
            if (!data.event.gifted && !data.event.bulkGifted && !data.event.isCommunityGift) {
              // normal
              const event = data.event
            } else if (data.event.gifted && !data.event.bulkGifted && !data.event.isCommunityGift) {
              // gift
              const event = data.event
            } else if (data.event.gifted && !data.event.bulkGifted && data.event.isCommunityGift) {
              // community gift spam
              const event = data.event
            } else if (!data.event.gifted && data.event.bulkGifted && !data.event.isCommunityGift) {
              // community gift
              const event = data.event
            }

            break
          }
          case 'raid-latest': {
            const event = detail.event
            break
          }
        }

        break
      }
      case 'kick': {
        const data = received.data

        break
      }
      case 'youtube': {
        const data = received.data

        break
      }
      case 'facebook': {
        const data = received.data

        break
      }
    }

    window.client.emit('event', received)
  }
})
