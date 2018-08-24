import React from "react";

import GraphiQL from "graphiql";

function graphQLFetcher(params) {
  return fetch("/graphql", {
    method: "post",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(params)
  }).then(response => response.json());
}

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>s q u a r e c r a f t leader board</h1>
        <div>
          <img src="http://gifimage.net/wp-content/uploads/2018/06/website-under-construction-gif-2.gif" />
        </div>
        <div style={{ height: 1000 }}>
          <GraphiQL fetcher={graphQLFetcher} style={{ height: 800 }} />
        </div>
      </div>
    );
  }
}
