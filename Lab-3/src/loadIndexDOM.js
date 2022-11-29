/// <reference path="lib/jquery-3.6.1.js" />

const $ = window.$;

const getData = async () => {
    const response = await fetch("./data.json").then(d => d.json())
    return response
}

const loadGameList = async () => {
    const gameData = await getData();

    $(document).ready(() => {
        const [prevBtn, nextBtn] = $('.btn').get();
        const scroller = $('.scroller').get(0);

        gameData
            .games
            .filter((game) => {
                return gameData.popular.includes(game.gameId)
            })
            .forEach((el) => {

            $('.scroller').append(`
            <div class="game-placeholder">
                <div class="game-header">
                    <img class="game-poster" src="${el.poster}" alt="Game poster image">
                    <div class="game-info">
                        <h1>${el.name}</h1>
                        <h3>Разработчик: ${el.developer}</h3>
                        <h3>Дата релиза: ${el.releaseDate}</h3>
                        <ul class="genre-list"></ul>
                        <h3>Рейтинг: ${'&#11088;'.repeat(el.rating)}</h3>
                    </div>
                </div>
                <div class="game-body">
                    <div>${el.description}</div>
                    <button><a href="${el.steamLink}">Просмотреть в Steam</a></button>
                </div>
            </div>
            `)
            
            el.genres.forEach((g) => {
                $('.genre-list').last().append(`
                <li>${g}</li>
                `)
            })
        })

        const scrollWidth = $('.scroller .game-placeholder').first().get(0).clientWidth;

        prevBtn.addEventListener('click', () => {
            scroller.scrollBy(-scrollWidth, 0)
            console.log('click');
        })
        
        nextBtn.addEventListener('click', () => {
            scroller.scrollBy(scrollWidth, 0)
            console.log('click');
        })
    })
}

loadGameList();
// const gameList = document.getElementById("dom-mount");



