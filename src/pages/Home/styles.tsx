import  styled  from "styled-components";

export const Container = styled.main`
    width: 100vw;
    min-height:100vh;
    background: ${props => props.theme.colors.backgroundTwo};
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    grid-gap: 70px;
    justify-items: center;
    align-items: center;
    margin-top: 70px;
    padding: 20px;
`