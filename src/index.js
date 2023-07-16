const path = require('path');
const express = require('express');
const morgan = require('morgan');
const app = express();
const port = 3000;
const handlebars = require('express-handlebars');

const route = require('./routes/index.js');

app.use(express.static(path.join(__dirname, 'public')));
//HTTP logger
app.use(morgan('combined'));

app.engine(
               'hbs',
    handlebars.engine({
        extname: '.hbs',
        defaultLayout: 'main',
    }),
);

// template engine
// app.engine('handlebars', handlebars.engine({ defaultLayout: 'main' }));
app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'resources\\views'));

// routes init
route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// https://www.google.com/search?q=f8 lap trinh&ref=f8&author=sondn
