const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const mongoose = require('mongoose');
const app = express();

app.use(cors())

const routes = require('./routes/contactRoute');
mongoose.connect('mongodb+srv://martamalafaia:Vinilindo86!@cluster0.ekdzf.mongodb.net/list?retryWrites=true&w=majority', {
    useNewUrlParser:true,
    useUnifiedTopology:true,
});

app.use(express.json());  
app.use(morgan('dev'));
app.use('/', routes);



//porta
app.listen(3001, () => {
    console.log('Meu servidor está funcionando');
});

module.exports = app;



