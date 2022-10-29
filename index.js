const express = require('express');
const path = require('path')
/* require('./db/mongoose') */
const cors = require('cors');

const imageRouter = require('./routers/imageRouters');
/* const mailerRouter = require('./routers/mailerRouter'); */
const orderRouter = require('./routers/orderRouter');
const loginRouter = require('./routers/logginRouters');
const forumRouter = require('./routers/forumRouters');
const {errorHandler} = require("./middelware/errorHandler")
const serchRouters = require('./routers/serchRouters');

const app = express();
app.use(cors());
app.options('*', cors());

/* app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin','http://www.bildsomstod.se');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT,');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
}); */

app.use(express.json());
app.use('/v1/pictures', imageRouter);
/* app.use('/v1/mailer', mailerRouter);  */
app.use('/v1/orders', orderRouter );
app.use('/v1/loggin', loginRouter);
app.use('/v1/forum', forumRouter);
app.use('/v1/serch', serchRouters);

// Serv Front end 



if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, './frontend/build')))
    console.log("in prod")
    app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, './', 'frontend', 'build', 'index.html')));
    
}

app.use(errorHandler);




module.exports = app
