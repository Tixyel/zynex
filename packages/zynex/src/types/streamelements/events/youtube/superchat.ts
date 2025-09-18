export type YouTube$Superchat = {
  listener: 'superchat-latest'
  data: Superchat
}

type Superchat = {
  amount: number
  avatar: string
  displayName: string
  providerId: string
  name: string
  _id: string
  sessionTop: boolean
  type: 'superchat'
  originalEventName: 'superchat-latest'
}
