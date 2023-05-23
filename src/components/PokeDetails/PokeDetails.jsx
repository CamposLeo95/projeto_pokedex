import { ContainerStatus } from "./styles";

import CardType from "../CardType/CardType";
import StatusBar from "../StatusBar/StatusBar";

import arrow from '../../assets/img/arrow.png'

import { Link } from "react-router-dom";


export default function PokeDetails({ pokeStatus }) {

  return (
    <ContainerStatus type={pokeStatus.types ? pokeStatus.types[0].type.name : "#f1f1f1"}>
      <div className="top">
        <div className="controller">
          <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
            <img src={arrow} alt=""  width='30'/>
          </Link>
        </div>

        <div className="topStatus">

          <div className="nameType">
            <h1>{pokeStatus.name}</h1>
            <div className="types">
              {(pokeStatus.types) 
                && ( <CardType type={pokeStatus.types[0].type.name} /> )}
              {(pokeStatus.types)
                && pokeStatus.types[1] && (<CardType type={pokeStatus.types[1].type.name} /> )}
            </div>
          </div>

          <div className="numberType">
            <h2># {pokeStatus.id}</h2>
            <h4>pokemon type</h4>
          </div>
        </div>
        {(pokeStatus.sprites) 
        && (<img src={pokeStatus.sprites.other.home.front_default} alt="sprite-pokemon"/>)}
      </div>

      <div className="bot">
        <h1>Status</h1>
        {(pokeStatus.stats) && pokeStatus.stats.map((item) => (
            <div className="statusBar">
              <h4>{item.stat.name}: </h4>
              <StatusBar 
              key={pokeStatus.id}
              status={item.base_stat} 
              type={(pokeStatus.types) ? pokeStatus.types[0].type.name : "#f1f1f1"}
              />
            </div>
          ))}
      </div>
    </ContainerStatus>
  );
}
