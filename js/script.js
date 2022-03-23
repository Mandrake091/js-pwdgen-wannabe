/*
-(Password Generator)
A[Chiedo all'utente il nome]-->
B[Chiedo all'utente il cognome]-->
D[Chiedo all'utente il colore preferito]-->
E[Chiedo all'utente la data di nascita]-->
C[Lo saluto]-->
F[Ottengo la sua password dalla somma dei dati che inserisce]
*/

const userName = prompt('Nome?');
console.log(userName);

const userSurname = prompt('Cognome?');
console.log(userSurname);

const favoriteColor = prompt('Colore preferito?');
console.log(favoriteColor);

const dateOfBirth = prompt('Data di nascita?');
console.log(dateOfBirth);

document.getElementById('userName').innerHTML += ' ' + userName + ' ' + userSurname + '!';

document.getElementById('password').innerHTML += ' ' + userName + userSurname + favoriteColor + dateOfBirth;

