'use strict';

// Объект
const personalMovieDB = {
    count: 0, // количество фильмов
    movies: {}, // вложенный объект
    actors: {}, // вложенный объект
    genres: [], // массив
    privat: false, // булиновое значение

    // Функция для получения информации о просмотренных фильмах
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    // Функция для получения информации о фильмах
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''), // убираем пробелы
                b = prompt('На сколько оцените его?', '');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b; // Добавляем фильм в объект movies
                console.log('done'); // вывод в консоль
            } else {
                console.log('error'); // вывод в консоль
                i--;
            }
        }
    },

    // Функция для получения информации о пользователе
    detectPersonalLevel: function () {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            console.log("Вы классический зритель"); // вывод в консоль
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман"); // вывод в консоль
        } else {
            console.log("Произошла ошибка"); // вывод в консоль
        }
    },
    // Метод для отображения данных о фильмах
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMovieDB); // вывод в консоль
        } else {
            console.log('Данные скрыты.');
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMovieDB.privat) {
            personalMovieDB = false
        } else {
            personalMovieDB.privat = true // Переключаем булево значение
        }
    },

    // Метод для задания любимых жанров
    writeYourGenres: function () {
        for (let i = 1; i <= 3; i++) {
            let genres = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genres === '' || genres === null) {
                console.log('Вы ввели некорректные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genres;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
};

// Пример вызова методов:
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.showMyDB();  // Данные отображаются, так как privat = false

// Переключим видимость данных с помощью toggleVisibleMyDB
/* personalMovieDB.toggleVisibleMyDB(); // После вызова privat станет true
personalMovieDB.showMyDB();  */  // Данные скрыты

