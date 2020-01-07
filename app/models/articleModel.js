const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const moment = require('moment');

const ArticleSchema = new Schema({
    title: String,
    text: String,
    date: String
});

ArticleSchema.methods.setData = function () {
    this.date = moment().format("YYYY-MM-DD HH:mm:ss");
};

module.exports = mongoose.model('ArticleModel', ArticleSchema);