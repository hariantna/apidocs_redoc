import "./App.css";

import { RedocStandalone } from "redoc";

(function (p, o, s, t, m, a, n) {
  !p[s] &&
    (p[s] = function () {
      (p[t] || (p[t] = [])).push(arguments);
    });
  !o.getElementById(s + t) &&
    o
      .getElementsByTagName("head")[0]
      .appendChild(
        ((n = o.createElement("script")),
        (n.id = s + t),
        (n.async = 1),
        (n.src = m),
        n)
      );
})(
  window,
  document,
  "_pm",
  "PostmanRunObject",
  "https://run.pstmn.io/button.js"
);

// import * as swagger from './swagger.json';
function App() {
  return (
    <div className="App">
      <RedocStandalone
        spec={"https://apidocs.antna.co.in/swagger.yaml"}
        options={{
          nativeScrollbars: true,
          theme: { colors: { primary: { main: "#0065fc" } } },
        }}
      />
      <div style={{
        position: "fixed",
        left: "5vw",
        top: "70vh"
      }}
        class="postman-run-button"
        data-postman-action="collection/fork"
        data-postman-var-1="14347592-cd0d9b8c-1594-4a80-bb99-fc18830ce7a3"
        data-postman-collection-url="entityId=14347592-cd0d9b8c-1594-4a80-bb99-fc18830ce7a3&entityType=collection&workspaceId=bf300190-0a6f-4baf-88c7-048724973bef"
      ></div>
    </div>
  );
}

export default App;
