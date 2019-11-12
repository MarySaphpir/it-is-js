'use strict'

const defaultPlaylist = {};

let SomePlaylist = ['Гарри Поттер' , 'Мгла', 'Маска', 'Клиника', 'Мастители', 'Тор'];

class Film {
    constructor(name, premiere, description, genre, owner) {
        this.name = name;
        this.premiere = premiere;
        this.description = description;
        this.genre = genre;
        this.owner = owner;
    }

    get filmTitle() {
        return `${this.name} (${this.premiere})`;
    }

    set filmTitle(value) {
        [this.name, this.premiere] = value.split(' ');
    }

    get filmOwner() {
        return `Фильм был загруден пользователем ${this.owner}`;
    }

    set filmOwner(owner) {
        this.owner = owner;
    }

    pause() {
        console.log(`Фильм поставлен на паузу!`)
    }

    play() {
        console.log(`Подолжено воспроизведение фильма!`)
    }
}

class Users {
    searchFilm(filmName) {
        console.log(`Пользователь осуществляет поиск фильма: ${filmName}`);
    }
}

class AuthorizedUsers extends Users {
    constructor(login, name, surname, age, playlist) {
        super();
        this.login = login;
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.userPlaylist = playlist;
    }

    get fullName() {
        return `${this.name} ${this.surname}`
    }

    set fullName(value) {
        [this.name, this.surname] = value.split(' ');
    }

    sayHello() {
        console.log(`Hi, ${this.fullName}! You look beautiful today!`)
    }

    createComplaint(subject, message, author, status) {
        this.complaint = new Сomplaint(subject, message, author, status);
    }
}

class AdminUser extends AuthorizedUsers {
    deleteFilm(name) {
        console.log(`Уделен фильм c названием: "${name}"`)
    }

    deleteUser(login) {
        console.log(`Уделен пользователь c логином: "${login}"`)
    }
}

class Comments {
    constructor(commentMessage, commentAuthor) {
        this.commentMessage = commentMessage;
        this.commentAuthor = commentAuthor;
        this.creationDate = `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    }

    get commentAuthorInfo() {
        return `Author of this comment: ${this.commentAuthor.fullName}`;
    }

    get creationDateInfo() {
        return `Date of comment creation: ${this.creationDate}`;
    }
}

class Сomplaint {
    constructor(subject, message, author, status = 'not reviewed') {
        this.subject = subject;
        this.message = message;
        this.author = author;
        this.status = status;
    }

    get showStatus() {
        return this.status;
    }

    set changeSatatus(newStatus) {
        this.status = newStatus;
    }
}

class Playlist {
    constructor() {
        this.playlistFilms = [];
    }

    get showPlaylistFilms() {
        return this.playlistFilms.forEach(element => console.log(element));
    }

    addFilmToPlaylist(film) {
        this.playlistFilms.push(film);
    }
}

let film = new Film('Ghost', 2015, 'Еще вчера Юрий Гордеев - амбициозный авиаконструктор и любимец женщин - был в шаге от своего триумфа. Его самолет ЮГ-1 должен был стать настоящим прорывом в отечественной авиации. Но сегодня его никто не видит и не слышит, и конкурент по бизнесу беспрепятственно закрывает его компанию. Все потому, что Юра разбился в автокатастрофе и стал призраком.', 'fantasy', 'Admin');
console.log(film);

let user = new Users();
console.log(user);

let firstPlayList = new Playlist(SomePlaylist);
console.log(firstPlayList);

let userLolka = new AdminUser('lolka', 'Lolita', 'Ivnova', 18, firstPlayList);
console.log(userLolka);

let comment = new Comments('My first comment for film', userLolka );
console.log(comment);
