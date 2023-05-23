//components
import AppRouter from "./AppRouter";

//Router
import { BrowserRouter as Router } from "react-router-dom";
import Nav from "./components/Nav/Nav";

function App() {

  return (
    <>
    <Nav />
    <Router>
      <AppRouter />
    </Router>
    </>
  )
}

export default App
