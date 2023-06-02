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
            number: '7',
            years: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2017', '2017'],
            commentGames: '',
            commentMetaCritics: '',

        },
        manufacturer: [
            {
                society: 'Microsoft',
                console: 'Xbox 360',
                backgroundColor: '#107C10',
                games: [
                    {
                        title: `AMPED 3`,
                        metaCritic: '72',
                        year: '2005',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/amped-3'
                    },
                    {
                        title: `CONDEMNED: CRIMINAL ORIGIN`,
                        metaCritic: '81',
                        year: '2005',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/condemned-criminal-origins'
                    },
                    {
                        title: `RIDGE RACER 6`,
                        metaCritic: '74',
                        year: '2005',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/ridge-racer-6'
                    },
                    {
                        title: `PERFECT DARK ZERO`,
                        metaCritic: '81',
                        year: '2005',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/perfect-dark-zero'
                    },
                    {
                        title: `PROJECT GOTHAM RACING 3`,
                        metaCritic: '88',
                        year: '2005',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/project-gotham-racing-3'
                    },
                    {
                        title: `KAMEO: ELEMENTS OF POWER`,
                        metaCritic: '79',
                        year: '2005',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/kameo-elements-of-power'
                    },
                    {
                        title: `DEAD OR ALIVE 4`,
                        metaCritic: '85',
                        year: '2005',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/dead-or-alive-4'
                    },
                    {
                        title: `BOMBERMAN ACT: ZERO`,
                        metaCritic: '34',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/bomberman-act-zero'
                    },
                    {
                        title: `DEAD OR ALIVE XTREME 2`,
                        metaCritic: '53',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/dead-or-alive-xtreme-2'
                    },
                    {
                        title: `SAINTS ROW`,
                        metaCritic: '81',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/saints-row'
                    },
                    {
                        title: `CHROMEHOUNDS`,
                        metaCritic: '71',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/chromehounds'
                    },
                    {
                        title: `GEARS OF WAR`,
                        metaCritic: '94',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/gears-of-war'
                    },
                    {
                        title: `DEAD RISING`,
                        metaCritic: '85',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/dead-rising'
                    },
                    {
                        title: `FULL AUTO`,
                        metaCritic: '70',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/full-auto'
                    },
                    {
                        title: `MOTOGP '06`,
                        metaCritic: '80',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/motogp-06'
                    },
                    {
                        title: `OVER G FIGHTERS`,
                        metaCritic: '49',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/over-g-fighters'
                    },
                    {
                        title: `RUMBLE ROSES XX`,
                        metaCritic: '62',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/rumble-roses-xx'
                    },
                    {
                        title: `IMPORT TUNER CHALLENGE`,
                        metaCritic: '54',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/import-tuner-challenge'
                    },
                    {
                        title: `NINETY-NINE NIGHTS`,
                        metaCritic: '61',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/ninety-nine-nights'
                    },
                    {
                        title: `THE OUTFIT`,
                        metaCritic: '70',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/the-outfit'
                    },
                    {
                        title: `VIVA PINATA`,
                        metaCritic: '84',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/viva-pinata'
                    },
                    {
                        title: `AMERICA'S ARMY: TRUE SOLDIERS`,
                        metaCritic: '43',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/americas-army-true-soldiers'
                    },
                    {
                        title: `TENCHU Z`,
                        metaCritic: '56',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/tenchu-z'
                    },
                    {
                        title: `TETRIS EVOLUTION`,
                        metaCritic: '52',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/tetris-evolution'
                    },
                    {
                        title: `NARUTO: RISE OF A NINJA`,
                        metaCritic: '78',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/naruto-rise-of-a-ninja'
                    },
                    {
                        title: `PROJECT GOTHAM RACING 4`,
                        metaCritic: '85',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/project-gotham-racing-4'
                    },
                    {
                        title: `PROJECT SYLPHEED: ARC OF DECEPTION`,
                        metaCritic: '64',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/project-sylpheed-arc-of-deception'
                    },
                    {
                        title: `CRACKDOWN`,
                        metaCritic: '83',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/crackdown'
                    },
                    {
                        title: `BULLET WITCH`,
                        metaCritic: '55',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/bullet-witch'
                    },
                    {
                        title: `WARTECH: SENKO NO RONDE`,
                        metaCritic: '60',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/wartech-senko-no-ronde'
                    },
                    {
                        title: `FUZION FRENZY 2`,
                        metaCritic: '49',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/fuzion-frenzy-2'
                    },
                    {
                        title: 'ACE COMBAT 6: FIRES OF LIBERATION',
                        metaCritic: '80',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/ace-combat-6-fires-of-liberation'
                    },
                    {
                        title: 'BEAUTIFUL KATAMARI',
                        metaCritic: '73',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/beautiful-katamari'
                    },
                    {
                        title: 'BLUE DRAGON',
                        metaCritic: '79',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/blue-dragon'
                    },
                    {
                        title: 'FORZA MOTORSPORT 2',
                        metaCritic: '90',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/forza-motorsport-2'
                    },
                    {
                        title: 'Halo 3',
                        metaCritic: '94',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/halo-3'
                    },
                    {
                        title: 'BANJO- KAZOOIE: NUTS & BOLTS',
                        metaCritic: '79',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/banjo-kazooie-nuts-bolts'
                    },
                    {
                        title: 'INFINITE UNDISCOVERY',
                        metaCritic: '68',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/infinite-undiscovery'
                    },
                    {
                        title: `YOU'RE IN THE MOVIE`,
                        metaCritic: '55',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/youre-in-the-movies'
                    },
                    {
                        title: `VIVA PINATA: TROUBLE IN PARADISE`,
                        metaCritic: '82',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/viva-pinata-trouble-in-paradise'
                    },
                    {
                        title: `NARUTO: THE BROKEN BOND`,
                        metaCritic: '80',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/naruto-the-broken-bond'
                    },
                    {
                        title: `Ninja Gaiden II`,
                        metaCritic: '81',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/ninja-gaiden-ii'
                    },
                    {
                        title: 'GUILTY GEAR 2: OVERTURE',
                        metaCritic: '56',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/guilty-gear-2-overture'
                    },
                    {
                        title: 'FABLE II',
                        metaCritic: '89',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/fable-ii'
                    },
                    {
                        title: 'TOO HUMAN',
                        metaCritic: '65',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/too-human'
                    },
                    {
                        title: 'SCENE IT? BOX OFFICE SMASH',
                        metaCritic: '76',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/scene-it-box-office-smash'
                    },
                    {
                        title: 'GEARS OF WAR 2',
                        metaCritic: '93',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/gears-of-war-2'
                    },
                    {
                        title: 'KINGDOM UNDER FIRE: CIRCLE OF DOOM',
                        metaCritic: '55',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/kingdom-under-fire-circle-of-doom'
                    },
                    {
                        title: 'LOST ODYSSEY',
                        metaCritic: '78',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/lost-odyssey'
                    },
                    {
                        title: 'LIPS',
                        metaCritic: '71',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/lips'
                    },
                    {
                        title: 'FORZA MOTORSPORT 3',
                        metaCritic: '92',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/forza-motorsport-3'
                    },
                    {
                        title: 'STOKED',
                        metaCritic: '68',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/stoked'
                    },
                    {
                        title: 'Halo 3:ODST',
                        metaCritic: '83',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/halo-3-odst'
                    },
                    {
                        title: 'RACE PRO',
                        metaCritic: '72',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/race-pro'
                    },
                    {
                        title: 'MAGNA CARTA 2',
                        metaCritic: '69',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/magna-carta-2'
                    },
                    {
                        title: 'Halo wars',
                        metaCritic: '82',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/halo-wars'
                    },
                    {
                        title: 'CRACKDOWN 2',
                        metaCritic: '70',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/crackdown-2'
                    },
                    {
                        title: 'KINECT ADVENTURES!',
                        metaCritic: '61',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/kinect-adventures!'
                    },
                    {
                        title: 'KINECTIMALS',
                        metaCritic: '74',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/kinectimals'
                    },
                    {
                        title: 'Fable 3',
                        metaCritic: '80',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/fable-iii'
                    },
                    {
                        title: 'N3II: NINETY - NINE NIGHTS',
                        metaCritic: '45',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/n3ii-ninety-nine-nights'
                    },
                    {
                        title: 'SONIC FREE RIDERS',
                        metaCritic: '47',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/sonic-free-riders'
                    },
                    {
                        title: 'HALO: REACH',
                        metaCritic: '91',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/halo-reach'
                    },
                    {
                        title: 'KINECT JOY RIDE',
                        metaCritic: '52',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/kinect-joy-ride'
                    },
                    {
                        title: 'KINECT SPORTS',
                        metaCritic: '73',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/kinect-sports'
                    },
                    {
                        title: 'DANCE CENTRAL',
                        metaCritic: '82',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/dance-central'
                    },
                    {
                        title: 'FORZA MOTORSPORT 4',
                        metaCritic: '91',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/forza-motorsport-4'
                    },
                    {
                        title: 'DANCE CENTRAL 2',
                        metaCritic: '86',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/dance-central-2'
                    },
                    {
                        title: 'HALO: COMBAT EVOLVED ANNIVERSARY',
                        metaCritic: '82',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/halo-combat-evolved-anniversary'
                    },
                    {
                        title: 'GEARS OF WAR 3',
                        metaCritic: '91',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/gears-of-war-3'
                    },
                    {
                        title: 'KINECT: DISNEYLAND ADVENTURES',
                        metaCritic: '73',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/kinect-disneyland-adventures'
                    },
                    {
                        title: 'DRAGON BALL Z FOR KINECT',
                        metaCritic: '49',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/dragon-ball-z-for-kinect'
                    },
                    {
                        title: 'DANCE CENTRAL 3',
                        metaCritic: '86',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/dance-central-3'
                    },
                    {
                        title: 'Halo 4',
                        metaCritic: '87',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/halo-4'
                    },
                    {
                        title: 'KINECT RUSH: A DISNEY- PIXAR ADVENTURE',
                        metaCritic: '68',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/kinect-rush-a-disney-pixar-adventure'
                    },
                    {
                        title: 'KINECT STAR WAR',
                        metaCritic: '55',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/kinect-star-wars'
                    },
                    {
                        title: 'FORZA HORIZON',
                        metaCritic: '85',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/forza-horizon'
                    },
                    {
                        title: 'FABLE: THE JOURNEY',
                        metaCritic: '61',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/fable-the-journey'
                    },
                    {
                        title: 'STEEL BATTALION: HEAVY ARMOR',
                        metaCritic: '38',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/steel-battalion-heavy-armor'
                    },
                    {
                        title: 'GEARS OF WAR: JUDGMENT',
                        metaCritic: '79',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/gears-of-war-judgment'
                    },
                    {
                        title: 'FABLE ANNIVERSARY',
                        metaCritic: '68',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/xbox-360/fable-anniversary'
                    },
                ],
            },
            {
                society: 'Sony',
                console: 'Playstation 3',
                backgroundColor: '#2E6DB4',
                games: [
                    {
                        title: 'UNTOLD LEGENDS: DARK KINGDOM',
                        metaCritic: '58',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/untold-legends-dark-kingdom'
                    },
                    {
                        title: 'GENJI: DAYS OF THE BLAD',
                        metaCritic: '55',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/genji-days-of-the-blade'
                    },
                    {
                        title: 'RIDGE RACER 7',
                        metaCritic: '78',
                        year: '2006',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/ridge-racer-7'
                    },
                    {
                        title: 'FORMULA ONE CHAMPIONSHIP EDITION',
                        metaCritic: '74',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/formula-one-championship-edition'
                    },
                    {
                        title: 'WARHAWK',
                        metaCritic: '84',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/warhawk'
                    },
                    {
                        title: 'MOTORSTORM',
                        metaCritic: '84',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/motorstorm'
                    },
                    {
                        title: 'THE EYE OF JUDGMENT',
                        metaCritic: '75',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/the-eye-of-judgment'
                    },
                    {
                        title: 'NINJA GAIDEN SIGMA',
                        metaCritic: '88',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/ninja-gaiden-sigma'
                    },
                    {
                        title: 'LAIR',
                        metaCritic: '53',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/lair'
                    },
                    {
                        title: 'HEAVENLY SWORD',
                        metaCritic: '79',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/heavenly-sword'
                    },
                    {
                        title: 'FOLKLORE',
                        metaCritic: '75',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/folklore'
                    },
                    {
                        title: `UNCHARTED: DRAKE'S FORTUNE`,
                        metaCritic: '88',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/uncharted-drakes-fortune'
                    },
                    {
                        title: 'METAL GEAR SOLID 4: GUNS OF THE PATRIOT',
                        metaCritic: '94',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/metal-gear-solid-4-guns-of-the-patriots'
                    },
                    {
                        title: 'RESISTANCE 2',
                        metaCritic: '87',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/resistance-2'
                    },
                    {
                        title: 'MOTORSTORM: PACIFIC RIF',
                        metaCritic: '82',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/motorstorm-pacific-rift'
                    },
                    {
                        title: 'BUZZ! QUIZ TV',
                        metaCritic: '80',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/buzz!-quiz-tv'
                    },
                    {
                        title: 'DISGAEA 3: ABSENCE OF JUSTICE',
                        metaCritic: '78',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/disgaea-3-absence-of-justice'
                    },
                    {
                        title: 'LITTLEBIGPLANET',
                        metaCritic: '95',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/littlebigplanet'
                    },
                    {
                        title: 'GRAN TURISMO 5 PROLOGUE',
                        metaCritic: '80',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/gran-turismo-5-prologue'
                    },
                    {
                        title: 'HAZE',
                        metaCritic: '55',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/haze'
                    },
                    {
                        title: 'AFRIKA',
                        metaCritic: '63',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/afrika'
                    },
                    {
                        title: 'NINJA GAIDEN SIGMA 2',
                        metaCritic: '88',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/ninja-gaiden-sigma-2'
                    },
                    {
                        title: 'RATCHET & CLANK FUTURE: QUEST FOR BOOTY',
                        metaCritic: '76',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/ratchet-clank-future-quest-for-booty'
                    },
                    {
                        title: 'TIME CRISIS 4',
                        metaCritic: '60',
                        year: '2007',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/time-crisis-4'
                    },
                    {
                        title: 'SINGSTAR',
                        metaCritic: '82',
                        year: '2008',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/singstar-2008'
                    },
                    {
                        title: 'EYEPET',
                        metaCritic: '70',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/eyepet'
                    },
                    {
                        title: 'INFAMOUS',
                        metaCritic: '85',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/infamous'
                    },
                    {
                        title: `DEMON'S SOULS`,
                        metaCritic: '89',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/demons-souls'
                    },
                    {
                        title: `KILLZONE 2`,
                        metaCritic: '91',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/killzone-2'
                    },
                    {
                        title: `RATCHET & CLANK FUTURE: A CRACK IN TIME`,
                        metaCritic: '87',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/ratchet-clank-future-a-crack-in-time'
                    },
                    {
                        title: `GOD OF WAR COLLECTION`,
                        metaCritic: '91',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/god-of-war-collection'
                    },
                    {
                        title: `UNCHARTED 2: AMONG THIEVES`,
                        metaCritic: '96',
                        year: '2009',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/uncharted-2-among-thieves'
                    },
                    {
                        title: '3D DOT GAME HEROES',
                        metaCritic: '77',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/3d-dot-game-heroes'
                    },
                    {
                        title: 'TIME CRISIS: RAZING STORM',
                        metaCritic: '58',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/time-crisis-razing-storm'
                    },
                    {
                        title: 'GOD OF WAR III',
                        metaCritic: '92',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/god-of-war-iii'
                    },
                    {
                        title: 'LAST REBELLION',
                        metaCritic: '44',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/last-rebellion'
                    },
                    {
                        title: 'GRAN TURISMO 5',
                        metaCritic: '84',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/gran-turismo-5'
                    },
                    {
                        title: 'KUNG FU RIDER',
                        metaCritic: '36',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/kung-fu-rider'
                    },
                    {
                        title: 'SPORTS CHAMPIONS',
                        metaCritic: '76',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/sports-champions'
                    },
                    {
                        title: 'HEAVY RAIN',
                        metaCritic: '87',
                        year: '2010',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/heavy-rain'
                    },
                    {
                        title: 'AR TONELICO QOGA: KNELL OF AR CIEL',
                        metaCritic: '61',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/ar-tonelico-qoga-knell-of-ar-ciel'
                    },
                    {
                        title: `UNCHARTED 3: DRAKE'S DECEPTION`,
                        metaCritic: '92',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/uncharted-3-drakes-deception'
                    },
                    {
                        title: 'RESISTANCE 3',
                        metaCritic: '83',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/resistance-3'
                    },
                    {
                        title: 'SOCOM 4: U.S.NAVY SEALS',
                        metaCritic: '67',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/socom-4-us-navy-seals'
                    },
                    {
                        title: 'MOTORSTORM: APOCALYPSE',
                        metaCritic: '77',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/motorstorm-apocalypse'
                    },
                    {
                        title: 'INFAMOUS 2',
                        metaCritic: '83',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/infamous-2'
                    },
                    {
                        title: 'DISGAEA 4: A PROMISE UNFORGOTTEN',
                        metaCritic: '80',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/disgaea-4-a-promise-unforgotten'
                    },
                    {
                        title: `KILLZONE 3`,
                        metaCritic: '83',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/killzone-3'
                    },
                    {
                        title: `RATCHET & CLANK: ALL 4 ONE`,
                        metaCritic: '70',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/ratchet-clank-all-4-one'
                    },
                    {
                        title: 'THE ICO & SHADOW OF THE COLOSSUS COLLECTION',
                        metaCritic: '92',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/the-ico-shadow-of-the-colossus-collection'
                    },
                    {
                        title: 'EYEPET & FRIENDS',
                        metaCritic: '65',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/eyepet-friends'
                    },
                    {
                        title: 'LITTLEBIGPLANET 2',
                        metaCritic: '91',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/littlebigplanet-2'
                    },
                    {
                        title: 'PLAYSTATION MOVE APE ESCAPE',
                        metaCritic: '43',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/playstation-move-ape-escape'
                    },
                    {
                        title: 'PLAYSTATION MOVE HEROES',
                        metaCritic: '53',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/playstation-move-heroes'
                    },
                    {
                        title: 'BLEACH: SOUL RESURRECCION',
                        metaCritic: '58',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/bleach-soul-resurreccion'
                    },
                    {
                        title: 'TEKKEN HYBRID',
                        metaCritic: '65',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/tekken-hybrid'
                    },
                    {
                        title: 'HYPERDIMENSION NEPTUNIA',
                        metaCritic: '45',
                        year: '2011',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/hyperdimension-neptunia'
                    },
                    {
                        title: 'HYPERDIMENSION NEPTUNIA MK',
                        metaCritic: '53',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/hyperdimension-neptunia-mk2'
                    },
                    {
                        title: 'SPORTS CHAMPIONS 2',
                        metaCritic: '60',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/sports-champions-2'
                    },
                    {
                        title: 'STARHAWK',
                        metaCritic: '77',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/starhawk'
                    },
                    {
                        title: 'TALES OF GRACES ',
                        metaCritic: '77',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/tales-of-graces-f'
                    },
                    {
                        title: 'SORCERY',
                        metaCritic: '70',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/sorcery'
                    },
                    {
                        title: 'LEGASISTA',
                        metaCritic: '68',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/legasista'
                    },
                    {
                        title: 'MUGEN SOULS',
                        metaCritic: '55',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/mugen-souls'
                    },
                    {
                        title: 'JAK AND DAXTER COLLECTION',
                        metaCritic: '81',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/jak-and-daxter-collection'
                    },
                    {
                        title: 'SAINT SEIYA: SANCTUARY BATTLE',
                        metaCritic: '62',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/saint-seiya-sanctuary-battle'
                    },
                    {
                        title: 'OKAMI HD',
                        metaCritic: '90',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/okami-hd'
                    },
                    {
                        title: 'LITTLEBIGPLANET KARTING',
                        metaCritic: '73',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/littlebigplanet-karting'
                    },
                    {
                        title: 'TOKYO JUNGLE',
                        metaCritic: '74',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/tokyo-jungle'
                    },
                    {
                        title: 'TWISTED METAL',
                        metaCritic: '76',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/twisted-metal'
                    },
                    {
                        title: 'BEYOND: TWO SOULS',
                        metaCritic: '70',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/beyond-two-souls'
                    },
                    {
                        title: 'TALES OF XILLIA',
                        metaCritic: '78',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/tales-of-xillia'
                    },
                    {
                        title: 'TIME AND ETERNITY',
                        metaCritic: '42',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/time-and-eternity'
                    },
                    {
                        title: 'THE LAST OF US',
                        metaCritic: '95',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/the-last-of-us'
                    },
                    {
                        title: 'DISGAEA D2: A BRIGHTER DARKNESS',
                        metaCritic: '74',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/disgaea-d2-a-brighter-darkness'
                    },
                    {
                        title: 'DYNASTY WARRIORS 7: XTREME LEGENDS ',
                        metaCritic: '64',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/dynasty-warriors-7-xtreme-legends'
                    },
                    {
                        title: 'RATCHET & CLANK: INTO THE NEXUS ',
                        metaCritic: '76',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/ratchet-clank-into-the-nexus'
                    },
                    {
                        title: 'GOD OF WAR: ASCENSION',
                        metaCritic: '80',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/god-of-war-ascension'
                    },
                    {
                        title: 'HYPERDIMENSION NEPTUNIA VICTORY',
                        metaCritic: '55',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/hyperdimension-neptunia-victory'
                    },
                    {
                        title: 'TALES OF XILLIA 2',
                        metaCritic: '84',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/tales-of-xillia-2'
                    },
                    {
                        title: 'PERSONA 4 ARENA ULTIMAX ',
                        metaCritic: '84',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/playstation-3/persona-4-arena-ultimax'
                    },
                ]
            },
            {
                society: 'Nintendo',
                console: 'Wii U',
                backgroundColor: '#E70009',
                games: [
                    {
                        title: 'NANO ASSAULT NEO',
                        metaCritic: '71',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/nano-assault-neo'
                    },
                    {
                        title: 'TANK! TANK! TANK!',
                        metaCritic: '45',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/tank!-tank!-tank!'
                    },
                    {
                        title: 'NEW SUPER MARIO BROS.U',
                        metaCritic: '84',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/new-super-mario-bros-u'
                    },
                    {
                        title: 'YOUR SHAPE: FITNESS EVOLVED 2013',
                        metaCritic: '76',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/new-super-mario-bros-u'
                    },
                    {
                        title: 'NINTENDO LAND',
                        metaCritic: '77',
                        year: '2012',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/nintendo-land'
                    },
                    {
                        title: 'WII SPORTS CLUB',
                        metaCritic: '68',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/wii-sports-club'
                    },
                    {
                        title: 'LEGO CITY UNDERCOVER',
                        metaCritic: '80',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/lego-city-undercover'
                    },
                    {
                        title: 'NEW SUPER LUIGI U',
                        metaCritic: '77',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/new-super-luigi-u'
                    },
                    {
                        title: 'POKEMON RUMBLE U',
                        metaCritic: '49',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/pokemon-rumble-u'
                    },
                    {
                        title: 'DR.LUIGI',
                        metaCritic: '65',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/dr-luigi'
                    },
                    {
                        title: 'GAME & WARIO ',
                        metaCritic: '61',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/game-wario'
                    },
                    {
                        title: 'WII PARTY U',
                        metaCritic: '65',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/wii-party-u'
                    },
                    {
                        title: 'THE LEGEND OF ZELDA: THE WIND WAKER HD ',
                        metaCritic: '90',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/the-legend-of-zelda-the-wind-waker-hd'
                    },
                    {
                        title: 'WII FIT U',
                        metaCritic: '72',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/wii-fit-u'
                    },
                    {
                        title: 'PIKMIN 3',
                        metaCritic: '87',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/pikmin-3'
                    },
                    {
                        title: 'SUPER MARIO 3D WORLD',
                        metaCritic: '93',
                        year: '2013',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/super-mario-3d-world'
                    },
                    {
                        title: 'BAYONETTA 2',
                        metaCritic: '91',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/bayonetta-2'
                    },
                    {
                        title: 'DONKEY KONG COUNTRY: TROPICAL FREEZE',
                        metaCritic: '83',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/donkey-kong-country-tropical-freeze'
                    },
                    {
                        title: 'MARIO KART 8',
                        metaCritic: '88',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/mario-kart-8'
                    },
                    {
                        title: 'HYRULE WARRIORS',
                        metaCritic: '76',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/hyrule-warriors'
                    },
                    {
                        title: 'CAPTAIN TOAD: TREASURE TRACKER',
                        metaCritic: '81',
                        year: '2014',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/captain-toad-treasure-tracker'
                    },
                    {
                        title: 'XENOBLADE CHRONICLES X',
                        metaCritic: '84',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/xenoblade-chronicles-x'
                    },
                    {
                        title: `DEVIL'S THIRD`,
                        metaCritic: '43',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/devils-third'
                    },
                    {
                        title: `YOSHI'S WOOLLY WORLD`,
                        metaCritic: '78',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/yoshis-woolly-world'
                    },
                    {
                        title: `SUPER MARIO MAKER`,
                        metaCritic: '88',
                        year: '2015',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/super-mario-maker'
                    },
                    {
                        title: 'STAR FOX ZERO',
                        metaCritic: '69',
                        year: '2016',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/star-fox-zero'
                    },
                    {
                        title: 'THE LEGEND OF ZELDA: BREATH OF THE WILD ',
                        metaCritic: '96',
                        year: '2017',
                        urlMetaCritic: 'https://www.metacritic.com/game/wii-u/the-legend-of-zelda-breath-of-the-wild'
                    },
                ]
            }


        ]
    },
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
                        title: 'SUPER SMASH BROS.ULTIMATE - Switch',
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