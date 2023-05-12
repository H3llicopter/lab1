// імпорт необхідних модулів
const express = require('express');
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors()); // дозвіл на здійснення запитів

// створення підключення
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'users',
  password: '1234509876',
});

// обробка запиту GET на сторінці /users
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM userstable', (err, results, fields) => {
    if (err) throw err;
    res.status(200).type('json').send(JSON.stringify(results, null, 4));
  });
});

// обробка запиту POST на сторінці /users
app.post('/users', (req, res) => {
  connection.query('INSERT INTO userstable SET ?', req.body, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Помилка сервера');
    } else {
      console.log(result);
      const id = result.insertId; // отримання ID доданого елемента
      res.status(200).json({ id: id }); // повернення відповіді з ID
    }
  });
});

// обробка запиту DELETE на сторінці /users
app.delete('/users', (req, res) => {
  connection.query('DELETE FROM userstable WHERE id = ?', req.body.id, (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send('Помилка сервера');
    } else if (result.affectedRows === 0) {
      res.status(404).send('Дані не знайдено');
    } else {
      res.status(200).send('Дані видалено');
    }
  });
});

// обробка запиту GET на сторінці /pfps/p_X.jpg, де Х - номер зображення
app.get(/^\/pfps\/p_\d+\.jpg$/, (req, res) => {
  const pfpPath = path.join(__dirname, path.basename(req.url));
  fs.access(pfpPath, fs.constants.F_OK, (err) => {
    if (err) {
      // якщо файл не знайдено, відправляється зображення за замовчуванням
      fs.readFile(path.join(__dirname, '/p_default.jpg'), (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(data);
      });
    } else {
      // якщо файл знайдено, відправляється зображення
      fs.readFile(pfpPath, (err, data) => {
        if (err) throw err;
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        res.end(data);
      });
    }
  });
});

// запуск сервера із параметрами хоста і порта
const host = 'localhost';
const port = 8000;
app.listen(port, host, () => {
  console.log(`Сервер запущений за адресою http://${host}:${port}`);
});