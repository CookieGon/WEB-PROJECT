const API_URL = 'https://api.themoviedb.org/3/discover/movie?api_key=a6bc7eb8f3df1538ddc3c9d764f1faac&language=ko&sort_by=popularity.desc&include_adult=false&include_video=false&page=1';
const IMG_PATH = 'https://image.tmdb.org/t/p/w1280';
const SEARCH_API = 'https://api.themoviedb.org/3/search/movie?api_key=a6bc7eb8f3df1538ddc3c9d764f1faac&language=ko&query="'

const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');

getMovies(API_URL);

async function getMovies(url){
    const res = await fetch(url);
    const data = await res.json();

    영화보여주기(data.results);
}

//검색이벤트
form.addEventListener('submit',(e) => {
    e.preventDefault(); // submit 이벤트의 default는 서버로 입력 데이터를 보냄 >> preventDefault로 방지

    const searchTerm = search.value;
    // console.log(searchTerm)
    if(searchTerm && searchTerm !== ''){
        getMovies(SEARCH_API + searchTerm);
        search.value = '';
    } else {
        window.location.reload();
    }
});

function 영화보여주기(movies){
    main.innerHTML = '';    // 처음에 비우기

    movies.forEach((movie) => {
        const title = movie.title;
        const poster_path = movie.poster_path;
        const vote_average = movie.vote_average;
        const overview = movie.overview;

        const movieEl = document.createElement('div');  // div 태그 생성
        movieEl.classList.add('movie');

        movieEl.innerHTML = `
        <img src="${IMG_PATH+poster_path}" alt="${title}">
        <div class="movie-info">
            <h3>${title}</h3>
            <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        <div class="overview">
            <h3>상세 보기</h3>
            ${overview}
        </div>
        `;
        main.appendChild(movieEl);
    });
}

function getClassByRate(vote){
    if(vote >= 8){
        return 'green';
    } else if (vote >= 6) {
        return 'orange';
    } else {
        return 'red';
    }
}