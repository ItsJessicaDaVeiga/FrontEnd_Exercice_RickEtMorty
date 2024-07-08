

export default function Headers () {
  return (
    <div className="flex flex-col sm:flex-row m-5 items-center px-12 py-5 gap-5 bg-purple-300 rounded-full">

      <div className="font-semibold">
        <img className="h-12" src="/logo.png" alt="Rick & Morty"></img>
      </div>

      <div className="grow flex justify-center">
        <input className="grow py-1 px-3 rounded-l-full" placeholder=" Morty "></input>
        <button className="px-4 rounded-r-full bg-purple-400 text-wrap "> Recherche </button>
      </div>

      <div className="flex gap-6">
        <span className="">Liste des personnages</span>
        <span className="">Techno utilisées</span>
      </div>
    </div>
  )
}