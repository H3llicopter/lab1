// завантаження необхідних модулів
const http = require('http');
const fs = require('fs');
const path = require('path');

// визначення змінних хоста і порта
const host = 'localhost';
const port = 8000;

// створення серверу
const server = http.createServer((req, res) => {
  // відкриття доступу
  res.setHeader('Access-Control-Allow-Origin', '*');
  // якщо відкривається сторінка /users
  if (req.url === '/users') {
    // то завантажуються дані користувачів у форматі JSON
    fs.readFile('./users.json', (err, data) => {
      if (err) throw err;
      const jsonUsers = JSON.parse(data);
      res.writeHead(200, {'Content-Type': 'application/json'});
      res.end(JSON.stringify(jsonUsers, null, 4));});
  // якщо відкривається сторінка /pfps/pX, де Х - цифра
  } else if (req.url.match(/^\/pfps\/p\d\.jpg$/)) {
    // то завантажується фото із відповідною назвою у формати JPEG
    const pfpPath = path.join(__dirname, path.basename(req.url));
    fs.readFile(pfpPath, (err, data) => {
    if (err) throw err;
    res.writeHead(200, {'Content-Type': 'image/jpeg'});
    res.end(data);})
  // якщо сторінка нікуди не веде
  } else {
    // то відображається сторінка, яка показує на наявність помилки
    res.writeHead(404, {'Content-Type': 'text/plain; charset=utf-8'});
    res.end('Помилка: сторінку не знайдено');
  }
})

// запуск серверу
server.listen(port, host, () => {
    console.log(`Сервер запущений за адресою http://${host}:${port}`);
});