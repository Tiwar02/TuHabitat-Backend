const PostgresService = require('../../services/postgres.service')
const _pg = new PostgresService();

const getReservas = async (req, res) => {
    let sql = "select * from reservas";
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send(rows);
};

const createReserva = async (req, res, id_r, id_u, id_ins, fecha, num_per) => {
    let sql = "insert into reservas (id_reserva, id_usuario, id_instalacion, fecha, num_personas) values ("+id_r + "," + id_u + "," + id_ins +","+ fecha + "," + num_per +")";
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send("Reserva creada");
}

const updateReserva = async (req, res, id_r) => {
    let sql = "update from reservas where id="+id_r;
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send("Reserva actualizada");
}

const deleteReserva = async (req, res, id_r) => {
    let sql = "delete from reservas where id="+id_r;
    let result = await _pg.executeSQL(sql)
    let rows = result.rows
    return res.send("Reserva ELiminada");
}

module.exports = {getReservas,createReserva,updateReserva,deleteReserva};