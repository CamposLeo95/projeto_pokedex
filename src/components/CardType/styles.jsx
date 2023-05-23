import  styled  from 'styled-components';
import { typeColor } from '../../functions/auxStyled';

export const CardContainer = styled.div`
    background: ${props => typeColor(props.type)};
    border-radius: 15px;
    margin: 5px;
    width: 70px;
    padding: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    color: #fff;
    text-transform: capitalize;
`