import { dataSet } from "../data/dataSet";
import type { Game } from "../data/dataSet";
import Link from "next/link";
export function Table({ generation }: { generation: string }) {
    const gamesFilter = dataSet.filter(data => data.generation.number === generation)

    return <div className="overflow-x-auto">
        <table className="table w-full">
            {/* head */}
            <thead>
                <tr>
                    <th></th>
                    <th>Console</th>
                    <th>Jeux</th>
                    <th>Note</th>
                </tr>
            </thead>
            <tbody>
                {gamesFilter.map(data => data.manufacturer.map(manufacturer => manufacturer.games.map(game => <Row key={game.title} game={game} console={manufacturer.console} />)))}

            </tbody>
        </table>
    </div>

}

const Row = ({ game, console }: { game: Game, console: string }) => {
    return <tr>
        <th>1</th>
        <td>{console}</td>
        <td>{game.title}</td>
        <td><Link href={game.urlMetaCritic}>{game.metaCritic}</Link></td>
    </tr>
}