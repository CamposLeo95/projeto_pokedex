import styled from 'styled-components'

interface SearchProps{
    show?: boolean
}

export const Search = styled.aside<SearchProps>`
    background: ${props => props.theme.colors.backgroundTwo};
    opacity: 0.8;
    width: 100vw;
    height: 20vh;
    position: fixed;
    left:0;
    display: ${props => props.show ? "flex" : "none"};
    align-items: center;
    justify-content: center;

    & input{
        width: 70%;
        padding: 10px;
        font-size: ${props => props.theme.fontSizes.small};
        border-radius: 15px;
    }
`