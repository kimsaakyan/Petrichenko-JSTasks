let numberOfFilms;

function start() {
	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	while (numberOfFilms == '' || numberOfFilms == 0 || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	}
}

start();

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false,
};



function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		let lastWatched = prompt('Один из последних просмотренных фильмов?', '');
		let yourReview = prompt('На сколько оцените его?', '');


		if (lastWatched !== null && lastWatched !== '' && lastWatched.length < 50 && yourReview !== '' && yourReview !== null) {
			personalMovieDB.movies[lastWatched] = yourReview;
		} else {
			i--;
		}
	}
}

rememberMyFilms();



function detectPersonalLevel() {
	if (personalMovieDB.count < 10) {
		alert('Просмотрено довольно мало фильмов.');
	} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
		alert('Вы классический зритель.');
	} else if (personalMovieDB.count >= 30) {
		alert('Вы киноман.')
	} else {
		alert('Произошла ошибка.');
	}
}

detectPersonalLevel();

function showMyDB({ privat }) {
	if (!privat) {
		console.log(personalMovieDB);
	}
}

showMyDB(personalMovieDB);


function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {
		let yourFavouriteGenres = prompt(`Ваш любимый жанр под номером ${i}?`, '');
		personalMovieDB.genres.push(yourFavouriteGenres);
	}
}

writeYourGenres();

console.log(personalMovieDB)