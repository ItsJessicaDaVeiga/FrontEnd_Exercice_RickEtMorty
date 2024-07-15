// import data from  ".......json"

export default function Card ({character}) {
  return (
    <div className=" flex flex-col">
      <img src={character.image}></img>
      <div className=" flex flex-col items-center p-4 bg-lightMint rounded-b-3xl">
        <span> Nom: {character.name}</span>
        <span> Espèce: {character.species}</span>
        <span> Status: {character.status}</span>
      </div>
    </div>
  )
}