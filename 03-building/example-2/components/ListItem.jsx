import React from 'react';
import PropTypes from 'prop-types';

class ListItem extends React.Component {
  constructor() {
    super();
    this.onClick = this.onClick.bind(this);
    this.state = {
      clicked: 0,
    };
  }

  onClick() {
    this.setState(prevState => ({
      clicked: prevState.clicked + 1,
    }));
  }

  render() {
    return (
      <li className={this.props.className}>
        {`${this.props.children}`}
        <button onClick={this.onClick}>
          { `Clicked: ${this.state.clicked}` }
        </button>
      </li>
    );
  }
}

ListItem.defaultProps = {
  className: '',
  children: '',
};

ListItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.instanceOf(React.Children),
};

export default ListItem;
