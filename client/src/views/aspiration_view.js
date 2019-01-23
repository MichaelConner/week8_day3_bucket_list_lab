const PubSub = require('../helpers/pub_sub.js')

const AspirationView = function (container) {
  this.container = container
}

AspirationView.prototype.render = function (input) {
  const aspirationContainer = document.createElement('div')

  const individualAspiration = document.createElement('li')
  individualAspiration.textContent = input.aspiration

  aspirationContainer.appendChild(individualAspiration)

  this.container.appendChild(aspirationContainer)

};






module.exports = AspirationView;
