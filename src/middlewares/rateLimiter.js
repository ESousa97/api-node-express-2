import rateLimit from "express-rate-limit";

// Rate limiter para rotas de leitura (GET)
export const rateLimiterLeitura = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100, // máximo 100 requisições por IP
  message: {
    erro: "Muitas requisições. Tente novamente em 15 minutos.",
    codigo: 429
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Rate limiter para rotas de escrita (POST, PUT, DELETE)
export const rateLimiterEscrita = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 50, // máximo 50 requisições por IP
  message: {
    erro: "Muitas requisições de escrita. Tente novamente em 15 minutos.",
    codigo: 429
  },
  standardHeaders: true,
  legacyHeaders: false
});

// Rate limiter global (para aplicar em toda a API)
export const rateLimiterGlobal = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 200, // máximo 200 requisições por IP
  message: {
    erro: "Limite de requisições excedido. Tente novamente em 15 minutos.",
    codigo: 429
  },
  standardHeaders: true,
  legacyHeaders: false
});

export default {
  rateLimiterLeitura,
  rateLimiterEscrita,
  rateLimiterGlobal
};
