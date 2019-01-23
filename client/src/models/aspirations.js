const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Aspirations = function (url) {
  this.url = url;
  this.request = new RequestHelper(this.url);
};

Aspirations.prototype.bindEvents = function () {

};

Aspirations.prototype.getData = function () {
  this.request.get()
      .then((aspirations) => {
        console.log(aspirations);
        PubSub.publish('Aspirations:data-loaded', aspirations);
      })
      .catch(console.error);
};





module.exports = Aspirations;
