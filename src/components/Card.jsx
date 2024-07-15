import PropTypes from "prop-types";

export default function Card ({ character }) {
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

// Donner une shape a la card en la typant 

Card.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired
}
