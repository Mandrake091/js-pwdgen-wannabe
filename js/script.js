const userName = prompt('Nome?');
console.log(userName);

const userSurname = prompt('Cognome?');
console.log(userSurname);

const favoriteColor = prompt('Colore preferito?');
console.log(favoriteColor);

const dateOfBirth = prompt('Data di nascita?');
console.log(dateOfBirth);


document.getElementById('password').innerHTML += ' ' + userName + userSurname + favoriteColor + dateOfBirth;

document.getElementById('userName').innerHTML += ' ' + userName + ' ' + userSurname + '!';