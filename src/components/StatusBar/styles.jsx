import { styled } from "styled-components";
import { statusColor } from "../../functions/auxStyled";

export const StatusBarContainer = styled.div`
    width: 200px;
    background: #bbbbbb;
    border-radius: 15px;
    margin: 4px;

    & .bar{
        width: ${ props => `${props.status / 1.5}%`};
        background-color: ${props => statusColor(props.type)};
        border-radius: 15px;
        color: white;
        padding: 1px 4px;
        display: flex;
        align-items: center;
        justify-content: end;
    }
`