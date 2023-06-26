import { createContext } from "react";
import { pokeStatusType } from "../interfaces/Types";

interface SearchContextType {
    show: boolean;
    setShow: React.Dispatch<React.SetStateAction<boolean>>;

  }

  interface ModalContextType {

    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>
  }


export const AppContext = createContext<SearchContextType | null>(null)

export const ModalContext = createContext<ModalContextType | null>(null)

export const StatusPokemon = createContext<pokeStatusType | null>(null)
