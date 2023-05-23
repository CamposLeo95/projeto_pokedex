import  styled  from 'styled-components';

import { cardColor } from '../../functions/auxStyled';

export const ContainerStatus = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: capitalize;
    position: relative;

//Top 
    & .top {       
        width: 90%;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 10px 0;
        background-color: ${props => cardColor(props.type)};
        border-radius: 8px;
        color: #fff;
    }

    & .top .controller {
        width: 95%;
        padding:  0 20px;

        & img{
            width: 15px;
        }   
    }

    & .topStatus{
        width: 90%;
        padding: 0 8px;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & .types {
        display: flex;
        margin-top: 10px;
    }

    & .numberType{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: end;
        height: 60px;
    }

    & .top img {
        width: 150px;
        z-index: 4;
    }
    
// Botton 
    & .bot {
        width: 90%;
        height: 35%;
        background-color: #e1e1e1;
        position: relative;
        top: -50px;
        padding: 20px 5px;
        border-radius: 25px 25px 8px 8px ;
        font-size: 13px;
    }

    & .bot h1{
        margin-bottom: 10px;
    }

    & .bot .statusBar{
        display: flex;
    }
    & .bot .statusBar h4{
        flex: 1;
    }

    @media (min-width:768px) {
        align-items: center;

        & .top {
            max-width: 400px;
        }

        & .top img {
            width: 140px;
        }

        & .bot {
            max-width: 400px;
            font-size: 16px;
            padding: 20px 15px;
            height: 40%;
        }
    }


`