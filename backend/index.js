const express = require('express');
const app = express();
const { port } = require('./config');
const apiRouter = require('./routes/api');
const cors = require('cors');

// db
require('./db/mongoose');

// parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// fix cors
const whitelist = ['http://localhost:3000'];
const corsOptionsDelegate = (req, callback) => {
  const corsOptions = (whitelist.indexOf(req.header('Origin')) !== -1) ? { origin: true } : { origin: false };
  callback(null, corsOptions);
}

app.use(cors(corsOptionsDelegate));

// routes
app.use('/api/', apiRouter);

app.listen(port, () => {
  console.log(`server... http://localhost:${port}`);
});