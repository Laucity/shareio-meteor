var mongoose = require('mongoose');

module.exports = mongoose.model('User', {
  fb: {
    id: { type: String, unique: true },
    access_token: String,
    firstName: String,
    lastName: String,
    email: String,
    profileURI: String
  },
  items: [{
    title: String,
    description: String,
    details: [String],
    prices: [{price: Number, duration: String}],
    ratings: [{id: String, rating: Number, comment: String}],
    imageURI: [String]
  }]
});
