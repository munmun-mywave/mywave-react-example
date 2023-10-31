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
        Trigger Action 1
      </button>
      <button
        type="button"
        onClick={() => {
          defaultDispatch({ value: 'Hello World 2' });
        }}
      >
        Trigger Action 2
      </button>
    </>
  );
};

export default IndexPage;
