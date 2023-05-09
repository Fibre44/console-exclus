'use client'
import { useParams } from 'next/navigation';
import { Table } from '../../../../components/table';
export default function App() {
    const params = useParams();
    const generationList = ['9']
    const generation = params.slug
    if (generationList.includes(generation)) {
        return <div className='w-full h-full justify-center sm:flex sm:flex-col lg:flex-row flex-wrap'>
            <div className='sm:w-full lg:w-1/2'>
                <Table generation={generation} />
            </div>

        </div>
    } else {
        return <>
            <p>Oups</p>
        </>
    }

}



