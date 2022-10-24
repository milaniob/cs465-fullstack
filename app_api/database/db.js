const mongoose = require('mongoose');
const host = process.env.DB_HOST || '127.0.0.1'
const dbURL = `mongodb://${host}/travlr`;
const readLine = require('readline');


//avoid 'current Server Discovery and Mintoring engine is deprecated'
mongoose.set('useUnifiedTopology', true);

if (process.env.NODE_ENV === 'production') {
  dbURL = process.env.DB_HOST || process.env.MONGODB_URI;
}

const connect = () => {
  setTimeout(() => mongoose.connect(dbURL, { 
        useNewUrlParser: true, 
        useCreateIndex: true, 
        }), 1000);
}

mongoose.connection.on('connected', () => {
});

mongoose.connection.on('error', err => {
});

mongoose.connection.on('disconnected', () => {
});

if (process.platform === 'win32') {
  };

const gracefulShutdown = (msg, callback) => {
  
};


// for nodemon restarts
process.once('SIGUSR2', () => {
  });

// for app termination
process.on('SIGINT', () => {
});

// for heroku app termination
process.on('SIGTERM', () => {
});

connect();

// bring in the Mongoose schema
require('./models/travlr');
require('./models/user')