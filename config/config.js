const mysql = require('mysql');
const db = mysql.createConnection({
    host: 'gepron.com.br',
    user: 'gepronco_haskel',
    password: 'Haskel00',
    database: 'geproncom_delivery'
});
db.connect(function(err) {
    if (err) throw err;
    console.log('DATABASE CONNECTED!');
});


module.exports = db;