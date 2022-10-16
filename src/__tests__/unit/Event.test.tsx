import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import EventCard from '../../ui/components/Events/Card'
import event from '../fixtures/event.json'

const [eventData] = event.data
const { name: eventName } = eventData
const playBtnId = 'playButton'

test('displays event', () => {
  render(<EventCard {...eventData} />)

  expect(screen.getAllByText(eventName)[0]).toBeInTheDocument()
})

test('play button is visible if apple_music_tracks or spotify_tracks are populated with audio clip', () => {
  render(<EventCard {...eventData} />)

  const playButtonIcon = screen.queryByTestId(playBtnId)
  expect(playButtonIcon).toBeInTheDocument()
})

test('play button is not visible if apple_music_tracks and spotify_tracks are not populated with audio clip', () => {
  const props = {
    ...eventData,
    apple_music_tracks: [],
    spotify_tracks: []
  }

  render(<EventCard {...props} />)

  const playButtonIcon = screen.queryByTestId(playBtnId)
  expect(playButtonIcon).not.toBeInTheDocument()
})

test(`"On sale" badge on image and "Get reminded" button should show on events where the on sale date is after now`, () => {
  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)

  const props = {
    ...eventData,
    sale_start_date: tomorrow.toISOString()
  }

  render(<EventCard {...props} />)

  expect(screen.getByText(/On sale/i)).toBeInTheDocument()
  expect(screen.getByText(/Get reminded/i)).toBeInTheDocument()
})

test(`"On sale" badge on image and "Get reminded" button should not show on events where the on sale date is before now`, () => {
  render(<EventCard {...eventData} />)

  expect(screen.queryByText(/On sale/i)).not.toBeInTheDocument()
  expect(screen.queryByText(/Get reminded/i)).not.toBeInTheDocument()
})
