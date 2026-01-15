import { jest } from "@jest/globals";
import paginar from "../src/middlewares/paginar.js";
import RequisicaoIncorreta from "../src/erros/RequisicaoIncorreta.js";

describe("Middleware Paginar", () => {
  let mockReq;
  let mockRes;
  let mockNext;

  beforeEach(() => {
    mockReq = {
      query: {},
      resultado: {
        find: jest.fn().mockReturnThis(),
        sort: jest.fn().mockReturnThis(),
        skip: jest.fn().mockReturnThis(),
        limit: jest.fn().mockReturnThis(),
        exec: jest.fn().mockResolvedValue([{ id: 1 }, { id: 2 }])
      }
    };
    mockRes = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
    mockNext = jest.fn();
  });

  it("deve usar valores padrão quando não fornecidos", async () => {
    await paginar(mockReq, mockRes, mockNext);

    expect(mockReq.resultado.skip).toHaveBeenCalledWith(0);
    expect(mockReq.resultado.limit).toHaveBeenCalledWith(5);
    expect(mockRes.status).toHaveBeenCalledWith(200);
  });

  it("deve usar parâmetros de paginação fornecidos", async () => {
    mockReq.query = { limite: "10", pagina: "2" };

    await paginar(mockReq, mockRes, mockNext);

    expect(mockReq.resultado.skip).toHaveBeenCalledWith(10);
    expect(mockReq.resultado.limit).toHaveBeenCalledWith(10);
  });

  it("deve chamar next com RequisicaoIncorreta para limite inválido", async () => {
    mockReq.query = { limite: "0", pagina: "1" };

    await paginar(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalled();
    expect(mockNext.mock.calls[0][0]).toBeInstanceOf(RequisicaoIncorreta);
  });

  it("deve chamar next com RequisicaoIncorreta para página inválida", async () => {
    mockReq.query = { limite: "5", pagina: "0" };

    await paginar(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalled();
    expect(mockNext.mock.calls[0][0]).toBeInstanceOf(RequisicaoIncorreta);
  });

  it("deve aplicar ordenação customizada", async () => {
    mockReq.query = { ordenacao: "titulo: 1" };

    await paginar(mockReq, mockRes, mockNext);

    expect(mockReq.resultado.sort).toHaveBeenCalledWith({ titulo: 1 });
  });

  it("deve chamar next com erro em caso de exceção", async () => {
    const erro = new Error("Erro de banco");
    mockReq.resultado.exec.mockRejectedValue(erro);

    await paginar(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalledWith(erro);
  });
});
