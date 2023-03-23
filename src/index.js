const express = require('express');
const app = express();
const port = 3000;

const homeController = require('./controllers/HomeController');

app.set('view engine', 'pug');
app.use(express.static('../public'));

app.get('/', homeController.index);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));