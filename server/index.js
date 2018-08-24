const {
  graphql,
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require("graphql");
const http = require("http");
const express = require("express");

var httpServer = http.createServer();

var app = express();
app.use(express.static("static"));
app.use(express.static("dist"));
app.use("/graphql", function(req, res) {
  res.write("hello world");
  res.end();
});

httpServer.on("request", app);
httpServer.listen(1234);

var schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return "world";
        }
      }
    }
  })
});
