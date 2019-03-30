import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import helmet from 'helmet';
import path from 'path';


import passportStrategyJwt from './my_modules/routes/passport';

import usersrouter from './my_modules/routes/usersrouter';
import pollrouter from './my_modules/routes/pollrouter';

const app = express();
import { handleRender } from './universalRender';

dotenv.config();
app.use(helmet());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname + '/client/build/')));

// mongoose connection 
mongoose.connect("mongodb://localhost:27017/voting",{useNewUrlParser:true});



var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error: database did not open for some reason!'));

db.once('open',function(){
    console.log('databse connection enstablished and open!');
});

passportStrategyJwt();

app.use(usersrouter);
app.use(pollrouter);




app
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', (req, res) => {
    handleRender(req, res);
  });

export default app;