import { GetServerSideProps } from 'next'
import Head from 'next/head'
import react from 'react'

import { Container, Flex } from '@chakra-ui/react'

import { ChallengeBox } from '../components/ChallengeBox'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ExperienceBar } from '../components/ExperienceBar'
import { Profile } from '../components/Profile'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { CountdownProvider } from '../contexts/CountdownContext'

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props) {
  return (
    <ChallengesProvider
      level={props.level}
      currentExperience={props.currentExperience}
      challengesCompleted={props.challengesCompleted}
    >
      <Container
        minH="100vh"
        maxW="992px"
        my={0}
        mx="auto"
        py="2.5rem"
        px="2rem"
        display="flex"
        flexDirection="column"
      >
        <Head>
          <title>Início | Moveit</title>
        </Head>
        <ExperienceBar />

        <CountdownProvider>
          <Flex
            flex="1"
            display="grid"
            gridGap={{ base: '5rem', md: '6.25rem' }}
            gridTemplateColumns={{ md: '1fr 1fr' }}
            alignContent="center"
          >
            <div>
              <Profile />
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </Flex>
        </CountdownProvider>
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
