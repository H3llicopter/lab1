// функція, яка запускає скрипт ТІЛЬКИ після завантаження DOM
document.addEventListener('DOMContentLoaded', function() {
  // об'єкт, який містить дані про користувача
  let userInfo = {
  fullName: '',
  firstName: '',
  secondName: '',
  email: '',
  address: '',
  phone: '',
  website: '',
  company: ''
};

// рекурсивна функція, яка отримує всі дані із вкладених об'єктів (для address та company)
function getValues(object) {
  let values = [];
  for (let key in object) {
    if (typeof object[key] === "object") {
      values = values.concat(getValues(object[key]));
    } else {
      values.push(object[key]);
    }
  }
  return values.join(', ');
}

// функція, яка здійснює AJAX-запит до сайту JSONPlaceholder у асинхронному режимі й отримує дані 
async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await response.json();
  // цикл, який створює елементи на сторінці та наповнює їх значеннями 
  for (let i = 0; i < 10; i++) { // кількість ітерацій дорівнює кількості користувачів

    // заповнення об'єкту userInfo даними, які були отримані із запиту
    userInfo.fullName = data[i]['name'];
    let lastSpace = userInfo.fullName.lastIndexOf(' ');
    userInfo.firstName = userInfo.fullName.substring(0, lastSpace);
    userInfo.secondName = userInfo.fullName.substring(lastSpace + 1);
    userInfo.email = data[i]['email'];
    userInfo.address = getValues(data[i]['address']);
    userInfo.phone = data[i]['phone'];
    userInfo.website = data[i]['website'];
    userInfo.company = getValues(data[i]['company']);

    // створення шаблону коду для кожного елементу, який міститиме дані про кожного користувача
    let html = `<div class='user'>
                  <div class='photo_and_name'>
                    <div class='photo'>
                      <img src='p${i}.jpg'>
                    </div>
                    <div class='name'>
                      <p>${userInfo.firstName}<br>${userInfo.secondName}</p>
                    </div>
                  </div>
                  <div class='info'>
                    <p>
                      <u>E-mail</u> - <a href="mailto:${userInfo.email}">${userInfo.email}</a><br>
                      <u>Адреса</u> - ${userInfo.address}<br>
                      <u>Телефон</u> - ${userInfo.phone}<br>
                      <u>Веб-сайт</u> - <a href="https://www.${userInfo.website}">${userInfo.website}</a><br>
                      <u>Компанія</u> - ${userInfo.company}<br>
                    </p>
                  </div>
                </div>`;

    // елемент додається до блоку <div> в кінець списку елементів
    document.getElementById('first_div').insertAdjacentHTML('beforeend', html);
  }
}
getData();
})