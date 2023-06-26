import  styled  from "styled-components"

interface ModalProps {
    showModal?: boolean
}

export const Modal = styled.div<ModalProps>`
    width: 100vw;
    height: 100vh;
    background: #000000ae;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    display: ${props => props.showModal ? 'flex' : " none"};

`