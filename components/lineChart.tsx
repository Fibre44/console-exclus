'use client'
import { Line } from 'react-chartjs-2';
import { dataGraph } from '../utilis/dataGraph';
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

export function LineChart({ generation }: { generation: string }) {
    const generationFilter = generation
    const data = dataGraph(generationFilter, 'line')
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            title: {
                display: true,
                text: `Génération de console : ${generation}`,
            },
        },
    };


    return <>
        <Line options={options} data={data} />;

    </>

}




