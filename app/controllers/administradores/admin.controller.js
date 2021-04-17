const PostgresService = require('../../services/postgres.service')
const _pg = new PostgresService();

const getAdmin = async (req, res) => {
    let sql = "select * from admin";
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send(rows);
};

const createAdmin = async (req, res, user, pass) => {
    let sql = "insert into admin (user, pass) values ("+ user + "," + pass +")";
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send("Administrador creado");
}

const updateAdmin = async (req, res, user) => {
    let sql = "update from admin where id="+ user;
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send("Administrador actualizado");
}

const deleteAdmin = async (req, res, user) => {
    let sql = "delete from admin where id="+user;
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send("Administrador ELiminado");
}

module.exports = {getAdmin,createAdmin,updateAdmin,deleteAdmin};