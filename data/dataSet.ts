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
        commentGames: string,
        commentMetaCritics: string
    },
    manufacturer: Manufacturer[]

}

export const dataSet: DataSet[] = [

    {
        generation: {
            number: '9',
            years: ['2020', '2021', '2022', '2023'],
            commentGames: 'Le nombre de sortie de jeux est très proche entre les deux constructeurs',
            commentMetaCritics: 'Globalement les deux constructeurs proposent des jeux de qualités. Cependant Sony frappe plus fort.'
        },
        manufacturer: [
            {
                society: 'Sony',
                console: 'Playstation 5',
                backgroundColor: '#99FFFF',
                games: [
                    {
                        title: `MARVEL'S SPIDER-MAN: MILES MORALES`,
                        metaCritic: '85',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/marvels-spider-man-miles-morales'
                    },
                    {
                        title: `DEMON'S SOULS`,
                        metaCritic: '92',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/demons-souls'
                    },
                    {
                        title: `SACKBOY: A BIG ADVENTURE`,
                        metaCritic: '79',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/sackboy-a-big-adventure'
                    },
                    {
                        title: 'Ratchet & Clank: Rift Apart',
                        metaCritic: '88',
                        year: '2021',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/ratchet-clank-rift-apart'
                    },
                    {
                        title: 'Returnal',
                        metaCritic: '86',
                        year: '2021',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/returnal'
                    },
                    {
                        title: 'Stray',
                        metaCritic: '83',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/stray'
                    },
                    {
                        title: 'Gran Turismo 7',
                        metaCritic: '87',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/gran-turismo-7'
                    },
                    {
                        title: 'GOD OF WAR: RAGNAROK',
                        metaCritic: '94',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/god-of-war-ragnarok'
                    },
                    {
                        title: 'Horizon Forbidden West',
                        metaCritic: '88',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/horizon-forbidden-west'
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
                        title: 'GEARS TACTICS',
                        metaCritic: '82',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/gears-tactics'
                    },
                    {
                        title: 'HALO INFINITE',
                        metaCritic: '87',
                        year: '2021',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/halo-infinite'
                    },
                    {
                        title: 'MICROSOFT FLIGHT SIMULATOR',
                        metaCritic: '90',
                        year: '2021',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/microsoft-flight-simulator'
                    },
                    {
                        title: 'FORZA HORIZON 5',
                        metaCritic: '92',
                        year: '2021',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/forza-horizon-5'
                    },
                    {
                        title: 'High On Life',
                        metaCritic: '67',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/high-on-life'
                    },
                    {
                        title: 'AS DUSK FALLS',
                        metaCritic: '77',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/as-dusk-falls'
                    },
                    {
                        title: 'SCORN',
                        metaCritic: '64',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/scorn'
                    },
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
                ]
            }
        ]
    }


]