import React from 'react'
import { Box, Flex, Badge } from '@chakra-ui/react'
import type { Event as EventType } from '../../../../types/events'
import { formatDate } from '../../../../utils'

interface ImageProps {
  timezone: EventType['timezone']
  appleMusicTracks: EventType['apple_music_tracks']
  spotifyTracks: EventType['spotify_tracks']
  featured: EventType['featured']
  saleStartDate: EventType['sale_start_date']
  images: EventType['images']
  onSale: boolean
}

const Image = React.forwardRef<HTMLDivElement, ImageProps>(
  (
    { timezone, saleStartDate, appleMusicTracks, spotifyTracks, onSale, images, featured },
    forwardRef
  ) => {
    const hasAudioTracks = Boolean(appleMusicTracks.length || spotifyTracks.length)

    const {
      month: saleMonth,
      day: saleDay,
      time: saleTime
    } = (onSale && formatDate(saleStartDate, timezone)) || {}

    return (
      <Box
        w="100%"
        h={320}
        bgImage={`url('${images[0]}')`}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        transition="all .25s ease-in-out"
        ref={forwardRef}
      >
        <Flex direction="column" justify="flex-end" h="100%">
          {(featured || hasAudioTracks || onSale) && (
            <Flex justify="space-between" align="center">
              {hasAudioTracks && (
                <Badge variant="play" data-testid="playButton">
                  PlayIcon
                </Badge>
              )}
              {onSale ? (
                <Badge variant="date">
                  On sale {saleDay} {saleMonth} {saleTime}
                </Badge>
              ) : (
                featured && <Badge variant="featured">Featured</Badge>
              )}
            </Flex>
          )}
        </Flex>
      </Box>
    )
  }
)

export default Image
