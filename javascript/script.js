let userName = prompt('Qual\'è il tuo nome? ');
let userLastName = prompt('Il tuo Cognome:');
let userColor = prompt('Il tuo colore preferito?');
let userPsw = userName + userLastName + userColor + '22';

document.getElementById('name').innerHTML = userName
document.getElementById('lastname').innerHTML = userLastName
document.getElementById('color').innerHTML = userColor

// let userResult = console.log(`${userName} ${userLastName} ${userColor}22`);

document.getElementById('password').innerHTML = userPsw


