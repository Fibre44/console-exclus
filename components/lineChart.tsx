'use client'
import { Line } from 'react-chartjs-2';
import type { DataSet } from '../data/dataSet';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

/**
 * Graphique des jeux sorties sur les différentes consoles par années
 * @param param0 
 * @returns 
 */

export function LineChart({ datas }: { datas: DataSet[] }) {
    //On filtre sur la génération
    const labels = [...datas[0].generation.years];

    //On tourne par société 
    const dataSets = []
    for (let manufacturer of datas[0].manufacturer) {
        const dataListNumberGamesYear = []
        let label = manufacturer.console
        let backgroundColor = manufacturer.backgroundColor
        //On tourne par année pour calculer le nombre de jeux
        for (let year of datas[0].generation.years) {
            let numberGamesList = manufacturer.games.filter(gamesYear => gamesYear.year === year)
            let numberGames = numberGamesList.length
            dataListNumberGamesYear.push(numberGames)
        }
        let dataLine = {
            label,
            data: [...dataListNumberGamesYear],
            backgroundColor,
            borderColor: backgroundColor
        }
        dataSets.push(dataLine)

    }

    const data = {
        labels,
        datasets: [
            ...dataSets
        ],
    };
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `Nombre de jeux par années/consoles`,
            },
        },
    };


    return <>
        <Line options={options} data={data} />;

    </>

}




