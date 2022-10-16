import type { Events } from '../types/events'
import type { EventActions } from '../actions/events/types'

type State = Events | null

export function eventsReducer(state: State, action: EventActions): State {
  switch (action.type) {
    case 'SET_EVENTS': {
      return action.payload
    }
    case 'UPDATE_EVENTS': {
      return { data: [...(state?.data || []), ...action.payload.data], links: action.payload.links }
    }
    case 'RESET_EVENTS': {
      return null
    }
    default: {
      return state
    }
  }
}
