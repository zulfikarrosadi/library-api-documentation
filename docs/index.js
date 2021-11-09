const basicinfo = require('./basicinfo');
const servers = require('./servers');
const tags = require('./tags');
const book = require('./books');
const components = require('./components');

module.exports = {
  ...basicinfo,
  ...servers,
  ...components,
  ...tags,
  ...book,
};
