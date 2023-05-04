import { dataSet } from "../data/dataSet";

export const dataGraph = (generationFilter: string, chartType: string) => {
    //On filtre sur la génération
    const gamesFilter = dataSet.filter(data => data.generation.number === generationFilter)
    const labels = [...gamesFilter[0].generation.years];

    //On tourne par année
    //On tourne par société 
    const dataSets = []
    for (let manufacturer of gamesFilter[0].manufacturer) {
        const dataListNumberGamesYear = []
        let label = manufacturer.console
        let backgroundColor = manufacturer.backgroundColor
        //On tourne par année pour calculer le nombre de jeux
        for (let year of gamesFilter[0].generation.years) {
            let numberGamesList = manufacturer.games.filter(gamesYear => gamesYear.year === year)
            let numberGames = numberGamesList.length
            dataListNumberGamesYear.push(numberGames)
        }
        switch (chartType) {
            case 'line':
                let dataLine = {
                    label,
                    data: [...dataListNumberGamesYear],
                    backgroundColor,
                    borderColor: backgroundColor
                }
                dataSets.push(dataLine)
                break
            case 'vertical':
                let dataVertical = {
                    label,
                    data: [...dataListNumberGamesYear],
                    backgroundColor,
                }
                dataSets.push(dataVertical)
                break
        }


    }

    const data = {
        labels,
        datasets: [
            ...dataSets
        ],
    };

    return data


}