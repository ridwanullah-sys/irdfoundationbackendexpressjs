const express = require("express");
const dua = require("./routes/dua_router");

const app = express();
app.use(express.json());

const port = 4000;

app.use("/", dua);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
