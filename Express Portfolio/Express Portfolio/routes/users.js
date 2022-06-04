/* users.js
    Erica Charlton
    301208854
    June 3rd, 2022
*/

'use strict';
var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res) {
    res.send('respond with a resource');
});

module.exports = router;
