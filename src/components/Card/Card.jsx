import { CardContainer } from './styles';

import { Link } from 'react-router-dom';

import CardType from '../CardType/CardType';
import useApi from '../../hooks/useApi';
import Loading from '../Loading/Loading';


export default function Card({url}){

    const {data, loading} = useApi(url)

    if(loading){
        return <Loading />
    }

    if(!data){
        return <></>
    }
    
    return(
        <Link to={`/about/${data.id}`} style={{ textDecoration: 'none' }}>
        <CardContainer type={data.types[0].type.name}>
            <div className='description'>
                <p>Nº {data.id}</p>
                <h3>{data.name}</h3>  
                <div>
                {(data.types)
                ? <CardType type={data.types[0].type.name}>{data.types[0].type.name}</CardType>
                : <></>} 
                {(data.types[1])
                ? <CardType type={data.types[1].type.name}>{data.types[1].type.name}</CardType>
                : <></>}              
                </div>
            </div>
            <div className="image-pokemon">
                {(data.sprites)
                ? <img src={data.sprites.other.dream_world.front_default} alt={`imagem - ${data.name}`} />
                : <></>}
            </div>     
        </CardContainer>
        </Link>
    )
}