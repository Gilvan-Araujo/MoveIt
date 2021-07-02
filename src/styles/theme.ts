import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  fonts: {
    heading: 'Roboto',
    body: 'Roboto'
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'gray.50',
        flexDirection: 'column'
      }
    }
  },
  colors: {
    green: {
      500: 'hsl(108, 100%, 50%)'
    }
  }
})
