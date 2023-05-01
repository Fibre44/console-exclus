'use client'
import { games } from '../../../data/games';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);



export default function App() {
    const params = useParams();
    const generationFilter = params.slug
    if (generationFilter) {

        const labels = ['Nombre de jeux'];
        const gamesFilter = games.filter(filter => filter.generation === generationFilter)
        if (gamesFilter[0]) {
            const options = {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top' as const,
                    },
                    title: {
                        display: true,
                        text: `Génération de console : ${gamesFilter[0].generation}`,
                    },
                },
            };
            const gamesList = gamesFilter[0].console
            const dataSets = []
            for (let datas of gamesList) {

                let dataConsole = {
                    label: datas.name,
                    data: [datas.games.length],
                    backgroundColor: datas.color,

                }
                dataSets.push(dataConsole)
            }
            const data = {
                labels,
                datasets: [
                    ...dataSets
                ],
            };
            return <>
                <Link href={'/'} className='absolute'>Retour à l &apos; accueil</Link>
                <Bar options={options} data={data} />;

            </>
        }
    }

}
