import * as S from "./styles"

import { AppContext } from "../../context/AppContext"
import { useContext } from "react"

interface SearchProps {
    arrayName: string[] | null | undefined,
    setSearch: React.Dispatch<React.SetStateAction<string[] | null >>
    show?: boolean

}

export default function Search({ arrayName, setSearch } : SearchProps){ 
    
    const showContext = useContext(AppContext)


    const filterPokemon = (name: string) => {
        const filter = arrayName?.filter((pokemon) =>{
            if(pokemon.includes(name)){
                return pokemon
            }
        })

        if(filter === undefined){
            return null
        }

        setSearch(filter)
    }

    return(
        <S.Search show={showContext?.show}>
                <input 
                    type="text" 
                    placeholder="Procurar..." 
                    onChange={(e) => filterPokemon(e.target.value)}
                />
        </S.Search>
    )
}