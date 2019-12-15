const bodyParser = require('body-parser');
const morgan = require('morgan');
const express = require('express');
const app = express();
const routes = require('./routes');

app.use(morgan('short'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(routes);

app.use(express.static('./public'));

const port = parseInt(process.env.PORT, 10) || 3000;
app.listen(port, () => console.log(`Server listening on port ${port} ...`));

module.exports = app;