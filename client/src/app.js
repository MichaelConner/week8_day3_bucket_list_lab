const Aspirations = require('./models/aspirations.js')

document.addEventListener('DOMContentLoaded', () => {





  const url = 'http://localhost:3000/api/listitems';
  const aspirations = new Aspiration(url);
  aspirations.bindEvents();
  aspirations.getData();
});
