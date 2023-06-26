import {AppContext, ModalContext, StatusPokemon} from "../context/AppContext"
import { ReactNode, useState } from "react"

type ContextProvidersProps ={
    children: ReactNode
}

function ContextProviders({children}:ContextProvidersProps) {

  const [show, setShow] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [statusPokemon, setStatusPokemon] = useState({
    id: 0,
    name: "charizard",
    weight: 150,
    height: 17,
    stats_base: 0,
    stat_name: "atk",
    sprites: null
  })

  return (
    <AppContext.Provider value={{show, setShow}}>
        <ModalContext.Provider value={{showModal, setShowModal}}>
          <StatusPokemon.Provider value = {{statusPokemon, setStatusPokemon}}>
            {children}
          </StatusPokemon.Provider>
        </ModalContext.Provider>
    </AppContext.Provider>
      )
}

export default ContextProviders