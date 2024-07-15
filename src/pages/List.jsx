import { Toto } from "../hooks/useCharacters";


export default function List () {
  const {isLoading, isSuccess, data} = Toto();
  console.log("data",data.results )
  //const Toto = {queryFn}
  return (
    <>
      <div> isLoading: {isLoading ? 'true' : 'false'}</div>
      <div> isSuccess: {isSuccess ? 'true' : 'false'}</div>
      
    </>
  )
}