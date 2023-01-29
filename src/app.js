// const { sequelize } = require('./models/index');
//     sequelize.sync({alter : true});


require('dotenv').config()
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');


const authRoute = require('./routes/authRoute');
const userRoute = require('./routes/userRoute');
const friendRoute = require('./routes/friendRoute');
const notFound = require('./middlewares/notFound')
const error = require('./middlewares/error')
const authenticate = require('./middlewares/authenticate');


const app = express();

if(process.env.NODE_ENV === 'development' ){
    app.use(morgan('dev'))
}; 

app.use(cors());
app.use(express.json());   ///use for handle application/json
app.use(express.urlencoded({ extended: false }));  //use for handle x-www.form-urlencoded

app.use('/auth', authRoute);
app.use('/users',authenticate, userRoute);
app.use('/friends' , authenticate , friendRoute)


app.use(notFound);
app.use(error);


const port = process.env.PORT || 8008 ;
app.listen(port , console.log(`Server for fakebuck is running on port ${port}`))
