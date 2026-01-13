import { autores, livros } from "../models/index.js";
import NaoEncontrado from "../erros/NaoEncontrado.js";

/**
 * Sanitiza string para uso seguro em regex MongoDB
 * Escapa caracteres especiais de regex para prevenir ReDoS
 */
function sanitizarParaRegex(valor) {
  if (typeof valor !== "string") return "";
  return valor.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

/**
 * Valida e converte para número inteiro positivo
 */
function validarNumeroPositivo(valor) {
  const num = parseInt(valor, 10);
  if (isNaN(num) || num < 0) return null;
  return num;
}

class LivroController {

  static listarLivros = async (req, res, next) => {
    try {

      const buscaLivros = livros.find();

      req.resultado = buscaLivros;

      next();

    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorId = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await livros.findById(id)
        .populate("autor", "nome")
        .exec();

      if (livroResultado !== null) {
        res.status(200).send(livroResultado);
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static cadastrarLivro = async (req, res, next) => {
    try {
      let livro = new livros(req.body);

      const livroResultado = await livro.save();

      res.status(201).send(livroResultado.toJSON());
    } catch (erro) {
      next(erro);
    }
  };

  static atualizarLivro = async (req, res, next) => {
    try {
      const id = req.params.id;
      
      // Validar campos permitidos para atualização
      const camposPermitidos = ["titulo", "autor", "editora", "numeroPaginas"];
      const dadosAtualizacao = {};
      
      for (const campo of camposPermitidos) {
        if (req.body[campo] !== undefined) {
          dadosAtualizacao[campo] = req.body[campo];
        }
      }

      const livroResultado = await livros.findByIdAndUpdate(id, {$set: dadosAtualizacao});

      if (livroResultado !== null) {
        res.status(200).send({message: "Livro atualizado com sucesso"});
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static excluirLivro = async (req, res, next) => {
    try {
      const id = req.params.id;

      const livroResultado = await livros.findByIdAndDelete(id);

      if (livroResultado !== null) {
        res.status(200).send({message: "Livro removido com sucesso"});
      } else {
        next(new NaoEncontrado("Id do livro não localizado."));
      }
    } catch (erro) {
      next(erro);
    }
  };

  static listarLivroPorFiltro = async (req, res, next) => {
    try {
      const busca = await processaBusca(req.query);

      if (busca !== null) {
        const livrosResultado = livros
          .find(busca)
          .populate("autor");

        req.resultado = livrosResultado;

        next();

      } else {
        res.status(200).send([]);
      }
    } catch (erro) {
      next(erro);
    }
  };
}

async function processaBusca(parametros) {
  const { editora, titulo, minPaginas, maxPaginas, nomeAutor } = parametros;

  let busca = {};

  // Sanitizar e validar editora (string exata)
  if (editora && typeof editora === "string") {
    busca.editora = editora.trim();
  }
  
  // Sanitizar título para regex seguro
  if (titulo && typeof titulo === "string") {
    const tituloSanitizado = sanitizarParaRegex(titulo.trim());
    if (tituloSanitizado) {
      busca.titulo = { $regex: tituloSanitizado, $options: "i" };
    }
  }

  // Validar e sanitizar números de páginas
  const minPaginasNum = validarNumeroPositivo(minPaginas);
  const maxPaginasNum = validarNumeroPositivo(maxPaginas);
  
  if (minPaginasNum !== null || maxPaginasNum !== null) {
    busca.numeroPaginas = {};
    
    // gte = Greater Than or Equal = Maior ou igual que
    if (minPaginasNum !== null) busca.numeroPaginas.$gte = minPaginasNum;
    // lte = Less Than or Equal = Menor ou igual que
    if (maxPaginasNum !== null) busca.numeroPaginas.$lte = maxPaginasNum;
  }

  // Sanitizar nome do autor (string exata para busca)
  if (nomeAutor && typeof nomeAutor === "string") {
    const nomeAutorSanitizado = nomeAutor.trim();
    const autor = await autores.findOne({ nome: nomeAutorSanitizado });

    if (autor !== null) {
      busca.autor = autor._id;
    } else {
      busca = null;
    }
  }

  return busca;
}

export default LivroController;