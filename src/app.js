import express from "express";
import userRoutes from "./routes/user.routes";

const PORT = 8080;
const HOST = "0.0.0.0";

const app = express();
app.use(express.json());
app.use("/verify", userRoutes);

app.listen(PORT, () => {
  console.log(`Executando na porta 3000`);
});

export default app;
