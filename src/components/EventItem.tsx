import React, { useState, useRef } from 'react'
import { BackgroundImage } from 'react-image-and-background-image-fade'
import tw, { styled, css } from 'twin.macro'
import { formatPrice, formatDate, getDateStatus, DateStatus } from '../utils'
import { toRem } from '../styles'
import { PlayIcon } from './ui/svg'
import type { Event as EventType } from '../@types/events'

const StyledToggleContent = styled.div`
  ${tw`max-h-0 bg-dark-container-color overflow-x-hidden overflow-y-auto`};
  height: 0;
  max-height: ${toRem(475)};
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

const backgroundImageTransition = css`
  transition: all 0.2s 0.15s ease-in-out;
`

const imageContainerStyles = css`
  ${tw`flex flex-col justify-end object-cover bg-no-repeat bg-center bg-cover`};
  ${backgroundImageTransition}
`

const StyledImageWrapper = styled.div`
  > div {
    ${backgroundImageTransition}
  }
`

const buttonBaseStyles = css`
  ${tw`border-0 text-text-color cursor-pointer ease-in duration-100`}
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
  const imageWrapperRef = useRef<HTMLInputElement>(null)

  const onToggle = () => {
    setActiveToggle((active) => !active)

    // set toggle content height
    if (toggleContentRef?.current) {
      const { scrollHeight, clientHeight: currentHeight } = toggleContentRef.current
      const maxHeight = currentHeight ? '' : `${scrollHeight}px`
      toggleContentRef.current.style.height = maxHeight
    }

    // set background image and its container height
    if (imageWrapperRef?.current) {
      const bgImageContainer = imageWrapperRef.current.querySelector('div')
      const imageBackground = bgImageContainer?.querySelector('div')
      if (bgImageContainer && imageBackground) {
        const { clientHeight: currentHeight } = bgImageContainer
        const height = activeToggle ? currentHeight * 2 : currentHeight / 2
        bgImageContainer.style.height = `${height}px`
        imageBackground.style.height = `${height}px`
      }
    }
  }

  const lowestTicketPrice = Math.min(...ticketTypes.map(({ price }) => price.total))
  const { month, weekDayName, day, time } = formatDate(date, timezone)

  const hasAudioTracks = Boolean(appleMusicTracks.length || spotifyTracks.length)

  const onSale = status === 'on-sale' && getDateStatus(saleStartDate) === DateStatus.AfterNow
  const unavailable = status === 'cancelled' || getDateStatus(dateEnd) === DateStatus.BeforeNow
  const available = onSale || (!unavailable && !soldOut)

  const {
    month: saleMonth,
    day: saleDay,
    time: saleTime
  } = (onSale && formatDate(saleStartDate, timezone)) || {}

  const statusText = {
    unavailable: 'Unavailable',
    soldOut: 'Sold out',
    onSale: 'Get reminded',
    bookNow: 'Book now'
  }

  return (
    <div tw="mt-8 mb-10" data-testid="eventItem">
      <StyledImageWrapper ref={imageWrapperRef}>
        <BackgroundImage css={imageContainerStyles} src={images[0]} width="320px" height="320px">
          {(featured || hasAudioTracks || onSale) && (
            <div tw="flex justify-between items-center">
              {hasAudioTracks && (
                <div
                  tw="flex justify-center items-center w-12 h-12 bg-black bg-opacity-50"
                  data-testid="playButton"
                >
                  <PlayIcon />
                </div>
              )}
              {onSale ? (
                <strong tw="flex mr-4 py-2 px-4 bg-bg-color">
                  On sale {saleDay} {saleMonth} {saleTime}
                </strong>
              ) : (
                featured && (
                  <strong tw="flex mr-4 py-2 px-4 bg-accent-color uppercase">Featured</strong>
                )
              )}
            </div>
          )}
        </BackgroundImage>
      </StyledImageWrapper>
      <div tw="flex flex-col my-4">
        <span>
          {weekDayName} {day} {month} — {time}
        </span>
        <strong tw="flex mt-2 mb-4 text-font-xl">{name}</strong>
        <strong tw="flex mb-1">{venue}</strong>
        <span>
          {location.city}, {location.country}
        </span>
      </div>
      <div>
        <button
          css={buttonBaseStyles}
          tw="flex justify-between items-center w-full h-10 px-4 bg-dark-container-color hover:bg-darken-container-color"
          type="button"
          aria-label="toggle event content"
          onClick={onToggle}
        >
          <strong>More info</strong>
          <strong tw="text-font-lg leading-none">{activeToggle ? '-' : '+'}</strong>
        </button>
        <StyledToggleContent ref={toggleContentRef}>
          <div tw="p-4">
            <p tw="leading-6">{description}</p>
            <div tw="mt-6 mb-8">
              <strong tw="flex mb-3 text-font-sm text-accent-color uppercase">Line Up</strong>
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
              <strong tw="flex mb-3 text-font-sm text-accent-color uppercase">Tickets</strong>
              {ticketTypes?.length && (
                <ul>
                  {ticketTypes.map(
                    ({
                      name: ticketName,
                      price: ticketPrice,
                      id: ticketId,
                      sold_out: soldOutTicket
                    }) => {
                      const { total: totalTicketPrice } = ticketPrice || {}
                      return (
                        <li key={`${id}_${ticketId}`} tw="mt-2">
                          <span>{ticketName}</span>
                          {totalTicketPrice && (
                            <>
                              <span> — {formatPrice(ticketPrice.total, currency)}</span>
                              {soldOutTicket && (
                                <span tw="ml-2 text-font-sm font-bold uppercase opacity-50">
                                  Sold out
                                </span>
                              )}
                            </>
                          )}
                        </li>
                      )
                    }
                  )}
                </ul>
              )}
            </div>
          </div>
        </StyledToggleContent>
      </div>
      <div tw="flex justify-between items-center py-6">
        {(unavailable || soldOut) && (
          <span
            css={buttonBaseStyles}
            tw="flex justify-center items-center w-40 h-10 bg-light-container-color text-font-sm font-bold text-black leading-none uppercase pointer-events-none cursor-default"
          >
            {soldOut ? statusText.soldOut : statusText.unavailable}
          </span>
        )}
        {available && (
          <a
            href={url}
            css={buttonBaseStyles}
            aria-label="go to DICE event page"
            rel="noopener noreferrer nofollow"
            target="_blank"
            tw="flex justify-center items-center w-40 h-10 bg-accent-color text-font-sm font-bold leading-none uppercase hover:bg-darken-accent-color"
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
