require('dotenv').config({
  path: `.env.${process.env.NODE_ENV || 'production'}`
});

module.exports = {
  plugins: ['gatsby-plugin-postcss']
};
