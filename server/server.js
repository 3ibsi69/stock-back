const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const authUserRout = require("./auth/user/userAuthRouter/router.js");
const port = process.env.PORT || 3637;

app.use(bodyParser.json());
app.use(
  cors({
    origin: "*",
  })
);

app.use("/auth/user", authUserRout);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
