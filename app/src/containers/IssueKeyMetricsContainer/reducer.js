import * as types from './constants';

const initialState = {
  activeIndex: 0,
  labels: [
    { index: 0, label: '0' },
    { index: 2, label: '50' },
    { index: 4, label: '100' },
  ],
};

const issueKeyMetricsReducer =
  (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

export default issueKeyMetricsReducer;
