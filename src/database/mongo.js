const mongoose = require('mongoose')

const connect = () => {
    return mongoose.connect(process.env.DB_URL)
      .then( connection => {
          console.log('Connected to database')
          return connection
      })
      .catch(err => {
          console.error('App starting error:', err);
          process.exit(1);
      });
}

module.exports = Object.assign({}, {connect})
