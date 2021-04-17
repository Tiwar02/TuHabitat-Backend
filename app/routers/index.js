const express = require("express");

const router = express.Router();

const _userController = require("../controllers/usuarios/usuarios.controller");
const _reservasController = require("../controllers/reservas/reservas.controller");
const _instalacionesController = require("../controllers/instalaciones/instalaciones.controller");
const _adminController = require("../controllers/administradores/admin.controller");

router
    .get("/usuarios", _userController.getUsers)
    .post("/usuarios", _userController.createUser)
    .put("/usuarios", _userController.updateUser)
    .delete("/usuarios", _userController.deleteUser);

router
    .get("/reservas", _reservasController.getReservas)
    .post("/reservas", _reservasController.createReserva)
    .put("/reservas", _reservasController.updateReserva)
    .delete("/reservas", _reservasController.deleteReserva);
    
router
    .get("/instalaciones", _instalacionesController.getInstalaciones)
    .post("/instalaciones", _instalacionesController.createInstalaciones)
    .put("/instalaciones", _instalacionesController.updateInstalaciones)
    .delete("/instalaciones", _instalacionesController.deleteInstalaciones);

router
    .get("/admin", _adminController.getAdmin)
    .post("/admin", _adminController.createAdmin)
    .put("/admin", _adminController.updateAdmin)
    .delete("/admin", _adminController.deleteAdmin);

module.exports = router;