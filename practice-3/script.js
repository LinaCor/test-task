const tableContainer = document.querySelector('.table-container');
const tableBody = document.querySelector('tbody');
const headRow = document.querySelector('thead');
const inputSearch = document.querySelector('.table-container__search');
let posts = [];
let filterPosts = [];

//функция для отрисовки строки таблицы
const drawRowTable = ({ userId, id, title, body }) => {
  return `
          <tr>
            <td class="center">${userId}</td>
            <td class="center">${id}</td>
            <td>${title}</td>
            <td>${body}</td>
          </tr>
  `
};

//функции для сортировки таблицы
function sortDecreasing() {
  let sort;
  filterPosts.length === 0 ? sort = posts.sort((a, b) => b.id - a.id) : sort = filterPosts.sort((a, b) => b.id - a.id);
  return sort;
}

function sortIncreasing() {
  let sort;
  filterPosts.length === 0 ? sort = posts.sort((a, b) => a.id - b.id) : sort = filterPosts.sort((a, b) => a.id - b.id);
  return sort;
}


//получение и парсинг api
window.addEventListener('load', async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.ok) {
      const data = await response.json();
      posts = data.map(el => {
        return el;
      })

      let deawPost = posts.map(el => drawRowTable(el)).join('');
      tableBody.innerHTML = deawPost;

    } else {
      throw new Error(`Данные не загрузились, ошибка: ${response.status}`);
    }
  } catch (err) {
    console.log(err);
    tableContainer.innerHTML = err;
  }
});


//сортировка таблицы по клику на столбец
headRow.addEventListener('click', (evt) => {
  const headColumns = Array.from(headRow.querySelectorAll('th'));
  const isClassHead = headColumns.some(el => {
    return el.classList.contains('checked')
  });

  if (!isClassHead) {
    evt.target.classList.add('checked');
    tableBody.innerHTML = sortDecreasing().map(el => drawRowTable(el)).join('');
  }

  if (isClassHead && evt.target.classList.contains('checked')) {
    evt.target.classList.remove('checked');
    tableBody.innerHTML = sortIncreasing().map(el => drawRowTable(el)).join('');
  }
});


//фильтрация по поиску
inputSearch.addEventListener('input', () => {
  let value = inputSearch.value;

  if (value.length >= 3) {
    filterPosts = posts.filter(el => {
      return el.title.includes(value) || el.body.includes(value);
    });
    tableBody.innerHTML = filterPosts.map(el => drawRowTable(el)).join('');
  }
  if (value.length === 0) {
    tableBody.innerHTML = posts.map(el => drawRowTable(el)).join('');
  }
});



