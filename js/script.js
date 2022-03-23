
const userName = prompt('Nome?');
console.log(userName);

const userSurname = prompt('Cognome?');
console.log(userSurname);

const favoriteColor = prompt('Colore preferito?');
console.log(favoriteColor);


document.getElementById('password').innerHTML += ' ' + userName + userSurname + favoriteColor + '21';
