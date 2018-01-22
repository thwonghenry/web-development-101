const namespace = 'counter';

export const INCREMENT = `${namespace}/INCREMENT`;

export const increment = index => ({
  type: INCREMENT,
  index,
});

const counterReducer = (state = {}, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        [action.index]: (state[action.index] || 0) + 1,
      };
    default:
      return state;
  }
};

export default counterReducer;
