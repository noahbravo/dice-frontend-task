import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import { formatDate } from '../../../../utils'
import type { Event as EventType } from '../../../../types/events'

interface EventHeaderProps {
  date: EventType['date']
  timezone: EventType['timezone']
  name: EventType['name']
  location: EventType['location']
  venue: EventType['venue']
}

const Header = ({ date, timezone, name, location, venue }: EventHeaderProps) => {
  const { month, weekDayName, day, time } = formatDate(date, timezone)

  return (
    <Flex direction="column" mt="4">
      <Text as="span">
        {weekDayName} {day} {month} — {time}
      </Text>
      <Text as="strong" mt="1" mb="3" fontSize="xl">
        {name}
      </Text>
      <Text as="span" mb="0.5">
        {venue}
      </Text>
      <Text as="span">
        {location.city}, {location.country}
      </Text>
    </Flex>
  )
}

export default Header
