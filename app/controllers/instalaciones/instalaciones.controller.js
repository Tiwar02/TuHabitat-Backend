const PostgresService = require('../../services/postgres.service')
const _pg = new PostgresService();

const getInstalaciones = async (req, res) => {
    let sql = "select * from instalaciones";
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send(rows);
};

const createInstalaciones = async (req, res, id_ins, nombre, desc) => {
    let sql = "insert into instalaciones (id_ins, nombre, desc) values ("+id_ins + "," + nombre + "," + desc +")";
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send("Instalacion creada");
}

const updateInstalaciones = async (req, res, id_ins) => {
    let sql = "update from instalaciones where id="+id_ins;
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send("Instalacion actualizada");
}

const deleteInstalaciones = async (req, res, id_ins) => {
    let sql = "delete from instalaciones where id="+id_ins;
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send("Instalacion ELiminada");
}

module.exports = {getInstalaciones,createInstalaciones,updateInstalaciones,deleteInstalaciones};