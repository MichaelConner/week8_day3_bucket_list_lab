const Aspirations = require('./models/aspirations.js')
const AspirationsListView = require('./views/aspirations_list_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');


  const aspirationsContainer = document.querySelector('div#bucket-list');

  const aspirationsListView = new AspirationsListView(aspirationsContainer)
  aspirationsListView.bindEvents()

  const url = 'http://localhost:3000/api/listitems';
  const aspirations = new Aspirations(url);
  // aspirations.bindEvents();
  aspirations.getData();
});
