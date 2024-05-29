import * as React from 'react'

// 1. import `ChakraProvider` component
import { ChakraProvider } from '@chakra-ui/react'

function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <TheRestOfYourApplication />
    </ChakraProvider>
  )
}

//ChakraBaseProvider#
//As of v2.4.2 there is now the addition of ChakraBaseProvider. This is a minimal version of ChakraProvider that only supplies theme tokens and not the default component theming.

//One of the biggest causes of the large initial JS payload is the size of the component themes. With the following approach, you get to apply the default themes for just the components you need by using extendBaseTheme.
// notes import {
//   ChakraBaseProvider,
//   extendBaseTheme,
//   theme as chakraTheme,
// } from '@chakra-ui/react'

// const { Button } = chakraTheme.components

// const theme = extendBaseTheme({
//   components: {
//     Button,
//   },
// })

// function App() {
//   return (
//     <ChakraBaseProvider theme={theme}>
//       <Component {...pageProps} />
//     </ChakraBaseProvider>
//   )
// }