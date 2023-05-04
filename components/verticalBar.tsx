'use client'
import { Bar } from 'react-chartjs-2';
import { dataGraph } from '../utilis/dataGraph';
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



export function VerticalBar({ generation }: { generation: string }) {
    const generationFilter = generation

    const data = dataGraph(generationFilter, 'vertical')
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
        <Bar options={options} data={data} />;

    </>

}




