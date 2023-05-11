import { dataSet } from '../data/dataSet';

export function Comment({ generation, type }: { generation: string, type: string }) {
    const generationFilter = generation
    //On filtre sur la génération
    const gamesFilter = dataSet.filter(data => data.generation.number === generationFilter)
    return <p className='lg:py-20'>
        {type == 'games' ? gamesFilter[0].generation.commentGames : gamesFilter[0].generation.commentMetaCritics}
    </p>
}