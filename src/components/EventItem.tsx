import React, { useState, useRef } from 'react'
import tw, { styled, css } from 'twin.macro'
import { formatPrice, formatDate, getDateStatus, DateStatus } from '../utils'
import { toRem } from '../styles'
import { PlayIcon } from './ui/svg'
import type { Event as EventType } from '../@types/events'

const StyledImageContainer = styled.div<{ backgroundImg: string }>`
  ${tw`flex flex-col justify-end object-cover bg-no-repeat bg-center bg-cover`};
  min-width: ${toRem(320)};
  height: ${toRem(320)};
  background-image: ${({ backgroundImg }) => `url(${backgroundImg})`};
  transition: all 0.2s 0.15s ease-in-out;
`

const StyledToggleContent = styled.div`
  ${tw`max-h-0 bg-dark-container-color overflow-x-hidden overflow-y-auto`};
  box-sizing: border-box;
  max-height: ${toRem(475)};
  height: 0;
  transition: all 0.25s 0.15s ease-in-out;
  &::-webkit-scrollbar {
    width: 0.875rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.875rem 0.875rem transparent;
    border: solid 0.25rem transparent;
  }

  &::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0.875rem 0.875rem #bbbbbe;
    border: solid 0.25rem transparent;
    border-radius: 0.875rem;
  }
`

const buttonBaseStyle = css`
  ${tw`text-text-color border-0 cursor-pointer ease-in duration-100`}
`

const EventItem = ({
  id,
  sale_start_date: saleStartDate,
  status,
  name,
  apple_music_tracks: appleMusicTracks,
  spotify_tracks: spotifyTracks,
  location,
  images,
  timezone,
  sold_out: soldOut,
  date_end: dateEnd,
  date,
  ticket_types: ticketTypes,
  lineup,
  description,
  featured,
  url,
  venue,
  currency
}: EventType) => {
  const [activeToggle, setActiveToggle] = useState(false)
  const toggleContentRef = useRef<HTMLInputElement>(null)
  const imageContainer = useRef<HTMLInputElement>(null)

  const onToggle = () => {
    setActiveToggle((active) => !active)

    // set toggle content height
    if (toggleContentRef?.current) {
      const { scrollHeight, clientHeight: currentHeight } = toggleContentRef.current
      const maxHeight = currentHeight ? '' : `${scrollHeight}px`
      toggleContentRef.current.style.height = maxHeight
    }

    // set image container height
    if (imageContainer?.current) {
      const { clientHeight: currentHeight } = imageContainer.current
      const height = activeToggle ? currentHeight * 2 : currentHeight / 2
      imageContainer.current.style.height = `${height}px`
    }
  }

  const lowestTicketPrice = Math.min(...ticketTypes.map(({ price }) => price.total))
  const { month, weekDayName, day, time } = formatDate(date, timezone)

  const withAudioTracks = Boolean(appleMusicTracks.length || spotifyTracks.length)

  const onSale = status === 'on-sale' && getDateStatus(saleStartDate) === DateStatus.After
  const unavailable = status === 'cancelled' || getDateStatus(dateEnd) === DateStatus.Before
  const available = onSale || !unavailable || !soldOut

  const {
    month: saleMonth,
    day: saleDay,
    time: saleTime
  } = (onSale && formatDate(saleStartDate, timezone)) || {}

  const statusText = {
    unavailable: 'Unavailable',
    soldOut: 'Sold out',
    onSale: 'On sale',
    bookNow: 'Book now'
  }

  return (
    <div tw="mt-8 mb-10">
      <StyledImageContainer ref={imageContainer} backgroundImg={images[0]}>
        {(featured || withAudioTracks || onSale) && (
          <div tw="flex justify-between items-center">
            {withAudioTracks && (
              <div tw="flex justify-center items-center w-12 h-12 bg-black bg-opacity-50">
                <PlayIcon />
              </div>
            )}
            {onSale ? (
              <strong tw="flex bg-bg-color py-2 px-4 mr-4">
                On sale {saleDay} {saleMonth} {saleTime}
              </strong>
            ) : (
              featured && (
                <strong tw="flex uppercase bg-accent-color py-2 px-4 mr-4">Featured</strong>
              )
            )}
          </div>
        )}
      </StyledImageContainer>
      <div tw="flex flex-col my-4">
        <span>
          {weekDayName} {day} {month} — {time}
        </span>
        <strong tw="flex text-font-xl mt-2 mb-4">{name}</strong>
        <strong tw="flex mb-1">{venue}</strong>
        <span>
          {location.city}, {location.country}
        </span>
      </div>
      <div>
        <button
          css={buttonBaseStyle}
          tw="flex justify-between w-full bg-dark-container-color px-4 py-2.5 hover:bg-darken-container-color"
          type="button"
          onClick={onToggle}
        >
          <strong>More info</strong>
          <strong>+</strong>
        </button>
        <StyledToggleContent ref={toggleContentRef}>
          <div tw="p-4">
            <p tw="leading-6">{description}</p>
            <div tw="mt-6 mb-8">
              <strong tw="flex text-accent-color uppercase text-font-sm mb-2">Line Up</strong>
              <ul>
                {lineup.map(({ details: lineupDetails, time: lineupTime }, index) => (
                  <li key={`${id}_${lineupDetails}_${lineupTime || index}`} tw="mt-2">
                    <span>{lineupDetails}</span>
                    {lineupTime && <span> — {lineupTime}</span>}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <strong tw="flex text-accent-color uppercase text-font-sm mb-4">Tickets</strong>
              {ticketTypes?.length && (
                <ul>
                  {ticketTypes.map(({ name: ticketName, price: ticketPrice }) => {
                    const { total: totalTicketPrice } = ticketPrice || {}
                    return (
                      <div key={`${id}_${ticketName}`}>
                        <span>{ticketName}</span>
                        {totalTicketPrice && (
                          <span> — {formatPrice(ticketPrice.total, currency)}</span>
                        )}
                      </div>
                    )
                  })}
                </ul>
              )}
            </div>
          </div>
        </StyledToggleContent>
      </div>
      <div tw="flex justify-between items-center py-6">
        {(unavailable || soldOut) && (
          <span
            css={buttonBaseStyle}
            tw="w-40 text-black text-font-sm font-bold uppercase bg-light-container-color text-center py-2.5 pointer-events-none cursor-default"
          >
            {soldOut ? statusText.soldOut : statusText.unavailable}
          </span>
        )}
        {available && (
          <a
            href={url}
            css={buttonBaseStyle}
            rel="noopener noreferrer nofollow"
            target="_blank"
            tw="w-40 text-font-sm font-bold uppercase text-center bg-accent-color py-2.5 hover:bg-darken-accent-color"
          >
            {onSale ? statusText.onSale : statusText.bookNow}
          </a>
        )}
        <div tw="flex flex-col items-end">
          <span tw="opacity-50">From</span>
          <strong tw="text-font-2xl">{formatPrice(lowestTicketPrice, currency)}</strong>
        </div>
      </div>
    </div>
  )
}

export { EventItem }
