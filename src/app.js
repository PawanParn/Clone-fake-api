// const { sequelize } = require('./models/index');
// sequelize.sync();


require('dotenv').config()
// const { config } = require('dotenv');
const express = require('express');
const cors = require('cors');
const notFound = require('./middlewares/notFound')
const error = require('./middlewares/error')
const morgan = require('morgan');


const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:false}));



app.use(error);
app.use(notFound);


const port = process.env.PORT || 8008 ;
app.listen(port , console.log(`Server for fakebuck is running on port ${port}`))
