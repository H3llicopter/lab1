// функція, яка запускає скрипт ТІЛЬКИ після завантаження DOM
document.addEventListener('DOMContentLoaded', function() {

// функція, яка здійснює AJAX-запит до серверу у асинхронному режимі й отримує дані 
async function getData() {
  const response = await fetch('http://localhost:8000/users');
  const data = await response.json();
  
  for (let i = 0; i < data.length; i++) { // цикл, який створює елементи на сторінці та наповнює їх значеннями 
    // кількість ітерацій дорівнює кількості користувачів у базі даних

    // розділення імені на дві частини
    let lastSpace = data[i]['fullname'].lastIndexOf(' ');
    let firstName = data[i]['fullname'].substring(0, lastSpace);
    let secondName = data[i]['fullname'].substring(lastSpace + 1);

    // створення шаблону коду для кожного елементу, який міститиме дані про кожного користувача
    let html = `<div class='user' id=${data[i]['id']}>
                  <button class='delete_button' title='Видалити користувача'></button>
                  <div class='photo_and_name'>
                    <div class='photo'>
                      <img src='http://localhost:8000/pfps/p_${data[i]['id']}.jpg'>
                    </div>
                    <div class='name'>
                      <p>${firstName}<br>${secondName}</p>
                    </div>
                  </div>
                  <div class='info'>
                    <p>
                      <u>E-mail</u> - <a href="mailto:${data[i]['email']}">${data[i]['email']}</a><br>
                      <u>Адреса</u> - ${data[i]['address']}<br>
                      <u>Телефон</u> - ${data[i]['phone']}<br>
                      <u>Веб-сайт</u> - <a href="https://www.${data[i]['website']}">${data[i]['website']}</a><br>
                      <u>Компанія</u> - ${data[i]['company']}<br>
                    </p>
                  </div>
                </div>`;

    // елемент додається до блоку <div> в кінець списку елементів
    document.getElementById('first_div').insertAdjacentHTML('afterbegin', html);  
  }
  // додваання обробників подій для кнопок видалення
  for (let x = 0; x < document.querySelectorAll('.user:not([class*=" "])').length; x++)
  {
    document.getElementsByClassName('delete_button')[x].addEventListener('click', deleteUser);
  }
  // зміна розміру пустого елемента
  resizeBlock(document.querySelector('.empty'), document.querySelector('.user'));

  document.querySelector('.empty').addEventListener('click', createUser);
}

getData();

// функція зміни розміру блоку
function resizeBlock(block1, block2) {
  block1.style.height = block2.getBoundingClientRect().height + 'px';
}

// функція додавання блоку користувача
function createUser() {
  let html = `<div class='user'>
                  <button class='delete_button' title='Видалити користувача'></button>
                  <div class='photo_and_name'>
                    <div class='photo'>
                      <img src='http://localhost:8000/pfps/p_11.jpg'>
                    </div>
                    <div class='name'>
                      <p><input type='text'><br><input type='text'></p>
                    </div>
                  </div>
                  <div class='info'>
                    <p>
                      <u>E-mail</u> - <input type='text'><br>
                      <u>Адреса</u> - <input type='text'><br>
                      <u>Телефон</u> - <input type='text'><br>
                      <u>Веб-сайт</u> - <input type='text'><br>
                      <u>Компанія</u> - <input type='text'><br>
                    </p>
                  </div>
                  <button class='save_button' title='Зберегти зміни'>Зберегти</button>
                </div>`;

  document.getElementById('first_div').insertAdjacentHTML('afterbegin', html);

  // додавання обробників подій для кнопок
  document.getElementsByClassName('save_button')[0].addEventListener('click', saveInfo);
  document.getElementsByClassName('delete_button')[0].addEventListener('click', deleteUser);
}

// функція видалення користувача (запит GET)
function deleteUser() {
  parent = this.parentNode;
  if (parent.id != '') { // якщо дані ще не занесені в БД, видаляється лише блок, а якщо занесені - видаляється і запис
    let dataToDelete = { id: parent.id };
    fetch('http://localhost:8000/users', {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToDelete)
      })
  }
  parent.remove();
}

// функція занесення інформації до БД
function saveInfo() {
  let parent = this.parentNode;

  nameInputs = parent.querySelectorAll('.name input');
  infoInputs = parent.querySelectorAll('.info input');

  let userData = { // об'єкт, який надсилатиметься до БД
    fullname: nameInputs[0].value + ' ' + nameInputs[1].value,
    email: infoInputs[0].value,
    address: infoInputs[1].value,
    phone: infoInputs[2].value,
    website: infoInputs[3].value,
    company: infoInputs[4].value
  };

  // запит POST
  fetch('http://localhost:8000/users', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  })
  .then(response => response.json())
  .then(data => {
    parent.setAttribute('id', data.id);
  });

  // зміна текстових полів для вводу на текст
  nameInputs[0].outerHTML = nameInputs[0].value;
  nameInputs[1].outerHTML = nameInputs[1].value;

  infoInputs[0].outerHTML = `<a href="mailto:${infoInputs[0].value}">${infoInputs[0].value}</a>`;
  infoInputs[1].outerHTML = infoInputs[1].value;
  infoInputs[2].outerHTML = infoInputs[2].value;
  infoInputs[3].outerHTML = `<a href="https://www.${infoInputs[3].value}">${infoInputs[3].value}</a>`;
  infoInputs[4].outerHTML = infoInputs[4].value;

  parent.querySelector('.save_button').remove(); // видалення кнопки збереження
}

// Встановлення обробника події window.onresize при зміні розміру вікна
window.addEventListener('resize', function() {
  resizeBlock(document.querySelector('.empty'), document.querySelector('.user'));
})
})