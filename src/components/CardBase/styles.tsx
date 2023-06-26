import styled from 'styled-components'

import { cardColor } from '../../services/colors'

interface ColorProps{
    color: string
}

export const CardBase = styled.div<ColorProps>`
    width: 300px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background-color:${props => props.theme.colors.background};
    border-radius: 5px;
    font-size: ${props => props.theme.fontSizes.large};
    margin-top: 20px;
    cursor: pointer;

    & p{
        display: block;
        width: 100%;
        text-align: end;
        padding: 5px 10px 0 0;
        color: ${props => props.theme.colors.secondary};

    }

    & .backgroud_img{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        background-color: ${props => cardColor(props.color)};
    }

    @media (min-width: 913px) {
        width: 250px;
    }

`

export const CardName = styled.div<ColorProps>`
    width: 100%;
    padding: 10px; 
    margin-top:20px;
    background-color: ${props => cardColor(props.color)};
    border-radius: 0px 0px 5px 5px;
    font-size: ${props => props.theme.fontSizes.large};
    color: ${props => props.theme.colors.primary};
    font-weight: 600;

`