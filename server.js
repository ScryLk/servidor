const express = require('express');
const app = express();
const PORT = 8080;
const mysql = require('mysql');

const conexao = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '00113150Ll',
    database: 'user'
});


// Rota padrão
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha aplicação Express!');
});

app.post('/register', (req, res) => {
  console.log(req.body)
} )

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor está rodando em http://localhost:${PORT}`);
});
