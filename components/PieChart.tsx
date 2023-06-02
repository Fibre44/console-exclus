'use client'
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
ChartJS.register(ArcElement, Tooltip, Legend);
import type { DataSet } from '../data/dataSet';
/**
 * Graphique des jeux sorties sur les différentes consoles par années
 * @param param0 
 * @returns 
 */

export function PieChart({ datas }: { datas: DataSet[] }) {
    const labels: string[] = []
    const datasSet = []
    const dataCountList: number[] = []
    const backgroundColorList: string[] = []
    //Gestion des labels
    for (let data of datas) {
        data.manufacturer.forEach(manufacturer => labels.push(manufacturer.console))

    }
    //Somme des jeux
    for (let data of datas) {
        data.manufacturer.forEach(manufacturer => dataCountList.push(manufacturer.games.length))
    }
    //Gestion des couleurs
    for (let data of datas) {
        data.manufacturer.forEach(manufacturer => backgroundColorList.push(manufacturer.backgroundColor))
    }
    datasSet.push(
        {
            label: 'Nombre de jeux',
            data: [...dataCountList],
            backgroundColor: [...backgroundColorList],
            borderColor: [...backgroundColorList],
            borderWidth: 1,


        }
    )
    const data = {
        labels: labels,
        datasets: [...datasSet]
    }



    return <>
        < Pie data={data} />;

    </>

}




