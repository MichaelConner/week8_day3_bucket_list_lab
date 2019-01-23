const PubSub = require('../helpers/pub_sub.js')

const AspirationView = function (container) {
  this.container = container
}

AspirationView.prototype.render = function (input) {
  const aspirationContainer = document.createElement('div')

  const individualAspiration = document.createElement('li')
  individualAspiration.textContent = input.aspiration
  aspirationContainer.appendChild(individualAspiration)

  const deleteButton = this.createDeleteButton(input._id);
  aspirationContainer.appendChild(deleteButton);

  this.container.appendChild(aspirationContainer)
};

AspirationView.prototype.createDeleteButton = function (aspirationID) {
  const button = document.createElement('button');
  button.classList.add('delete-btn');
  button.value = aspirationID;

  button.addEventListener('click', (evt) => {
    PubSub.publish('AspirationView:aspiration-delete-clicked' , evt.target.value)
  });
  return button
};

module.exports = AspirationView;
