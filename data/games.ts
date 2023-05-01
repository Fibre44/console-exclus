type Console = {
    name: string
    construtor: string
    color: string
    games: string[]
}

type Games = {

    generation: string,
    description?: string,
    wikipedia?: string
    console: Console[]

}

export const games: Games[] = [
    {
        generation: '1',
        description: 'Génération de 1972 à 1977',
        console: [
            {
                name: 'Odyssey',
                construtor: 'Magnavox',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Halo', 'ttt', 'tttttt']
            }
        ]
    },
    {
        generation: '2',
        description: 'Les consoles 8 bits',
        console: [
            {
                name: 'Atari 2600',
                construtor: 'Atari',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Halo']
            },
            {
                name: 'ColecoVision',
                construtor: 'Coleco',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
        ]
    },
    {
        generation: '3',
        description: 'test 3',
        console: [
            {
                name: 'Master Sytem',
                construtor: 'Sega',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Halo']
            },
            {
                name: 'NES',
                construtor: 'Nintendo',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: 'PC-Engine',
                construtor: 'NEC',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
        ]
    },
    {
        generation: '4',
        description: 'Les consoles 16 bits',
        console: [
            {
                name: 'Mega drive',
                construtor: 'Sega',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Halo']
            },
            {
                name: 'Game Gear',
                construtor: 'Sega',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Halo']
            },
            {
                name: 'Super Nintento',
                construtor: 'Nintendo',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
        ]
    },
    {
        generation: '5',
        description: 'Les consoles 32 et 64 bits',
        console: [
            {
                name: 'Saturn',
                construtor: 'Sega',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Halo']
            },
            {
                name: 'Nintendo 64',
                construtor: 'Nintendo',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: 'Playsation',
                construtor: 'Sony',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: 'Jaguar',
                construtor: 'Atari',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: '3DO',
                construtor: 'Panasonic',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
        ]
    },
    {
        generation: '6',
        description: 'La génération 64 bits',
        console: [
            {
                name: 'Dreamcast',
                construtor: 'Sega',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Halo']
            },
            {
                name: 'Playsation 2',
                construtor: 'Sony',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: 'Xbox',
                construtor: 'Microsoft',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: 'Gamecube',
                construtor: 'Nintendo',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },

        ]
    },
    {
        generation: '7',
        description: 'Les consoles HD',
        console: [
            {
                name: 'Xbox 360',
                construtor: 'Microsoft',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Halo']
            },
            {
                name: 'Playsation 3',
                construtor: 'Sony',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: 'PSP',
                construtor: 'Sony',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: 'Wii',
                construtor: 'Nintendo',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: 'DS',
                construtor: 'Nintendo',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
        ]
    },
    {
        generation: '8',
        description: 'Les consoles de 2013 à 2021',
        console: [
            {
                name: 'Xbox One',
                construtor: 'Microsoft',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Halo']
            },
            {
                name: 'Playsation 4',
                construtor: 'Sony',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: 'Playstation Vita',
                construtor: 'Sony',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: 'Wii U',
                construtor: 'Nintendo',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: '3DS',
                construtor: 'Nintendo',
                color: 'rgba(255, 99, 132, 0.5)',
                games: ['Gran turismo']
            },
            {
                name: 'Switch',
                construtor: 'Nintendo',
                color: 'rgba(255, 99, 132, 0.5)',

                games: ['Gran turismo']
            },
        ]
    },
    {
        generation: '9',
        description: 'Les consoles actuelles',
        console: [
            {
                name: 'Xbox Series X/S',
                construtor: 'Microsoft',
                color: '#03FF2D',

                games: ['Halo']
            },
            {
                name: 'Playsation 5',
                construtor: 'Sony',
                color: '#033EFF',
                games: ['Gran turismo']
            },
        ]
    }


]