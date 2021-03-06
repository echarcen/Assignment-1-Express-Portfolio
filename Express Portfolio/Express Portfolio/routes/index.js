/* index.js
    Erica Charlton
    301208854
    June 3rd, 2022
*/

'use strict';
var express = require('express');
var router = express.Router();

app.use(express.static('public'));
app.use('/css', express.static('css'));
app.use('/js', express.static('js'));
app.use('/files', express.static('files'));
app.use('/images', express.static('images'));

router.get('/', function (req, res) {
    res.render('index', { title: 'Express Portfolio Home Page' });
});

router.get('/about', (req, res) => {
    res.render('about', { title: 'About me' });
});

router.get('/projects', (req, res) => {
    res.render('projects', { title: 'Projects' });
});

router.get('/services', (req, res) => {
    res.render('services', { title: 'Services' });
});

router.get('/contact', (req, res) => {
    res.render('contact', { title: 'Contact' });
});



module.exports = router;
