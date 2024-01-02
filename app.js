const express = require('express');
const app = express();
const cors = require('cors'); // Import the cors package
const bodyParser = require('body-parser');
const routesUser = require('./routes/user');
const routerNote = require ('./routes/notes.js');

app.use(bodyParser.json());

const corsOptions = {
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE', // Specify the HTTP methods you want to allow
  allowedHeaders: 'Content-Type,Authorization', // Specify the custom headers you want to allow
};
app.use(cors(corsOptions));

app.use("/note", routerNote);
app.use("/user", routesUser);

app.listen(3333);