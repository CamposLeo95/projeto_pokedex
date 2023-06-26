import * as S from "./styles"

import  {BsSearch, BsXLg}  from "react-icons/bs";

import { AppContext } from "../../context/AppContext"
import { useContext } from "react"

export default function Nav(){
    const showContext = useContext(AppContext)

    const handleSearch = () =>{
        if(showContext){
            showContext.setShow(!showContext.show)
        }
    }

    return(
        <S.Nav>
            <div>
                <img src={"../../../img/logo.png"} alt="logo" />
                {!showContext?.show 
                    ?<BsSearch onClick={handleSearch} className="search"/>
                    : <BsXLg  onClick={handleSearch} className="search"/>
                }  
            </div>
        </S.Nav>
    )
}