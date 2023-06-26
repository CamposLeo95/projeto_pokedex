import { useContext } from "react";

import { ModalContext } from "../../context/AppContext";
import CardStatus from "../CardStatus";
import * as S from "./styles";

interface ModalProps {

}

export default function Modal(props : ModalProps){

    const showModalContext = useContext(ModalContext)

    return(
        <S.Modal 
        showModal={showModalContext?.showModal}
        onClick={() => showModalContext?.setShowModal(false)}
        >
            <CardStatus />
        </S.Modal>
    )
}