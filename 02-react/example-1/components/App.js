class App extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement("h1", null, "Hello world!"),
      React.createElement(
        "ul",
        null,
        React.createElement(
          ListItem,
          { className: "list-item", index: 0 },
          "First item"
        ),
        React.createElement(
          ListItem,
          { className: "list-item", index: 1 },
          "Second item"
        )
      )
    );
  }
}
