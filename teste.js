const fs = require('fs');

const dadosAtuais = JSON.parse(fs.readFileSync('livros.json'));
const novoDado = { id: '3', nome: 'Livro não tão legal' }

fs.writeFileSync('livros.json', JSON.stringify([...dadosAtuais, novoDado]));

console.log(dadosAtuais);