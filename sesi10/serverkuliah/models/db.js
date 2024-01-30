const mysql = require('mysql');

const connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'mahasiswa',
});

connection.connect((err)=> {
    if(err){
        console.error('Eror konekting to mysql databases :', err);
    }else{
        console.log("connected to mysql databases");
    }
});

module.exports = connection;