// const heading = React.createElement("h1",{id:"text"},"Hellow World from React ");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

const parent = React.createElement(
  "div",
  { id: "parent" },
[  React.createElement(
    "div",
    { id: "child" },
[    React.createElement("h1", { id: "heading" }, "I am H1 tag"),
    React.createElement("h2", { id: "heading" }, "I am H2 tag"),]
  ),
  React.createElement(
    "div",
    { id: "child" },
[    React.createElement("h3", { id: "heading" }, "I am H1 tag"),
    React.createElement("h4", { id: "heading" }, "I am H2 tag"),]
  )]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
