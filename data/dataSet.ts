export type Game = {
    title: string
    year: string
    metaCritic: string,
    urlMetaCritic: string
}

type Manufacturer = {
    society: string
    console: string
    backgroundColor: string
    games: Game[]
}

type DataSet = {

    generation: {
        number: string
        years: string[]
        description?: string
        wikipedia?: string
    },
    manufacturer: Manufacturer[]

}

export const dataSet: DataSet[] = [

    {
        generation: {
            number: '9',
            years: ['2021', '2022', '2023']
        },
        manufacturer: [
            {
                society: 'Sony',
                console: 'Playstation 5',
                backgroundColor: '#99FFFF',
                games: [
                    {
                        title: 'Ratchet & Clank: Rift Apart',
                        metaCritic: '88',
                        year: '2021',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/ratchet-clank-rift-apart'
                    },
                    {
                        title: 'Forspoken',
                        metaCritic: '64',
                        year: '2023',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/forspoken'
                    },
                ]
            },
            {
                society: 'Microsoft',
                console: 'Xbox Series',
                backgroundColor: '#CCFFCC',
                games: [
                    {
                        title: 'RedFall',
                        metaCritic: '64',
                        year: '2023',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/redfall'
                    },
                    {
                        title: 'hi-fi-rush',
                        metaCritic: '89',
                        year: '2023',
                        urlMetaCritic: 'https://www.metacritic.com/game/pc/hi-fi-rush'
                    },
                    {
                        title: 'High On Life',
                        metaCritic: '67',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/high-on-life'
                    }
                ]
            }
        ]
    }


]