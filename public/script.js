/** @import from 'zynex' */
const { Client } = window.Zynex

window.addEventListener('DOMContentLoaded', () => {
  if (window.Zynex) {
    console.log('Zynex is loaded.')
  }
})

new Client({
  id: 'example',
})
  .on('load', (event) => {
    event.channel
  })
  .on('event', (event) => {})
  .on('action', (action, type) => {
    action
  })
  .on('session', (session) => {
    session['cheer-session']
  })
