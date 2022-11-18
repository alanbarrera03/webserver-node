// const { application } = require('express');
require('dotenv').config();
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT;



//Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

// Servir contenido stático
app.use( express.static( 'public' ) );

app.get('/', ( req, res ) => {

    res.render('home', {
        name: 'Alan Barrera',
        title: 'Course of Node'
    });

});

app.get('/generic', ( req, res ) => {

    res.render('generic', {
        name: 'Alan Barrera',
        title: 'Course of Node'
    });

});

app.get('/elements', ( req, res ) => {

    res.render('elements', {
        name: 'Alan Barrera',
        title: 'Course of Node'
    });

});

app.get('*', ( req, res ) => {

    res.sendFile( __dirname +  '/public/404.html' );

});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})