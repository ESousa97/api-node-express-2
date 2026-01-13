import { jest } from "@jest/globals";
import ErroBase from "../src/erros/ErroBase.js";
import NaoEncontrado from "../src/erros/NaoEncontrado.js";
import RequisicaoIncorreta from "../src/erros/RequisicaoIncorreta.js";
import ErroValidacao from "../src/erros/ErroValidacao.js";

describe("Sistema de Erros", () => {
  describe("ErroBase", () => {
    it("deve criar erro com valores padrão", () => {
      const erro = new ErroBase();

      expect(erro.message).toBe("Erro interno do servidor");
      expect(erro.status).toBe(500);
    });

    it("deve criar erro com mensagem e status customizados", () => {
      const erro = new ErroBase("Mensagem customizada", 503);

      expect(erro.message).toBe("Mensagem customizada");
      expect(erro.status).toBe(503);
    });

    it("deve herdar de Error", () => {
      const erro = new ErroBase();

      expect(erro).toBeInstanceOf(Error);
    });

    it("deve enviar resposta corretamente", () => {
      const erro = new ErroBase("Teste", 500);
      const mockRes = {
        status: jest.fn().mockReturnThis(),
        send: jest.fn()
      };

      erro.enviarResposta(mockRes);

      expect(mockRes.status).toHaveBeenCalledWith(500);
      expect(mockRes.send).toHaveBeenCalledWith({
        mensagem: "Teste",
        status: 500
      });
    });
  });

  describe("NaoEncontrado", () => {
    it("deve criar erro 404 com mensagem padrão", () => {
      const erro = new NaoEncontrado();

      expect(erro.message).toBe("Página não encontrada");
      expect(erro.status).toBe(404);
    });

    it("deve criar erro 404 com mensagem customizada", () => {
      const erro = new NaoEncontrado("Livro não encontrado");

      expect(erro.message).toBe("Livro não encontrado");
      expect(erro.status).toBe(404);
    });

    it("deve herdar de ErroBase", () => {
      const erro = new NaoEncontrado();

      expect(erro).toBeInstanceOf(ErroBase);
    });
  });

  describe("RequisicaoIncorreta", () => {
    it("deve criar erro 400 com mensagem padrão", () => {
      const erro = new RequisicaoIncorreta();

      expect(erro.message).toBe("Um ou mais dados fornecidos estão incorretos");
      expect(erro.status).toBe(400);
    });

    it("deve criar erro 400 com mensagem customizada", () => {
      const erro = new RequisicaoIncorreta("Campo inválido");

      expect(erro.message).toBe("Campo inválido");
      expect(erro.status).toBe(400);
    });

    it("deve herdar de ErroBase", () => {
      const erro = new RequisicaoIncorreta();

      expect(erro).toBeInstanceOf(ErroBase);
    });
  });

  describe("ErroValidacao", () => {
    it("deve processar erros de validação do Mongoose", () => {
      const erroMongoose = {
        errors: {
          titulo: { message: "Título é obrigatório" },
          autor: { message: "Autor é obrigatório" }
        }
      };

      const erro = new ErroValidacao(erroMongoose);

      expect(erro.message).toContain("Título é obrigatório");
      expect(erro.message).toContain("Autor é obrigatório");
      expect(erro.status).toBe(400);
    });

    it("deve herdar de RequisicaoIncorreta", () => {
      const erroMongoose = {
        errors: {
          campo: { message: "Erro" }
        }
      };

      const erro = new ErroValidacao(erroMongoose);

      expect(erro).toBeInstanceOf(RequisicaoIncorreta);
    });
  });
});
