import React from 'react'
import { render, screen } from '@testing-library/react'
import { EventList } from '../components'
import eventData from './fixtures/event'

const loadMoreBtnOptions = { name: /Load more/i }

const getTextOptions = (searchVenue: string) => ({
  validVenue: `Upcoming events at ${searchVenue}`,
  invalidVenue: `Hm, couldn't find anything for "${searchVenue}"`
})

const defatultProps = {
  eventNodes: [],
  hasNextPage: true,
  loading: false,
  searchVenue: '',
  handleLoadMore: jest.fn()
}

test('does not display text, events or load more button when venue is empty string', () => {
  render(<EventList {...defatultProps} />)

  // does not show any of the text options
  const textOptions = getTextOptions('')
  Object.values(textOptions).forEach((text) => {
    expect(screen.queryByText(text)).not.toBeInTheDocument()
  })

  // does not show events
  const eventItems = screen.queryAllByTestId('eventItem')
  expect(eventItems).toEqual([])

  // does not show load more button
  expect(screen.queryByRole('button', loadMoreBtnOptions)).not.toBeInTheDocument()
})

test('displays text but no events or load more button when venue has no events', () => {
  const searchVenue = 'Venue with no events'
  const eventListProps = {
    ...defatultProps,
    searchVenue
  }

  render(<EventList {...eventListProps} />)

  // shows valid text
  const textOptions = getTextOptions(searchVenue)
  expect(screen.getByText(textOptions.invalidVenue)).toBeInTheDocument()

  // does not show events
  const eventItems = screen.queryAllByTestId('eventItem')
  expect(eventItems).toEqual([])

  // does not show load more button
  expect(screen.queryByRole('button', loadMoreBtnOptions)).not.toBeInTheDocument()
})

test('displays text, events and load more button when venue has events', () => {
  const searchVenue = eventData.venue
  const eventListProps = {
    ...defatultProps,
    searchVenue,
    eventNodes: [eventData]
  }

  render(<EventList {...eventListProps} />)

  // shows valid text
  const textOptions = getTextOptions(searchVenue)
  expect(screen.getByText(textOptions.validVenue)).toBeInTheDocument()

  // shows events
  const eventItems = screen.queryAllByTestId('eventItem')
  expect(eventItems[0]).toBeInTheDocument()

  // shows load more button
  expect(screen.getByRole('button', loadMoreBtnOptions)).toBeInTheDocument()
})
