import type { SetEventsAction, UpdateEventsAction, ResetEventsAction } from './types'

export function setEvents(payload: SetEventsAction['payload']): SetEventsAction {
  return {
    type: 'SET_EVENTS',
    payload
  }
}

export function updateEvents(payload: UpdateEventsAction['payload']): UpdateEventsAction {
  return {
    type: 'UPDATE_EVENTS',
    payload
  }
}

export function resetEvents(): ResetEventsAction {
  return {
    type: 'RESET_EVENTS'
  }
}
