import * as S from "./styles"

import { StatusPokemon } from "../../context/AppContext"
import { useContext } from "react"

export default function CardStatus(){

    const statusContext = useContext(StatusPokemon)

    console.log( statusContext?.statusPokemon.types)

    const convertStatusName = (name:string) =>{
        switch (name) {
            case "hp":
                return "HP"
            case "attack":         
                return "ATK";
            case "defense":         
                return "DEF";
            case "special-attack":         
                return "SPATK";
            case "special-defense":         
                return "DEF";
            case "speed":         
                return "SPD";
            default:
                return name;
        }
    }

    const percent = 0

    return(
        <>
        {statusContext?.statusPokemon.types 
        && statusContext?.statusPokemon.types.map((type, index)=> (
            index === 0 ?
            <S.CardStatus>
                <S.FirstContainer color={type.type.name}>
                    <div>
                        <img src="../../../img/seta.png" 
                            alt="" width="15px" 
                        />
                        <h3> {statusContext?.statusPokemon.name} </h3>
                    </div>
                    <span> #{statusContext?.statusPokemon.id} </span>
                </S.FirstContainer>
                <S.SecondContainer percent={percent} color={type.type.name}>
                    <div className="img_card">
                        <img src={`
                        ${statusContext?.statusPokemon.sprites}`} 
                        alt="logo" 
                        width="90px"
                        /> 
                        <div>
                            {statusContext?.statusPokemon.types?.map((type, i)=>(
                                <span key={i}>{type.type.name}</span>
                            ))}
                        </div>
                    </div>          
                    <div className="about">
                    <h3>About</h3>
                    <div className="fields">
                        <div className="weight">
                        <img src="../../../img/peso.png" alt="logo" width="20px"/> 
                            <span>{statusContext?.statusPokemon.weight}</span>
                            <span>Weight</span>
                        </div>
                        <div className="height">
                            <img src="../../../img/ruler.png" alt="logo" width="20px"/> 
                            <span>{statusContext?.statusPokemon.height}</span>
                            <span>Height</span>
                        </div>
                    </div>
                    </div>
                    <div className="base_status">
                    <h3>Base Stats</h3>
                        {(statusContext?.statusPokemon.stats) &&
                        statusContext?.statusPokemon.stats.map((stat,i ) => (
                            <S.Status percent={stat.base_stat} color={type.type.name}>
                            <div className="card_status" key={i}>
                                <span>{convertStatusName(stat.stat.name)}</span>
                                <span>{stat.base_stat}</span>
                            <div className="status_bar">
                                <div className="percent">
                                </div>
                                </div>                        
                            </div>
                            </S.Status>
                        ))}                      
                    </div>
                </S.SecondContainer>
            </S.CardStatus>
            : null
        ))}
        
        </>
    )
}
