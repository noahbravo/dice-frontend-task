import React from 'react'
import { Box, Flex, Badge, Image as Icon } from '@chakra-ui/react'
import type { Event as EventType } from '../../../../types/events'
import { formatDate } from '../../../../utils'
import { useProgressiveImage } from '../../../../utils/hooks'
import eventThumb from '../../../../assets/img/event-thumb.jpg'
import playIcon from '../../../../assets/img/play-icon.svg'

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
    const { src, blur } = useProgressiveImage(eventThumb, images[0])

    const {
      month: saleMonth,
      day: saleDay,
      time: saleTime
    } = (onSale && formatDate(saleStartDate, timezone)) || {}

    return (
      <Box
        w="100%"
        h={320}
        bgImage={`url('${src}')`}
        filter={blur ? 'blur(8px)' : 'none'}
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
                  <Icon src={playIcon} alt="Play icon" w="4" />
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
