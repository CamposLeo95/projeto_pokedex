import styled from 'styled-components';

import { cardColor } from '../../functions/auxStyled';

export const CardContainer = styled.div`
    background-color:${props => cardColor(props.type)};
    width: 260px;
    height: 150px;
    margin: 8px;
    padding: 10px 15px;
    border-radius: 15px 1px;
    box-shadow: 0px 0px 5px #000;
    display: flex;
    justify-content: space-between;
    align-items: center;
    

& img {
    width: 70px;
    opacity: 0.7;
    transition: 0.5s;
}

& img:hover {
    width: 75px;
    opacity: 1;
    
}

& .description {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

& .description h3, p{
    margin-bottom: 10px;
    color: #fff;
    text-transform: capitalize;
    text-decoration: none;

}


&.type {
    background-color: transparent;
    box-shadow: 0px 0px 1px #fff;
    font-weight: bold;
    padding: 5px 15px;
    border-radius: 15px;
    margin: 5px 0;
}

`