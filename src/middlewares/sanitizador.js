import mongoSanitize from "mongo-sanitize";

/**
 * Middleware para sanitizar inputs e prevenir NoSQL Injection
 * Remove operadores MongoDB maliciosos ($, .) de req.body, req.query e req.params
 */
const sanitizador = (req, res, next) => {
  if (req.body) {
    req.body = mongoSanitize(req.body);
  }
  
  if (req.query) {
    req.query = mongoSanitize(req.query);
  }
  
  if (req.params) {
    req.params = mongoSanitize(req.params);
  }
  
  next();
};

export default sanitizador;
