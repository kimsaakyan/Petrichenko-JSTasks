
function start() {
	let numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

	// while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
	// 	numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
	// }

	return numberOfFilms
}

console.log(start());