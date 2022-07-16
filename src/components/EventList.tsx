import React from 'react'
import 'twin.macro'
import { EventItem } from './EventItem'
import type { Event as EventType } from '../@types/events'

interface EventListProps {
  eventNodes: EventType[]
  hasNextPage: boolean
  loading: boolean
  searchVenue: string
  handleLoadMore: () => void
}

const EventList = ({
  eventNodes,
  hasNextPage,
  searchVenue,
  loading,
  handleLoadMore
}: EventListProps) => {
  const withEventNodes = eventNodes.length > 0

  const textContent = withEventNodes
    ? 'Upcoming events at Venue'
    : `Hm, couldn't find anything for "${searchVenue}"`

  const showText = !loading && searchVenue
  const showLoadMore = !loading && hasNextPage

  return (
    <div tw="pt-24">
      {showText && (
        <div tw="w-full flex justify-center lg:justify-start">
          <strong tw="text-font-2xl">{textContent}</strong>
        </div>
      )}
      {withEventNodes && (
        <>
          <ul tw="flex justify-center flex-wrap py-8 sm:gap-8 xl:justify-between">
            {eventNodes.map((event) => (
              <li tw="w-80" key={event.id}>
                <EventItem {...event} />
              </li>
            ))}
          </ul>
          {showLoadMore && (
            <button
              tw="flex w-full justify-center text-text-color uppercase rounded-3xl py-3 bg-bg-color border-light-container-color border border-solid cursor-pointer ease-in duration-100 hover:bg-gray-900 hover:border-gray-900"
              type="button"
              onClick={handleLoadMore}
            >
              Load More
            </button>
          )}
        </>
      )}
    </div>
  )
}

export { EventList }
