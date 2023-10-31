import { Provider } from 'react-redux';
import reduxPromise from 'redux-promise';
import PropTypes from 'prop-types';
import { configureStore } from '@reduxjs/toolkit';

import rootReducer from '../reducers';

const Root = ({ element }) => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [reduxPromise],
  });

  return <Provider store={store}>{element}</Provider>;
};

Root.defaultProps = {
  element: <></>,
};

Root.propTypes = {
  element: PropTypes.element,
};

export default Root;
