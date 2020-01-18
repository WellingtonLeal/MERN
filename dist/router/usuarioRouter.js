"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UsuarioServices_1 = require("../services/UsuarioServices");
exports.usuarioRouter = express_1.Router();
exports.usuarioRouter.get("/:id", async (req, res) => {
    try {
        const usuario = await UsuarioServices_1.UsuarioService.consultar(req.params.id);
        res.json(usuario);
    }
    catch (e) {
        res.status(400).json({ message: "não encontrado" });
    }
});
exports.usuarioRouter.get("/", async (req, res) => {
    const usuarios = await UsuarioServices_1.UsuarioService.listar(req.query);
    res.json(usuarios);
});
//# sourceMappingURL=usuarioRouter.js.map