const { graphql, buildSchema } = require("graphql");
const http = require("http");
const express = require("express");

var db = require("./db");

var httpServer = http.createServer();

var app = express();
app.use(express.json());
app.use(express.static("static"));
app.use(express.static("dist"));
app.use(express.static("node_modules/graphiql"));
app.post("/graphql", function(req, res) {
  const { query, variables } = req.body;
  graphql(schema, query, root).then(response => {
    res.write(JSON.stringify(response));
    res.end();
  });
});

httpServer.on("request", app);
httpServer.listen(1234);

var schema = buildSchema(`
  type Query {
    players: [Player!]!
  }

  # A player
  type Player {
    name: String
    recentGames: [Game!]!
  }

  # Finished two-player game
  type Game {
    date: String
    p1: Player
    p2: Player
    
    # 1 if p1 won, -1 if p2 won, 0 if it was a tie
    score: Int!
  }
`);

var root = {
  players: () => {
    return db.getPlayers();
  }
};
