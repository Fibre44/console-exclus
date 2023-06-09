import type { DataSet, Game } from "../data/dataSet";
import Link from "next/link";
export function Table({ datas }: { datas: DataSet[] }) {

    return <div className="overflow-x-auto">
        <p>Liste des jeux de la base de données</p>
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr>
                    <th>Année</th>
                    <th>Console</th>
                    <th>Jeux</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
                {datas.map(data => data.manufacturer.map(manufacturer => manufacturer.games.map(game => <Row key={game.title} game={game} console={manufacturer.console} />)))}
            </tbody>
        </table>
    </div>

}

const Row = ({ game, console }: { game: Game, console: string }) => {
    return <tr>
        <th>{game.year}</th>
        <td>{console}</td>
        <td>{game.title}</td>
        <td><Link href={game.urlMetaCritic}>{game.metaCritic}</Link></td>
    </tr>
}