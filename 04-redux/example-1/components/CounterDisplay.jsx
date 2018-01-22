import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const CounterDisplay = ({ clicked }) => (
  <p className="counter">{ `Total Count: ${clicked}` }</p>
);

CounterDisplay.propTypes = {
  clicked: PropTypes.number.isRequired,
};

export default connect((state) => {
  const { counter } = state;
  let clicked = 0;
  Object.keys(counter).forEach((key) => {
    clicked += counter[key];
  });
  return {
    clicked,
  };
})(CounterDisplay);
