import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';

import { defaultAction } from '../actions';

const IndexPage = () => {
  const obj = useSelector(({ defaultReducer }) => defaultReducer);
  const dispatch = useDispatch();

  const defaultDispatch = (payload) => dispatch(defaultAction(payload));

  return (
    <> 
      Hello from main page
      <h1>{obj.value}</h1>
      <button
        type="button"
        onClick={() => {
          defaultDispatch({ value: 'Goodbye World' });
        }}
      >
        Trigger Action
      </button>
    </>
  );
}; 

export default IndexPage;
