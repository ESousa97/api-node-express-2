import { jest } from "@jest/globals";
import manipulador404 from "../src/middlewares/manipulador404.js";
import NaoEncontrado from "../src/erros/NaoEncontrado.js";

describe("Middleware manipulador404", () => {
  it("deve chamar next com erro NaoEncontrado", () => {
    const mockReq = {};
    const mockRes = {};
    const mockNext = jest.fn();

    manipulador404(mockReq, mockRes, mockNext);

    expect(mockNext).toHaveBeenCalled();
    expect(mockNext.mock.calls[0][0]).toBeInstanceOf(NaoEncontrado);
  });
});
