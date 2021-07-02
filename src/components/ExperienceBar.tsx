import React, { useContext } from 'react'

import { Flex, Text } from '@chakra-ui/react'

import { ChallengesContext } from '../contexts/ChallengesContext'

export function ExperienceBar() {
  const { currentExperience, experienceToNextLevel } =
    useContext(ChallengesContext)

  const percentToNextLevel =
    Math.round(currentExperience * 100) / experienceToNextLevel

  return (
    <Flex as="header" alignItems="center" mb="3rem">
      <Text as="span" fontSize="1rem">
        0 xp
      </Text>
      <Flex
        flex="1"
        height="4px"
        borderRadius="4px"
        bgColor="gray.500"
        my={0}
        mx="1.5rem"
        position="relative"
      >
        <Flex
          h="4px"
          borderRadius="4px"
          bgColor="green.500"
          style={{ width: `${percentToNextLevel}%` }}
        />

        <Text
          position="absolute"
          top="12px"
          transform="translateX(-50%)"
          style={{ left: `${percentToNextLevel}%` }}
        >
          {currentExperience} xp
        </Text>
      </Flex>
      <span>{experienceToNextLevel} xp</span>
    </Flex>
  )
}
