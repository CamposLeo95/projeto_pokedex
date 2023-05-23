import { useState } from "react";
import Card from "../components/Card/Card";
import Loading from "../components/Loading/Loading";

import  useApi  from "../hooks/useApi";

export default function Home() {

  const [limit, setLimit] = useState(12)
  const [offset, setOffset] = useState(0)

  const {data, loading} = useApi(`/?limit=${limit}&offset=${offset}`)

  const nextLimit = () =>{
    setOffset(offset + 9)
  }

  const prevLimit = () =>{
    if(offset === 0){
      setOffset(0)
      return
    }
    setOffset(offset - 9)
  }

  if(loading){
    return <Loading />
  }

  if(!data){
      return <></>
  }

  return (
    <>
    
      <div className="Container">
        <main>
        <div className="controller">
          <button onClick={prevLimit}>Prev</button>
          <button onClick={nextLimit}>Next</button>
        </div>
          <ul>
            {(data)
              ? data.results.map((item, id)=>(
              <Card url={item.url} key={id}/>))
              : <></>}
          </ul>
          <div className="controller" id="controller2">
            <button onClick={prevLimit}>Prev</button>
            <button onClick={nextLimit}>Next</button>
          </div>
        </main>
      </div>
    </>
  )
}

