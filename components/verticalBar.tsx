'use client'
import { Bar } from 'react-chartjs-2';
import { dataSet } from '../data/dataSet';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

/**
 * Graphique des notes moyennes des jeux de la génération par consoles
 * @param string 
 * @returns 
 */

export function VerticalBar({ generation }: { generation: string }) {

    const generationFilter = generation

    const gamesFilter = dataSet.filter(data => data.generation.number === generationFilter)
    const labels = [...gamesFilter[0].generation.years];

    //On tourne par société 
    const dataSets = []
    for (let manufacturer of gamesFilter[0].manufacturer) {
        const dataListNumberGamesYear = []
        let label = manufacturer.console
        let backgroundColor = manufacturer.backgroundColor
        //On tourne par année pour calculer le nombre de jeux
        for (let year of gamesFilter[0].generation.years) {
            let rated = 0
            let numberGamesList = manufacturer.games.filter(gamesYear => gamesYear.year === year)
            let numberGames = numberGamesList.length
            for (let rate of numberGamesList) {
                rated += parseFloat(rate.metaCritic)
            }
            let average = rated / numberGames
            dataListNumberGamesYear.push(average)
        }

        let dataVertical = {
            label,
            data: [...dataListNumberGamesYear],
            backgroundColor,
        }
        dataSets.push(dataVertical)

    }

    const data = {
        labels,
        datasets: [
            ...dataSets
        ],
    }; const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `Note moyenne metacritic par années/consoles`,
            },
        },
    };

    return <>
        <Bar options={options} data={data} />;

    </>

}




