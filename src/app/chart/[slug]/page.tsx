'use client'
import { useParams } from 'next/navigation';
import { VerticalBar } from "../../../../components/verticalBar"
import { LineChart } from "../../../../components/lineChart"
import { Comment } from '../../../../components/comment';
import { Table } from '../../../../components/table';
import { dataSet } from '../../../../data/dataSet';
export default function App() {
    const params = useParams();
    const generationList = ['7', '8', '9']
    const generation = params.slug
    const gamesFilter = dataSet.filter(data => data.generation.number === generation)
    if (generationList.includes(generation[0])) {
        return <div className='w-full h-full sm:flex sm:flex-col lg:flex-row flex-wrap top-5'>
            <div className='sm:w-full lg:w-1/2'>
                <LineChart datas={gamesFilter} />
            </div>
            <div className='sm:w-full lg:w-1/2'>
                <Comment datas={gamesFilter} type='games' />
            </div>
            <div className='sm:w-full lg:w-1/2'>
                <VerticalBar datas={gamesFilter} />
            </div>
            <div className='sm:w-full lg:w-1/2'>
                <Comment datas={gamesFilter} type='' />
            </div>
            <div className='sm:w-full'>
                <Table datas={gamesFilter} />
            </div>
        </div>
    } else {
        return <>
            <p>Oups</p>
        </>
    }

}



