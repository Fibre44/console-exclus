import { games } from "../../data/games";
import Link from "next/link";
export default function App() {

  return <div>
    <h1>Bienvenue sur ce site</h1>
    <p>Ce site référence l &apos; ensemble des exclus des différentes consoles</p>
    <ul>
      <li>Les remaster ne sont pas comptabilisé</li>
      <li>Les jeux cross gen sont comptabilisé sur le support le plus ancien</li>
    </ul>
    <div className="grid gap-4 sm: grid-cols-1 grid-rows-1 md:grid-cols-5 grid-rows-2 lg:grid-cols-3 grid-rows-3">
      {games.map(game =>
        <div key={game.generation} className="card w-96 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">{`Génération :${game.generation}`}</h2>
            <p>{game.description}</p>
            <div className="card-actions justify-end">
              <Link href={`/${game.generation}`}>Voir le détail</Link>
            </div>
          </div>
        </div>)}
    </div>


  </div>
}


