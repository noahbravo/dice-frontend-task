import React from 'react'
import { SimpleGrid, Box, Flex } from '@chakra-ui/react'
import type { Events as EventsType } from '../../../types/events'

import EventCard from './Card'

interface EventsProps {
  data: EventsType['data']
}

const Events = ({ data }: EventsProps) => {
  return (
    <SimpleGrid columns={{ md: 2, xl: 3 }} gap={{ xl: '8' }}>
      {data.map((event) => (
        <Flex key={event.name} justify="center" w="100%">
          <Box w="80">
            <EventCard key={event.name} {...event} />
          </Box>
        </Flex>
      ))}
    </SimpleGrid>
  )
}

export { Events }
