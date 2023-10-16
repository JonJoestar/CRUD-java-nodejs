var mysql = require("mysql");
var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'bliblioteca'
});
con.connect(
    (err) => {
        if (!err) {
            console.log("Conexion buena");
        } else {
            console.log("conexion mala");
        }
    }
);
module.exports=con;