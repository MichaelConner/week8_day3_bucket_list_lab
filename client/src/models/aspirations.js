const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Aspirations = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Aspirations.prototype.bindEvents = function () {
  PubSub.subscribe('AspirationView:aspiration-delete-clicked', (evt) => {
    this.deleteAspiration(evt.detail);
  })


  PubSub.subscribe('AspirationFormView:aspiration-submitted', (evt) => {
    this.postAspiration(evt.detail);
  })
};

Aspirations.prototype.getData = function () {
  this.request.get()
      .then((aspirations) => {
        PubSub.publish('Aspirations:data-loaded', aspirations);
      })
      .catch(console.error);
};

Aspirations.prototype.postAspiration = function (aspiration) {
  this.request.post(aspiration)
  .then((aspirations) => {
    PubSub.publish('Aspirations:data-loaded', aspirations);
  })
  .catch(console.error)
};

Aspirations.prototype.deleteAspiration = function (aspirationID) {
  this.request.delete(aspirationID)
  .then((aspirations) => {
    PubSub.publish('Aspirations:data-loaded', aspirations);
  })
  .catch(console.error)
};

module.exports = Aspirations;
