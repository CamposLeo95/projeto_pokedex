import Home from "./pages/Home"
import Nav from "./components/Nav"
import { ThemeProvider } from "styled-components"
import Dark from "./theme/Dark"
import ContextProviders from "./services/ContextProviders"

function App() {


  return (
    <ContextProviders>
      <ThemeProvider theme={Dark}>
        <Nav />
        <Home/>
      </ThemeProvider>
    </ContextProviders>

  )
}

export default App
