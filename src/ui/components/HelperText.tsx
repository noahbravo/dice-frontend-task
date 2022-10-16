import React from 'react'
import { Flex, Text } from '@chakra-ui/react'

enum TextOptions {
  result = 'Upcoming events at',
  noResult = `Hm, couldn't find anything for`
}

interface HelperTextProps {
  children: string
  withEvents: boolean | undefined
}

const getText = (venue: string, withEvents: boolean) => {
  return withEvents ? `${TextOptions.result} ${venue}` : `${TextOptions.noResult} "${venue}"`
}

const HelperText = ({ children: venue, withEvents = false }: HelperTextProps) => {
  const textContent = getText(venue, withEvents)

  return (
    <Flex w="full" justifyContent={{ sm: 'center', md: 'flex-start' }}>
      <Text fontSize="4xl" as="strong">
        {textContent}
      </Text>
    </Flex>
  )
}

export { HelperText }
