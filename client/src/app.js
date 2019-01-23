const Aspirations = require('./models/aspirations.js')
const AspirationsListView = require('./views/aspirations_list_view.js')
const AspirationFormView = require('./views/aspiration_form_view.js')

document.addEventListener('DOMContentLoaded', () => {
  console.log('JS loaded');

  const aspirationForm = document.querySelector('form#aspiration-form');

  const aspirationFormView = new AspirationFormView(aspirationForm);
  console.log(aspirationFormView);
  aspirationFormView.bindEvents();


  const aspirationsContainer = document.querySelector('div#bucket-list');
  const aspirationsListView = new AspirationsListView(aspirationsContainer)
  aspirationsListView.bindEvents()

  const url = 'http://localhost:3000/api/listitems';
  const aspirations = new Aspirations(url);
  aspirations.bindEvents();
  aspirations.getData();
});
