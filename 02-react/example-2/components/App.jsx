class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <ul>
          <ListItem className="list-item" index={ 0 }>
            First item
          </ListItem>
          <ListItem className="list-item" index={ 1 }>
            Second item
          </ListItem>
        </ul>
      </div>
    );
  }
}
