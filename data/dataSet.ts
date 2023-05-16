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

export type DataSet = {

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
            number: '8',
            years: ['2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023'],
            commentGames: '',
            commentMetaCritics: ''
        },
        manufacturer: [
            {
                society: 'Sony',
                console: 'Playstation 4',
                backgroundColor: '#2E6DB4',
                games: [
                    {
                        title: 'KILLZONE: SHADOW FALL',
                        metaCritic: '73',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/killzone-shadow-fall'
                    },
                    {
                        title: 'INFAMOUS: SECOND SON',
                        metaCritic: '80',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/infamous-second-son'
                    },
                    {
                        title: 'DRIVECLUB',
                        metaCritic: '71',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/driveclub'
                    },
                    {
                        title: 'BLOODBORNE',
                        metaCritic: '92',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/bloodborne'
                    },
                    {
                        title: 'UNCHARTED: THE NATHAN DRAKE COLLECTION',
                        metaCritic: '86',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/uncharted-the-nathan-drake-collection'
                    },
                    {
                        title: 'THE ORDER: 1886',
                        metaCritic: '63',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/the-order-1886'
                    },
                    {
                        title: 'KNACK',
                        metaCritic: '54',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/knack'
                    },
                    {
                        title: 'UNTIL DAWN',
                        metaCritic: '79',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/until-dawn'
                    },
                    {
                        title: `RATCHET & CLANK`,
                        metaCritic: '85',
                        year: '2016',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/ratchet-clank'
                    },
                    {
                        title: `GRAVITY RUSH REMASTERED`,
                        metaCritic: '80',
                        year: '2016',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/gravity-rush-remastered'
                    },
                    {
                        title: `GRAVITY RUSH 2`,
                        metaCritic: '80',
                        year: '2016',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/gravity-rush-2'
                    },
                    {
                        title: `UNCHARTED 4: A THIEF'S END`,
                        metaCritic: '93',
                        year: '2016',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/uncharted-4-a-thiefs-end'
                    },
                    {
                        title: `HEAVY RAIN`,
                        metaCritic: '78',
                        year: '2016',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/heavy-rain'
                    },
                    {
                        title: `THE LAST GUARDIAN`,
                        metaCritic: '82',
                        year: '2016',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/the-last-guardian'
                    },
                    {
                        title: 'HORIZON ZERO DAWN',
                        metaCritic: '89',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/horizon-zero-dawn'
                    },
                    {
                        title: 'GRAN TURISMO SPORT',
                        metaCritic: '75',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/gran-turismo-sport'
                    },
                    {
                        title: 'KNACK 2',
                        metaCritic: '69',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/knack-2'
                    },
                    {
                        title: 'UNCHARTED: THE LOST LEGACY',
                        metaCritic: '84',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/uncharted-the-lost-legacy'
                    },
                    {
                        title: 'WIPEOUT: OMEGA COLLECTION',
                        metaCritic: '85',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/wipeout-omega-collection'
                    },
                    {
                        title: `MARVEL'S SPIDER-MAN`,
                        metaCritic: '87',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/marvels-spider-man'
                    },
                    {
                        title: `GOD OF WAR`,
                        metaCritic: '94',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/god-of-war'
                    },
                    {
                        title: `DETROIT: BECOME HUMAN`,
                        metaCritic: '78',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/detroit-become-human'
                    },
                    {
                        title: `SHADOW OF THE COLOSSUS`,
                        metaCritic: '91',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/shadow-of-the-colossus'
                    },
                    {
                        title: `ASTRO BOT: RESCUE MISSION`,
                        metaCritic: '90',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/astro-bot-rescue-mission'
                    },
                    {
                        title: `DAYS GONE`,
                        metaCritic: '71',
                        year: '2019',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/days-gone'
                    },
                    {
                        title: `DEATH STRANDING`,
                        metaCritic: '82',
                        year: '2019',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/death-stranding'
                    },
                    {
                        title: `MARVEL'S SPIDER-MAN: MILES MORALES`,
                        metaCritic: '84',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/marvels-spider-man-miles-morales'
                    },
                    {
                        title: `DREAMS`,
                        metaCritic: '89',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/dreams'
                    },
                    {
                        title: `GHOST OF TSUSHIMA`,
                        metaCritic: '83',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/ghost-of-tsushima'
                    },
                    {
                        title: 'GOD OF WAR: RAGNAROK',
                        metaCritic: '94',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/god-of-war-ragnarok'
                    },
                    {
                        title: 'Gran Turismo 7',
                        metaCritic: '82',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/gran-turismo-7'
                    },
                    {
                        title: 'Horizon Forbidden West',
                        metaCritic: '83',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-4/horizon-forbidden-west'
                    },
                ]
            },
            {
                society: 'Microsoft',
                console: 'Xbox one',
                backgroundColor: '#107C10',
                games: [
                    {
                        title: 'HALO: SPARTAN ASSAULT',
                        metaCritic: '53',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/halo-spartan-assault'
                    },
                    {
                        title: 'DEAD RISING 3',
                        metaCritic: '78',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/dead-rising-3'
                    },
                    {
                        title: 'RYSE: SON OF ROME',
                        metaCritic: '60',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/ryse-son-of-rome'
                    },
                    {
                        title: 'KILLER INSTINCT',
                        metaCritic: '73',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/killer-instinct'
                    },
                    {
                        title: 'LOCOCYCLE',
                        metaCritic: '48',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/lococycle'
                    },
                    {
                        title: 'ZOO TYCOON',
                        metaCritic: '68',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/zoo-tycoon'
                    },
                    {
                        title: 'CRIMSON DRAGON',
                        metaCritic: '55',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/crimson-dragon'
                    },
                    {
                        title: 'KINECT SPORTS RIVALS',
                        metaCritic: '60',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/kinect-sports-rivals'
                    },
                    {
                        title: 'FORZA MOTORSPORT 5',
                        metaCritic: '79',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/forza-motorsport-5'
                    },
                    {
                        title: `D4: DARK DREAMS DON'T DIE`,
                        metaCritic: '76',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/d4-dark-dreams-dont-die'
                    },
                    {
                        title: `FORZA HORIZON 2`,
                        metaCritic: '86',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/forza-horizon-2'
                    },
                    {
                        title: `PROJECT SPARK`,
                        metaCritic: '73',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/project-spark'
                    },
                    {
                        title: `SUNSET OVERDRIVE`,
                        metaCritic: '81',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/sunset-overdrive'
                    },
                    {
                        title: `HALO: THE MASTER CHIEF COLLECTION`,
                        metaCritic: '85',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/halo-the-master-chief-collection'
                    },
                    {
                        title: `SCREAMRIDE`,
                        metaCritic: '71',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/screamride'
                    },
                    {
                        title: `FORZA MOTORSPORT 6`,
                        metaCritic: '87',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/forza-motorsport-6'
                    },
                    {
                        title: `HALO 5: GUARDIANS`,
                        metaCritic: '84',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/halo-5-guardians'
                    },
                    {
                        title: `COBALT`,
                        metaCritic: '66',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/cobalt'
                    },
                    {
                        title: `QUANTUM BREAK`,
                        metaCritic: '77',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/quantum-break'
                    },
                    {
                        title: `ORI AND THE BLIND FOREST`,
                        metaCritic: '88',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/ori-and-the-blind-forest'
                    },
                    {
                        title: `RECORE`,
                        metaCritic: '63',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/recore'
                    },
                    {
                        title: `FORZA HORIZON 3`,
                        metaCritic: '91',
                        year: '2016',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/forza-horizon-3'
                    },
                    {
                        title: `GEARS OF WAR 4`,
                        metaCritic: '84',
                        year: '2016',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/gears-of-war-4'
                    },
                    {
                        title: `HALO WARS: DEFINITIVE EDITION`,
                        metaCritic: '81',
                        year: '2016',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/halo-wars-definitive-edition'
                    },
                    {
                        title: `HALO WARS 2`,
                        metaCritic: '79',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/halo-wars-2'
                    },
                    {
                        title: `FORZA MOTORSPORT 7`,
                        metaCritic: '79',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/forza-motorsport-7'
                    },
                    {
                        title: `SEA OF THIEVES`,
                        metaCritic: '69',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/sea-of-thieves'
                    },
                    {
                        title: `STATE OF DECAY 2`,
                        metaCritic: '66',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/state-of-decay-2'
                    },
                    {
                        title: `FORZA HORIZON 4`,
                        metaCritic: '92',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/forza-horizon-4'
                    },
                    {
                        title: `CRACKDOWN 3`,
                        metaCritic: '60',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/crackdown-3'
                    },
                    {
                        title: `GEARS 5`,
                        metaCritic: '84',
                        year: '2019',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/gears-5'
                    },
                    {
                        title: `ORI AND THE WILL OF THE WISPS`,
                        metaCritic: '90',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/ori-and-the-will-of-the-wisps'
                    },
                    {
                        title: `BLEEDING EDGE`,
                        metaCritic: '66',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/bleeding-edge'
                    },
                    {
                        title: 'GEARS TACTICS',
                        metaCritic: '82',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/gears-tactics'
                    },
                    {
                        title: 'BATTLETOADS',
                        metaCritic: '72',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-one/battletoads'
                    },
                    {
                        title: 'HALO INFINITE',
                        metaCritic: '87',
                        year: '2021',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/halo-infinite'
                    },
                    {
                        title: 'FORZA HORIZON 5',
                        metaCritic: '92',
                        year: '2021',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/forza-horizon-5'
                    },
                    {
                        title: 'PENTIMENT',
                        metaCritic: '86',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/pentiment'
                    },
                    {
                        title: 'GROUNDED',
                        metaCritic: '82',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/grounded'
                    },
                ]
            },
            {
                society: 'Nintendo',
                console: 'Switch',
                backgroundColor: '#E70009',
                games: [
                    {
                        title: '1-2 - SWITCH',
                        metaCritic: '58',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/1-2-switch'
                    },
                    {
                        title: 'THE LEGEND OF ZELDA: BREATH OF THE WILD',
                        metaCritic: '97',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/the-legend-of-zelda-breath-of-the-wild'
                    },
                    {
                        title: 'ARMS',
                        metaCritic: '77',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/arms'
                    },
                    {
                        title: 'ASTRAL CHAIN',
                        metaCritic: '87',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/astral-chain'
                    },
                    {
                        title: 'SPLATOON 2',
                        metaCritic: '83',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/splatoon-2'
                    },
                    {
                        title: 'MARIO KART 8 DELUXE',
                        metaCritic: '92',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/mario-kart-8-deluxe'
                    },
                    {
                        title: 'CAPTAIN TOAD: TREASURE TRACKER',
                        metaCritic: '82',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/captain-toad-treasure-tracker'
                    },
                    {
                        title: 'FIRE EMBLEM WARRIORS',
                        metaCritic: '74',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/fire-emblem-warriors'
                    },
                    {
                        title: 'MARIO + RABBIDS: KINGDOM BATTLE',
                        metaCritic: '85',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/mario-+-rabbids-kingdom-battle'
                    },
                    {
                        title: 'XENOBLADE CHRONICLES 2',
                        metaCritic: '83',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/xenoblade-chronicles-2'
                    },
                    {
                        title: 'DONKEY KONG COUNTRY: TROPICAL FREEZE',
                        metaCritic: '86',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/donkey-kong-country-tropical-freeze'
                    },
                    {
                        title: 'SUPER SMASH BROS.ULTIMATE',
                        metaCritic: '93',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/super-smash-bros-ultimate'
                    },
                    {
                        title: 'NINTENDO LABO: TOYCON 01 VARIETY KIT',
                        metaCritic: '77',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/nintendo-labo-toycon-01-variety-kit'
                    },
                    {
                        title: 'MARIO TENNIS ACES',
                        metaCritic: '75',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/mario-tennis-aces'
                    },
                    {
                        title: 'GO VACATION',
                        metaCritic: '62',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/go-vacation'
                    },
                    {
                        title: 'KIRBY STAR ALLIES',
                        metaCritic: '73',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/kirby-star-allies'
                    },
                    {
                        title: 'SUPER SMASH BROS.ULTIMATE',
                        metaCritic: '93',
                        year: '2018',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/super-smash-bros-ultimate'
                    },
                    {
                        title: 'DAEMON X MACHINA',
                        metaCritic: '69',
                        year: '2019',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/daemon-x-machina'
                    },
                    {
                        title: `YOSHI'S CRAFTED WORLD`,
                        metaCritic: '79',
                        year: '2019',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/yoshis-crafted-world'
                    },
                    {
                        title: 'NEW SUPER MARIO BROS.U DELUXE',
                        metaCritic: '80',
                        year: '2019',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/new-super-mario-bros-u-deluxe'
                    },
                    {
                        title: 'POKEMON EPEE/BOUCLIER',
                        metaCritic: '80',
                        year: '2019',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/pokemon-shield'
                    },
                    {
                        title: 'SUPER MARIO MAKER 2',
                        metaCritic: '88',
                        year: '2019',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/super-mario-maker-2'
                    },
                    {
                        title: `LUIGI'S MANSION 3`,
                        metaCritic: '86',
                        year: '2019',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/luigis-mansion-3'
                    },
                    {
                        title: 'CLUBHOUSE GAMES: 51 WORLDWIDE CLASSICS',
                        metaCritic: '82',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/clubhouse-games-51-worldwide-classics'
                    },
                    {
                        title: 'PAPER MARIO: THE ORIGAMI KING',
                        metaCritic: '80',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/paper-mario-the-origami-king'
                    },
                    {
                        title: 'MARIO & SONIC AT THE OLYMPIC GAMES TOKYO 2020',
                        metaCritic: '69',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/mario-sonic-at-the-olympic-games-tokyo-2020/trailers/14132314'
                    },
                    {
                        title: 'XENOBLADE CHRONICLES: DEFINITIVE EDITION',
                        metaCritic: '89',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/xenoblade-chronicles-definitive-edition'
                    },
                    {
                        title: 'KIRBY FIGHTERS 2',
                        metaCritic: '65',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/kirby-fighters-2'
                    },
                    {
                        title: 'GOOD JOB!',
                        metaCritic: '78',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/good-job!'
                    },
                    {
                        title: 'ANIMAL CROSSING: NEW HORIZONS',
                        metaCritic: '90',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/animal-crossing-new-horizons'
                    },
                    {
                        title: 'PIKMIN 3 DELUXE',
                        metaCritic: '85',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/pikmin-3-deluxe'
                    },
                    {
                        title: 'MARIO GOLF: SUPER RUSH',
                        metaCritic: '70',
                        year: '2021',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/mario-golf-super-rush'
                    },
                    {
                        title: `SUPER MARIO 3D WORLD + BOWSER'S FURY`,
                        metaCritic: '89',
                        year: '2021',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/super-mario-3d-world-+-bowsers-fury'
                    },
                    {
                        title: 'METROID DREAD',
                        metaCritic: '88',
                        year: '2021',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/metroid-dread'
                    },
                    {
                        title: 'BAYONETTA 3',
                        metaCritic: '86',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/bayonetta-3'
                    },
                    {
                        title: 'POKEMON LEGENDS: ARCEUS',
                        metaCritic: '83',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/pokemon-legends-arceus'
                    },
                    {
                        title: 'XENOBLADE CHRONICLES 3',
                        metaCritic: '89',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/xenoblade-chronicles-3'
                    },
                    {
                        title: 'MARIO + RABBIDS SPARKS OF HOPE',
                        metaCritic: '86',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/mario-+-rabbids-sparks-of-hope'
                    },
                    {
                        title: 'POKEMON SCARLET',
                        metaCritic: '72',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/pokemon-scarlet'
                    },
                    {
                        title: 'SPLATOON 3',
                        metaCritic: '83',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/splatoon-3'
                    },
                    {
                        title: 'FIRE EMBLEM ENGAGE',
                        metaCritic: '80',
                        year: '2023',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/fire-emblem-engage'
                    },
                    {
                        title: 'METROID PRIME REMASTERED',
                        metaCritic: '94',
                        year: '2023',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/metroid-prime-remastered'
                    },
                    {
                        title: 'THE LEGEND OF ZELDA: TEARS OF THE KINGDOM',
                        metaCritic: '96',
                        year: '2023',
                        urlMetaCritic: 'https://www.metacritic.com/game/switch/the-legend-of-zelda-tears-of-the-kingdom'
                    },
                ],

            },

        ]
    },

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
                backgroundColor: '#2E6DB4',
                games: [
                    {
                        title: `MARVEL'S SPIDER-MAN: MILES MORALES`,
                        metaCritic: '85',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/marvels-spider-man-miles-morales'
                    },
                    {
                        title: `ASTRO'S PLAYROOM`,
                        metaCritic: '83',
                        year: '2020',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/astros-playroom'
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
                        title: 'DESTRUCTION ALLSTARS',
                        metaCritic: '62',
                        year: '2021',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/destruction-allstars'
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
                        title: 'UNCHARTED: LEGACY OF THIEVES COLLECTION',
                        metaCritic: '87',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/uncharted-legacy-of-thieves-collection'
                    },
                    {
                        title: 'THE LAST OF US PART I ',
                        metaCritic: '88',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-5/the-last-of-us-part-i'
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
                backgroundColor: '#107C10',
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
                        title: 'PENTIMENT',
                        metaCritic: '86',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/pentiment'
                    },
                    {
                        title: 'GROUNDED',
                        metaCritic: '82',
                        year: '2022',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-series-x/grounded'
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