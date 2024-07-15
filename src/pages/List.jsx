import Card from "../components/Card";
import { useFetchCharacters } from "../hooks/useCharacters";


export default function List () {
  const { isLoading, data } = useFetchCharacters();
  //console.log(data)
  //const charactersNames = characters.map(character => <span> {character.name} </span>)
  
  // affichage conditionnelle
  if (isLoading) {
    return <span className="p-10"> Loading ... </span>
  }
  return (
    <>
      <div className= "grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-20 p-10 " >
        {data?.results?.map(character => (<Card character={character} key={character.id}/>))}
      </div>
    </>
  )
}