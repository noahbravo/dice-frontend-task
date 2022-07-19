import React from 'react'
import { render, screen } from '@testing-library/react'
import { EventList } from '../components'
import eventData from './fixtures/eventData'

const loadMoreBtnOptions = { name: /Load more/i }

const defatultProps = {
  eventNodes: [],
  showLoadMore: true,
  showHelperText: true,
  handleLoadMore: jest.fn()
}

test('displays text, events and load more button', () => {
  const searchVenue = eventData.venue
  const eventListProps = {
    ...defatultProps,
    searchVenue,
    eventNodes: [eventData]
  }

  render(<EventList {...eventListProps} />)

  // shows text
  expect(screen.getByText(`Upcoming events at ${searchVenue}`)).toBeInTheDocument()

  // shows events
  const eventItems = screen.queryAllByTestId('eventItem')
  expect(eventItems[0]).toBeInTheDocument()

  // shows load more button
  expect(screen.getByRole('button', loadMoreBtnOptions)).toBeInTheDocument()
})
