import * as S from './styles';

import { useEffect, useState } from 'react';

import useApi from '../../hooks/useApi';

import Search from "../../components/Search";
import CardBase from "../../components/CardBase";
import Modal from '../../components/Modal';

interface Results {
  results: {
    name: string;
    url: string;
  }[];
}

export default function Home() {
  const { data, loading, error } = useApi<Results>('/?limit=150&offset=0');
  const [arrayName, setArrayName] = useState<string[] | null>(null);
  const [search, setSearch] = useState<string[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        const names = data.results.map((result) => result.name);
        localStorage.setItem("pokemons", JSON.stringify(names));
        setArrayName(names);
      } else {
        console.log("Não há dados");
      }
    };

    fetchData();
  }, [data]);

  if (error) {
    return <></>;
  }

  if (loading) {
    return <>Carregando ...</>;
  }

  return (
    <>
    <Modal>

    </Modal>
    <Search arrayName={arrayName} setSearch={setSearch}/>
    <S.Container>
        {(!search) 
        ? arrayName?.map((id: string) => (
          <CardBase key={id} pokemonId={id} />
        ))
        : search?.map((id: string) => (
          <CardBase key={id} pokemonId={id} />
        ))}
    </S.Container>
    </>
  );
}
