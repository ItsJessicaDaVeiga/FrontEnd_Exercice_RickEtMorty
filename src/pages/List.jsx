import Card from "../components/Card";
import { GetCharacters } from "../hooks/useCharacters";


export default function List () {
  const {data} = GetCharacters();
  //console.log(data)
  //const charactersNames = characters.map(character => <span> {character.name} </span>)

  return (
    <>
      <div className= "grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-20 p-10 " >
        {data?.results?.map(character => (<Card character={character} key={character.id}/>))}
      </div>
    </>
  )
}