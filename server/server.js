const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const authUserRout = require("./auth/user/userAuthRouter/router.js");
const FournisseurRouter = require("./router/fournisseurRouter.js");
const FactureRouter = require("./router/factureRouter.js");
const stockRouter = require("./router/stockRouter.js");
const port = process.env.PORT || 3637;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/auth/user", authUserRout);
app.use("/stock", stockRouter);
app.use("/fournisseur", FournisseurRouter);
app.use("/facture", FactureRouter);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
