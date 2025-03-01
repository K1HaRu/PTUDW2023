const { create } = require('express-handlebars');
const path = require('path');

module.exports = (app) => {
    const exphbs = create({
        defaultLayout: path.join(__dirname, '../views/layouts/main.hbs'),
        layoutsDir: path.join(__dirname, '../views/layouts'),
        partialsDir: path.join(__dirname, '../views/partials'),
        extname: '.hbs',
    });

    app.engine('hbs', exphbs.engine);
    app.set('view engine', 'hbs');
    app.set('views', path.join(__dirname, '../views'));
};
