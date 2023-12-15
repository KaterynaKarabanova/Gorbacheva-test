import Pagination from 'paginationjs';
import { data as clientsData } from './data.js';

const table = document.querySelector('.table-body');
const tableMobile = document.querySelector('.table-mobile');
const tableText = document.querySelector('.pagination-text');
const input = document.querySelector('.table-search-input');

let newData = clientsData;

input.addEventListener('input', () => {
  newData = clientsData.filter(el =>
    el.customerName.toLowerCase().includes(input.value.toLowerCase())
  );
  paginationOptions.dataSource = getDataSource();
  $('#pagination-container').pagination(paginationOptions);
});

const getDataSource = () => {
  const numbers = [];
  for (let i = 0; i < newData.length; i++) {
    numbers.push(i);
  }
  return numbers;
};

const paginationOptions = {
  dataSource: getDataSource(), // Your data source goes here
  pageSize: 8, // Number of elements per page
  callback: function (data, pagination) {
    const markup = [];
    const startIndex = (pagination.pageNumber - 1) * pagination.pageSize;
    const endIndex = startIndex + pagination.pageSize;
    const displayedData = newData.slice(startIndex, endIndex);

    table.innerHTML = '';

    if (window.innerWidth > 1439) {
      console.log(data);
      displayedData.map(
        (
          { customerName, company, phoneNumber, email, country, status },
          index
        ) => {
          markup.push(`
              <tr>
                <th>${customerName}</th>
                <th>${company}</th>
                <th>${phoneNumber}</th>
                <th>${email}</th>
                <th>${country}</th>
                ${
                  status === 'Active'
                    ? `<th class="table-status-active">${status}</th>`
                    : `<th class="table-status">${status}</th>`
                }
                
              </tr>
            `);

          table.innerHTML = markup.join('');
          tableText.textContent = `Showing data ${data[0] + 1} to ${
            data[7] + 1
          } of ${clientsData.length + 1} entries`;
        }
      );
    } else {
      displayedData.map(
        (
          { customerName, company, phoneNumber, email, country, status },
          index
        ) => {
          markup.push(`
              <div class='table-mobile-item'>
                <p><span class='table-mobile-item-text'>Customer Name: </span>${customerName}</p>
                <p><span class='table-mobile-item-text'>Company: </span>${company}</p>
                <p><span class='table-mobile-item-text'>Phone Number: </span>${phoneNumber}</p>
                <p><span class='table-mobile-item-text'>Email: </span>${email}</p>
                <p><span class='table-mobile-item-text'>Country: </span>${country}</p>
                ${
                  status === 'Active'
                    ? `<p class="table-status-active">${status}</p>`
                    : `<p class="table-status">${status}</p>`
                }
                
              </div>
            `);

          tableMobile.innerHTML = markup.join('');
          tableText.textContent = `Showing data ${data[0] + 1} to ${
            data[7] + 1
          } of ${newData.length} entries`;
        }
      );
    }
  },
};

// Initialize Pagination.js with your options
$('#pagination-container').pagination(paginationOptions);
