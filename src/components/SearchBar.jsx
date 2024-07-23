import searchIcon from "/loupev1.png";
import { useState } from "react";

export default function SearchBar () {
  
  //const trueData = characters.map(character => <span> {character.name} </span>);

  const data = ["Pomme", "Poire", "Banane", "Orange","Fraise"]
  
  const [value, setValue] = useState ("");

  const handleChange = () => {
    setValue(event.target.value)
  }

  return (
    <div className="SearchBar">
      <div className= "grow flex justify-center">
        <input className="grow py-1 px-3 rounded-l-full" placeholder=" Morty " value={value} onChange= {handleChange} />
        <button className="px-4 rounded-r-full bg-mint text-wrap "><img className="h-3" src={searchIcon} onClick={() => console.log({value}) }/></button>
      </div>

      <ul> 
        {value && 
            data
              .filter((element => element.includes(value))) 
              .map((element, id)=> <li className="hover:bg-myPink " onClick={() => setValue(element)}
                key={id}>{element}</li>) 
        } 
      </ul>

    </div>

  )
}