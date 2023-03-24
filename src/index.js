const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');

app.set('view engine', 'pug');
app.use(express.static('../public'));
app.use(routes);

// this has to be the last route as to display the 404 page
app.use((req, res, next) => {
  res.status(404).render('404');
});

app.listen(port, () => console.log(`Application available on port ${port}!`));