class ListItem extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      clicked: 0
    };
  }

  onClick() {
    this.setState((prevState, props) => ({
      clicked: prevState.clicked + 1
    }));
  }

  render() {
    return (
      <li onClick={ this.onClick } className={ this.props.className }>
        { `${this.props.children} Clicked: ${this.state.clicked}` }
      </li>
    );
  }
}
