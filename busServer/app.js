const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();

//connect to database
mongoose.connect(process.env.DBURI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.connection.once("open", () => {
  console.log(`🏬 DB connected successfully`);
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`🚀 Server started on ${port} 🧨`);
});
