import type { NextPage } from 'next'
import { useQuery } from '@tanstack/react-query'
import Character from './Character';
import { useState } from 'react';

const Characters: NextPage = () => {

  const [page, setPage] = useState(1)

  const { data, status, error } = useQuery(['repoData', page], () =>
    fetch(`https://rickandmortyapi.com/api/character?page=${page}`).then(res =>
      res.json()
    )
  )

  if (status === "loading") {
    return <div>Loading...</div>
  }

  if (status === "error") {
    return <div>error</div>
  }



  // if(status === "success"){
  //   return <div>success</div>
  // }

  return (

    <div className="characters">
      {data.results.map((character: any) => (


        // <Character   character={character} />

     
        <div className="card" key={character.id}>
        <img src={character.image} alt="" />
        <div className="text-container">
          <h3>{character.name}</h3>
          <p className="status">
            {character.status} - {character.species}
          </p>
          <p className="title">Last seen on</p>
          <p>{character.location.name}</p>
        </div>
      </div>

      ))}

      <div>
        <button
          onClick={() => setPage((old) => Math.max(old - 1, 1))}
          disabled={page === 1}
        >
          Previous
        </button>
        <button
          onClick={() => setPage((old) => old + 1)}
          disabled={!data.info.next}
        >
          Next
        </button>
      </div>
    </div>

  );



}; export default Characters 