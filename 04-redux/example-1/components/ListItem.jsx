import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment } from '../redux/counter';

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
    this.props.dispatch(increment(this.props.index));
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
  index: PropTypes.number.isRequired,
  children: PropTypes.instanceOf(React.Children),
  dispatch: PropTypes.func.isRequired,
};

export default connect()(ListItem);
