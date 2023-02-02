import { app } from "./app";

app.listen(process.env.PORT, () =>
  console.log(`API online na porta ${process.env.PORT}!`)
);
