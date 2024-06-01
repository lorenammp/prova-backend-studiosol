import request from "supertest";
import app from "../app";

const score1 = {
  score: "18x3",
};

describe("Testes rota POST /verify", () => {
  it("Testando resultados", async () => {
    const response = await request(app).post("/verify").send(score1);

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty("combinations");
  });
});
