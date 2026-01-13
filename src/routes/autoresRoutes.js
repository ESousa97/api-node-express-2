import express from "express";
import AutorController from "../controllers/autoresController.js";
import paginar from "../middlewares/paginar.js";
import { rateLimiterLeitura, rateLimiterEscrita } from "../middlewares/rateLimiter.js";

const router = express.Router();

router
  .get("/autores", rateLimiterLeitura, AutorController.listarAutores, paginar)
  .get("/autores/:id", rateLimiterLeitura, AutorController.listarAutorPorId)
  .post("/autores", rateLimiterEscrita, AutorController.cadastrarAutor)
  .put("/autores/:id", rateLimiterEscrita, AutorController.atualizarAutor)
  .delete("/autores/:id", rateLimiterEscrita, AutorController.excluirAutor);

export default router;   