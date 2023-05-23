import { useParams } from "react-router-dom"

import PokeDetails from "../components/PokeDetails/PokeDetails"
import Loading from "../components/Loading/Loading"

import useApi from "../hooks/useApi"

export default function About(){
    const { id } = useParams()
    const { data, loading} = useApi(`/${id}`)

    if(loading){
        return <Loading />
      }

    if(!data){
        return <></>
    }

    return(
        <div className="Container">
            <PokeDetails pokeStatus = {data}/>
        </div>
        
    )
}