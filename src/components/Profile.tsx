import React, { useContext } from 'react'

import { Flex, Image, Text } from '@chakra-ui/react'

import { ChallengesContext } from '../contexts/ChallengesContext'

export function Profile() {
  const { level } = useContext(ChallengesContext)

  return (
    <Flex alignItems="center">
      <Image
        src="https://github.com/gilvan-araujo.png"
        alt="Gilvan Araújo"
        w="5.5rem"
        h="5.5rem"
        borderRadius="full"
      />
      <Flex ml="1.5rem" flexDirection="column">
        <Text fontSize="1.5rem" fontWeight={600} color="gray.100">
          Gilvan Araújo
        </Text>
        <Flex fontSize="1rem" mt="0.5rem" flexDirection="row">
          <Image src="icons/level.svg" alt="Level" mr="0.5rem" />
          Level {level}
        </Flex>
      </Flex>
    </Flex>
  )
}
