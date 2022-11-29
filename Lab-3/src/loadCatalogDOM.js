/// <reference path="lib/jquery-3.6.1.js" />

const $ = window.$;

const getData = async () => {
    const response = await fetch("../data.json").then(d => d.json())
    return response
}

const loadGameList = async () => {
    const gameData = await getData();

    $(document).ready(() => {

        gameData
            .games
            .forEach((el) => {
            $('.main__body').append(`
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
        
        const searchBar = $('.search').get(0);

        searchBar.addEventListener("input", (e) => {
            let value = e.target.value;
            console.log(value);

            if (value && value.trim().length > 0){
                $(`.game-info h1`).parents(".game-placeholder").css({'display': 'flex'})
                $(`.game-info h1:not(:contains("${value}"))`).parents(".game-placeholder").css({'display': 'none'})
            } else {
                $(`.game-info h1`).parents(".game-placeholder").css({'display': 'flex'})
            }
        })
    })
}

loadGameList();