const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const sequelize = require('./src/models/database');
// const config = require('./src/config/config');
const mainRoutes = require('./src/routes/main');
const app = express();
dotenv.config();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.use('', mainRoutes);  

sequelize.sync()
.then(()=>{
    // eslint-disable-next-line no-undef
    app.listen(process.env.PORT);
})
.catch(err=>console.log(err));