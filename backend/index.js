const express = require('express');
const app = express();
const port = 5000;
const userRouter = require('./router/userRouter');
const productRouter = require('./router/productRouter');
const utilRouter = require('./router/util')
const cors = require('cors')
//Middleware
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/product', productRouter);
app.use('/util', utilRouter);

app.use(express.static('./uploads'));

//routes 
app.get('/', (req, res) => {
    res.send('Response from express server');
});
app.get('/add', (req, res) => {
    res.send('Response from index add route');
});
app.get('/delete', (req, res) => {
    res.send('Response from index delete route');
});
//starting the app server
app.listen(port, () => {
    console.log('server start on port :' + port);
});