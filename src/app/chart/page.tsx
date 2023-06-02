import { PieChart } from "../../../components/PieChart";
import { Comment } from '../../../components/comment';
import { Table } from '../../../components/table';
import { dataSet } from '../../../data/dataSet';
export default function App() {
    const gamesFilter = dataSet.filter(data => data.generation.number)

    return <div className='w-full h-full sm:flex sm:flex-col lg:flex-row justify-center flex-wrap top-5'>
        <div className='sm:w-full lg:w-1/2'>
            <PieChart datas={gamesFilter} />
        </div>
    </div>

}





