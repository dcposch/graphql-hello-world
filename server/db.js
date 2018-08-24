module.exports = {
  getPlayers() {
    return players;
  }
};

const players = [
  { name: "Phil Wang" },
  { name: "DC" },
  { name: "Ivan 'The Tubb' Chubb" },
  { name: "Uma" }
];

const games = [
  {
    timestamp: "2019-01-01",
    p1: players[0],
    p1: players[1],
    outcome: 1
  },
  {
    timestamp: "2019-01-01",
    p1: players[1],
    p1: players[0],
    outcome: -1
  },
  {
    timestamp: "2019-01-01",
    p1: players[0],
    p1: players[1],
    outcome: 1
  }
];
