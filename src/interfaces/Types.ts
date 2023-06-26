export interface Pokemon{
    id: number | null;
    name: string | null;
    types?: Types[] | null | undefined
    weight: number | null;
    height: number | null;
    stats: Stats []
    sprites: Sprites | null
}

export interface pokeStatusType {
  statusPokemon: Pokemon
  setStatusPokemon: React.Dispatch<React.SetStateAction<any>>
}


type Sprites = {
    other: {
        dream_world:{
            front_default: string
        }
    }
}

type Types = {
    type: {
        name: string
    }
}

type Stats ={
    base_stat: number
    stat: {
        name: string
    }
}