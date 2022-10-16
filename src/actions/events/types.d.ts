import type { Events } from '../../types/events'

export interface SetEventsAction {
  type: 'SET_EVENTS'
  payload: Events
}

export interface UpdateEventsAction {
  type: 'UPDATE_EVENTS'
  payload: Events
}

export interface ResetEventsAction {
  type: 'RESET_EVENTS'
}

export type EventActions = SetEventsAction | UpdateEventsAction | ResetEventsAction
