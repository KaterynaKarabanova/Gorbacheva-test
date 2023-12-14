import Pagination from 'paginationjs';
import { data as clientsData } from './data.js';

const table = document.querySelector('.table-body');

const getDataSource = () => {
  const numbers = [];
  for (let i = 0; i < clientsData.length; i++) {
    numbers.push(i);
  }
  return numbers;
};
const paginationOptions = {
  dataSource: getDataSource(), // Your data source goes here
  pageSize: 8, // Number of elements per page
  callback: function (data, pagination) {
    const markup = [];
    clientsData.map(
      (
        { customerName, company, phoneNumber, email, country, status },
        index
      ) => {
        if (data.includes(index)) {
          markup.push(`
          <tr>
            <th>${customerName}</th>
            <th>${company}</th>
            <th>${phoneNumber}</th>
            <th>${email}</th>
            <th>${country}</th>
            <th>${status}</th>
          </tr>
        `);
          table.innerHTML = markup.join('');
        }
      }
    );
  },
};

// Initialize Pagination.js with your options
$('#pagination-container').pagination(paginationOptions);
