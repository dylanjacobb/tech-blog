const path = require('path');
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const exphbs = require('express-handlebars');
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3306;
const hbs = exphbs.create({ helpers });

const sess = {
    secret: 'little big secret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize
    })
}

app.use(session(sess));

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(experss.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.statuc(path.join(__dirname, 'public')));

app.use(routes);

sequelize({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening on http://localhost:' + PORT));
})