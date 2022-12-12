import React from 'react'
import { Box, Flex, Text, Button, UnorderedList, ListItem } from '@chakra-ui/react'
import type { Event as EventType } from '../../../../types/events'
import { formatPrice } from '../../../../utils'

interface DescriptionProps {
  id: EventType['id']
  ticketTypes: EventType['ticket_types']
  lineup: EventType['lineup']
  description: EventType['description']
  currency: EventType['currency']
  toggled: boolean
  onToggle: () => void
}

const EventDescription = React.forwardRef<HTMLDivElement, DescriptionProps>(
  ({ id, ticketTypes, lineup, description, currency, toggled, onToggle }, forwardedRef) => {
    return (
      <Box mt="4">
        <Button
          type="button"
          aria-label="toggle event content"
          aria-pressed={toggled ? 'true' : 'false'}
          onClick={onToggle}
          variant="toggle"
        >
          <Flex justify="space-between" alignItems="center" width="100%">
            <Text as="strong">More info</Text>
            <Text as="strong" fontSize="xl">
              {toggled ? '-' : '+'}
            </Text>
          </Flex>
        </Button>
        <Box
          backgroundColor="whiteAlpha.300"
          maxHeight={0}
          overflow="hidden"
          transition="all .25s ease-in-out"
          ref={forwardedRef}
        >
          <Box p="4">
            <Text as="p">{description}</Text>
            <Box mt="6" mb="8">
              <Text as="strong" mb="3" fontSize="sm" color="dice.500" textTransform="uppercase">
                Line Up
              </Text>
              <UnorderedList styleType="none" m="0">
                {lineup.map(({ details: lineupDetails, time: lineupTime }, index) => (
                  <ListItem key={`${id}_${lineupDetails}_${lineupTime || index}`} mt="2">
                    <Text as="span">{lineupDetails}</Text>
                    {lineupTime && <Text as="span"> — {lineupTime}</Text>}
                  </ListItem>
                ))}
              </UnorderedList>
            </Box>
            <Box>
              <Text as="strong" mb="3" fontSize="sm" color="dice.500" textTransform="uppercase">
                Tickets
              </Text>
              {ticketTypes?.length && (
                <UnorderedList styleType="none" m={0}>
                  {ticketTypes.map(
                    ({
                      name: ticketName,
                      price: ticketPrice,
                      id: ticketId,
                      sold_out: soldOutTicket
                    }) => {
                      const { total: totalTicketPrice } = ticketPrice || {}
                      return (
                        <ListItem key={`${id}_${ticketId}`} mt="2">
                          <Text as="span">{ticketName}</Text>
                          {totalTicketPrice && (
                            <>
                              <Text as="span"> — {formatPrice(ticketPrice.total, currency)}</Text>
                              {soldOutTicket && (
                                <Text
                                  as="span"
                                  ml="2"
                                  fontSize="sm"
                                  fontWeight="bold"
                                  textTransform="uppercase"
                                  opacity="50"
                                >
                                  Sold out
                                </Text>
                              )}
                            </>
                          )}
                        </ListItem>
                      )
                    }
                  )}
                </UnorderedList>
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    )
  }
)

export default EventDescription
