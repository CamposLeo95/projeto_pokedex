import * as S from './styles'

import { useContext } from 'react'

import { ModalContext, StatusPokemon } from '../../context/AppContext'

import { Pokemon } from '../../interfaces/Types'
import useApi from '../../hooks/useApi'


interface CardBaseProps{
    pokemonId: string
}

export default function CardBase({ pokemonId }: CardBaseProps){

    const showModalContext = useContext(ModalContext)
    const statusContext = useContext(StatusPokemon)

    const { data } = useApi<Pokemon>(`/${pokemonId}`)

    const handleCard = () => {
        showModalContext?.setShowModal(true)
        if(data){
        statusContext?.setStatusPokemon({ 
            id: data.id,
            name: data.name,
            types: data.types, 
            weight: data.weight,
            height: data.height,
            stats: data.stats,
            sprites: data.sprites?.other.dream_world.front_default
        })   
        }     
    }

    return(
        <>
        {data?.types && data.types.map((type, index)=>(
            index === 0 &&
            <S.CardBase color={type.type.name}onClick={handleCard}>
            <p>#{data?.id}</p>
            <div className="backgroud_img">
                {(data?.id == 14) 
                ? <img 
                src={`${(data?.sprites) && data?.sprites.other.dream_world.front_default}`} 
                alt="logo" 
                width="100px"/>
                : <img 
                src={`${(data?.sprites) && data?.sprites.other.dream_world.front_default}`} 
                alt="logo" 
                width="130px"/> 
                }

            </div>
            <S.CardName color={type.type.name}>
                <span>{data?.name}</span>
            </S.CardName>

            </S.CardBase>

        ))}
            
        </>
    )
}