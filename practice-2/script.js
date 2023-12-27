const tableContainer = document.querySelector('.table-container');
const tableBody = document.querySelector('tbody');

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


window.addEventListener('load', async function () {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (response.ok) {
      const data = await response.json();
      data.forEach(el => {
        tableBody.innerHTML += drawRowTable(el);
      });
    } else {
      throw new Error(`Данные не загрузились, ошибка: ${response.status}`);
    }
  } catch (err) {
    console.log(err);
    tableContainer.innerHTML = err;
  }
});

