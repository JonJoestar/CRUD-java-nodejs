module.exports = {
    obtener: function (conexion,funcion) {
    conexion.query("SELECT * FROM libros", funcion)
    },
    insertar: function (conexion, datos, funcion) {
    conexion.query("INSERT INTO libros (nombre, imagen, serial) VALUES (?,?,?)", funcion)
    }
}