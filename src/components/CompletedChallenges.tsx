import react, { useContext } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { ChallengesContext } from '../contexts/ChallengesContext'

export function CompletedChallenges() {
  const { challengesCompleted } = useContext(ChallengesContext)

  return (
    <Flex
      align="center"
      justify="space-between"
      my="3.5rem"
      mx={0}
      pb="1rem"
      borderBottom="solid"
      borderBottomWidth="1px"
      borderBottomColor="gray.500"
      fontWeight={500}
    >
      <Text fontSize="1.25rem">Desafios completos</Text>
      <Text fontSize="1.5rem">{challengesCompleted}</Text>
    </Flex>
  )
}
