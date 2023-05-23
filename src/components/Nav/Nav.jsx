import { ContainerNav } from "./styles"
import logo from '../../assets/img/logo.png'

export default function Nav(){
    return(
        <ContainerNav>
           <img src={logo} alt="logo" />
        </ContainerNav>
    )
}