const PubSub = require('../helpers/pub_sub.js')

const AspirationFormView = function(form) {
  this.form = form
}

AspirationFormView.prototype.bindEvents = function () {
  this.form.addEventListener('submit', (evt) => {
    this.handleSubmit(evt)
  })
};

AspirationFormView.prototype.handleSubmit = function (evt) {
  evt.preventDefault();

  const newAspiration = this.createAspiration(evt.target);
  PubSub.publish('AspirationFormView:aspiration-submitted', newAspiration);

  evt.target.reset()

};

AspirationFormView.prototype.createAspiration = function (form) {
  const newAspiration = {
    aspiration: form.aspiration.value
  };
  return newAspiration;
};




module.exports = AspirationFormView;
