import express from "express";
import LivroController from "../controllers/livrosController.js";
import paginar from "../middlewares/paginar.js";
import { rateLimiterLeitura, rateLimiterEscrita } from "../middlewares/rateLimiter.js";

const router = express.Router();

router
  .get("/livros", rateLimiterLeitura, LivroController.listarLivros, paginar)
  .get("/livros/busca", rateLimiterLeitura, LivroController.listarLivroPorFiltro, paginar)
  .get("/livros/:id", rateLimiterLeitura, LivroController.listarLivroPorId)
  .post("/livros", rateLimiterEscrita, LivroController.cadastrarLivro)
  .put("/livros/:id", rateLimiterEscrita, LivroController.atualizarLivro)
  .delete("/livros/:id", rateLimiterEscrita, LivroController.excluirLivro);

export default router;
