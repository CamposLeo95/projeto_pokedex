import { styled } from "styled-components";

import pikachu from '../../assets/img/pikachu.gif'

export const CardLoading = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    & .loading{
        width: 130px;
        height: 100px; 
        background-image: url(${pikachu});
        background-repeat: no-repeat;
        background-size: cover;
    }
    
`