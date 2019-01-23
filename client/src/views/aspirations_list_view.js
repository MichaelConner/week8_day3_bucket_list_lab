const PubSub = require ('../helpers/pub_sub.js');
const AspirationView = require('./aspiration_view.js')

const AspirationsListView = function (container) {
  this.container = container
}

AspirationsListView.prototype.bindEvents = function () {
  PubSub.subscribe('Aspirations:data-loaded', (evt) => {
    this.render(evt.detail);
  });

};

AspirationsListView.prototype.render = function (aspirations) {
    this.container.innerHTML = '';
    const aspirationView = new AspirationView(this.container);
    aspirations.forEach((aspiration) => aspirationView.render(aspiration))
};

module.exports = AspirationsListView;
