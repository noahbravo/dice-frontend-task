import React from 'react'
import { Box } from '@chakra-ui/react'
import type { Event as EventType } from '../../../../types/events'
import { getDateStatus, DateStatus } from '../../../../utils'
import { useToggle } from '../../../../utils/hooks'
import CardImage from './Image'
import CardHeader from './Header'
import CardDescription from './Description'
import CardFooter from './Footer'

enum Status {
  Cancelled = 'cancelled',
  OffSale = 'off-sale',
  OnSale = 'on-sale'
}

const Card = React.memo(
  ({
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
    const { toggled, onToggle, toggleContentRef, toggleImageRef } = useToggle()

    const onSale = status === Status.OnSale && getDateStatus(saleStartDate) === DateStatus.AfterNow

    const eventImageProps = {
      timezone,
      saleStartDate,
      appleMusicTracks,
      spotifyTracks,
      images,
      featured,
      onSale
    }

    const eventHeaderProps = {
      date,
      timezone,
      name,
      location,
      venue,
      toggled
    }

    const eventDescriptionProps = {
      id,
      ticketTypes,
      lineup,
      description,
      currency,
      toggled,
      onToggle
    }

    const eventFooterProps = {
      status,
      soldOut,
      dateEnd,
      ticketTypes,
      url,
      currency,
      onSale
    }

    return (
      <Box mt="8" mb="10" data-testid="eventItem">
        <CardImage {...eventImageProps} ref={toggleImageRef} />
        <CardHeader {...eventHeaderProps} />
        <CardDescription {...eventDescriptionProps} ref={toggleContentRef} />
        <CardFooter {...eventFooterProps} />
      </Box>
    )
  },
  (prevProps, nextProps) => prevProps.id === nextProps.id
)

export default Card
