import  styled  from "styled-components";

export const Nav = styled.nav`
    width: 100vw;
    height: 70px;
    background-color:${props => props.theme.colors.background};
    color: ${props => props.theme.colors.primary};
    font-size: ${props => props.theme.fontSizes.large};
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
    position: fixed;
    top: 0px;

    & div{
        width: 80%;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    & img{
        width: 80px;
    }

    & .search {
        font-size: ${props => props.theme.fontSizes.small};
        font-weight: bold;
        cursor: pointer;
    }

`