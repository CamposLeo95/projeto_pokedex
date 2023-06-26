import styled from 'styled-components'
import { cardColor } from '../../services/colors'

type SecondContainerProps ={
    percent?: number
    color?: string
}


export const CardStatus = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 580px;
    display:flex;
    flex-direction:column;
    align-items: center;
`
export const FirstContainer = styled.div`
    width: 90%;
    height: 170px;
    display: flex;
    justify-content: space-between;
    align-items: start;
    padding: 10px;
    background-color: ${props => props.color && cardColor(props.color)};
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes.small};
    border-radius: 5px 5px 0 0 ;

    & img{
        rotate: 180deg;
    }

    & div {
        display: flex;
        gap: 8px;
        font-size: ${props => props.theme.fontSizes.large};
    }
    
`
export const SecondContainer = styled.div<SecondContainerProps>`
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #3a3a3a;
    color: ${props => props.color && cardColor(props.color)};
    position: relative;
    border-radius: 5px;
    

    & .img_card {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
        font-weight: 600;
        font-size: ${props => props.theme.fontSizes.large};
        position: relative;
        bottom: 90px;

        & div{
            display: flex;
            align-items: center;
            justify-content: center;    
            width: 100%;
            
            & span{
                width: 50px;
                padding: 5px;
                margin: 0 5px;
                color: ${props => props.theme.colors.primary};
                background-color: ${props => props.color && cardColor(props.color)};
                text-align: center;
                border-radius: 15px;
            }
        }
    }

    & .about{
        position: relative;
        bottom: 80px;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: ${props => props.theme.fontSizes.large};
        color: ${props => props.theme.colors.primary};

        & h3{
            color: ${props => props.color && cardColor(props.color)};
        }

        & .fields{
            width: 100%;
            display: flex;
            justify-content: space-evenly;

            & .weight{
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 5px;
                font-size: ${props => props.theme.fontSizes.medium};
            }
    
            & .height{
                display: flex;
                align-items: center;
                flex-direction: column;
                gap: 5px;
                font-size: ${props => props.theme.fontSizes.medium};
            }
        }
    }

    & .base_status{
        position: relative;
        bottom: 70px;
        width: 100%;
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: ${props => props.theme.colors.primary};
        gap: 8px;

        & h3{
            color: ${props => props.color && cardColor(props.color)};
            margin-bottom: 20px;
            font-size: ${props => props.theme.fontSizes.medium}
        }
    }
`
export const Status = styled.div<SecondContainerProps>`

        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

        & .card_status{
            font-size: ${props => props.theme.fontSizes.medium};
            width: 80%;
            display: flex;
            justify-content: space-between;
            gap: 10px;
        }

        & .status_bar{
            width: 70%;
            height: 10px;
            background-color: ${props => `${props.color && cardColor(props.color)}65`};
            border-radius:15px;
        }

        & .percent {
            width: ${props => `${props.percent && props.percent / 2}%` };
            height: 100%;
            background-color: ${props => props.color && cardColor(props.color)};
            border-radius:15px;
        }
    
`