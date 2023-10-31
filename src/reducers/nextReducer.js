const initialState = {
  value: 'Hello World 2',
};

export default (state = initialState, { payload, type }) => {
  switch (type) {
    case 'DEFAULT2':
      return { ...state, ...payload };
    default:
      return state;
  }
};
