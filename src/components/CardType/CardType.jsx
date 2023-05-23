import { CardContainer } from "./styles"

export default function CardType ({type}) {

  return (
    <CardContainer type={type}>
        {(type) ? type : <></>}
    </CardContainer>
  )
}

