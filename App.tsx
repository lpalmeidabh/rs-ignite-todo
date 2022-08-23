import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components'
import {Home} from './src/screens/Home'
import { defaultTheme } from './src/styles/themes/default'
export default function App(){
  return (
    <ThemeProvider theme={defaultTheme}>
    <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    <Home />
    </ThemeProvider>
      
  )
}