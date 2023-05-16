import type { DataSet } from '../data/dataSet';
export function Comment({ datas, type }: { datas: DataSet[], type: string }) {
    return <p className='lg:py-20'>
        {type == 'games' ? datas[0].generation.commentGames : datas[0].generation.commentMetaCritics}
    </p>
}