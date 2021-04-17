const PostgresService = require('../../services/postgres.service')
const _pg = new PostgresService();

const getUsers = async (req, res) => {
    let sql = "select * from usuarios";
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send(rows);
};

const createUser = async (req, res, nombre, id_u, email) => {
    let sql = "insert into usuarios (nombre, id, email) values ("+nombre + "," + id_u + "," + email +")";
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send("Usuario creado");
}

const updateUser = async (req, res) => {
    let sql = "update from usuarios where id="+id_u;
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send("Usuario actualizado");
}

const deleteUser = async (req, res, id_u) => {
    let sql = "delete from usuarios where id="+id_u;
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send("Usuario ELiminado");
}

module.exports = {getUsers,createUser,updateUser,deleteUser};