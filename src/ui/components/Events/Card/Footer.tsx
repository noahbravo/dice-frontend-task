import React from 'react'
import { Center, Flex, Text, Link, HStack, VStack } from '@chakra-ui/react'
import type { Event as EventType } from '../../../../types/events'
import { formatPrice, getDateStatus, DateStatus } from '../../../../utils'

enum Status {
  Cancelled = 'cancelled',
  OffSale = 'off-sale',
  OnSale = 'on-sale'
}

enum statusText {
  Unavailable = 'Unavailable',
  SoldOut = 'Sold out',
  OnSale = 'Get reminded',
  BookNow = 'Book now'
}

interface EventFooterProps {
  status: EventType['status']
  soldOut: EventType['sold_out']
  dateEnd: EventType['date_end']
  ticketTypes: EventType['ticket_types']
  url: EventType['url']
  currency: EventType['currency']
  onSale: boolean
}

const Footer = ({
  status,
  soldOut,
  dateEnd,
  ticketTypes,
  url,
  currency,
  onSale
}: EventFooterProps) => {
  const lowestTicketPrice = Math.min(...ticketTypes.map(({ price }) => price.total))
  const unavailable = status === Status.Cancelled || getDateStatus(dateEnd) === DateStatus.BeforeNow
  const available = onSale || (!unavailable && !soldOut)

  return (
    <HStack justify="space-between" alignItems="center" py="6">
      {(unavailable || soldOut) && (
        <Flex
          justify="center"
          align="center"
          w="40"
          h="10"
          backgroundColor="whiteAlpha.900"
          color="black"
        >
          <Center>
            <Text as="strong" textTransform="uppercase" fontSize="sm" cursor="default">
              {soldOut ? statusText.SoldOut : statusText.Unavailable}
            </Text>
          </Center>
        </Flex>
      )}
      {available && (
        <Link
          href={url}
          aria-label="go to DICE event page"
          rel="noopener noreferrer nofollow"
          target="_blank"
          w="40"
          h="10"
        >
          <Center h="100%">
            <Text as="strong" fontSize="sm" textTransform="uppercase">
              {onSale ? statusText.OnSale : statusText.BookNow}
            </Text>
          </Center>
        </Link>
      )}
      <VStack alignItems="flex-end" spacing="0">
        <Text as="span" opacity="50">
          From
        </Text>
        <Text as="strong" fontSize="2xl">
          {formatPrice(lowestTicketPrice, currency)}
        </Text>
      </VStack>
    </HStack>
  )
}

export default Footer
