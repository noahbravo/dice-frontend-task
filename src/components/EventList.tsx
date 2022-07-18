import React, { useDeferredValue } from 'react'
import 'twin.macro'
import { EventItem } from './EventItem'
import { HelperText } from './ui'
import type { Event as EventType } from '../@types/events'

interface EventListProps {
  eventNodes: EventType[]
  showLoadMore: boolean
  showHelperText: boolean
  handleLoadMore: () => void
}

const EventList = ({
  eventNodes,
  showHelperText,
  showLoadMore,
  handleLoadMore
}: EventListProps) => {
  const deferredEventNodes = useDeferredValue(eventNodes)

  return (
    <>
      {showHelperText && <HelperText text={`Upcoming events at ${eventNodes?.[0]?.venue}`} />}
      <ul tw="flex flex-wrap justify-center sm:gap-8 xl:grid xl:grid-cols-3 xl:justify-items-center">
        {deferredEventNodes.map((event) => (
          <li tw="w-80" key={event.id}>
            <EventItem {...event} />
          </li>
        ))}
      </ul>
      {showLoadMore && (
        <button
          tw="flex justify-center w-full py-3 bg-bg-color border-light-container-color border border-solid rounded-3xl text-text-color uppercase cursor-pointer ease-in duration-100 hover:bg-gray-900 hover:border-gray-900"
          type="button"
          aria-label="load more events"
          onClick={handleLoadMore}
        >
          Load more
        </button>
      )}
    </>
  )
}

export { EventList }
