import express from "express";
import userRoutes from "./routes/user.routes";

const app = express();
app.use(express.json());
app.use("/verify", userRoutes);

app.listen(3000, () => {
  console.log(`Executando na porta 3000`);
});
