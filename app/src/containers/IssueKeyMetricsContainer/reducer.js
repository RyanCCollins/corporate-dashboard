import * as types from './constants';
import update from 'react-addons-update';

export const initialState = {
  activeIndex: null,
  labels: [
    { index: 0, label: '0' },
    { index: 2, label: '50' },
    { index: 4, label: '100' },
  ],
};

const issueKeyMetricsReducer =
  (state = initialState, action) => {
    switch (action.type) {
      case types.KEY_METRICS_SET_ACTIVE_INDEX:
        return update(state, {
          activeIndex: {
            $set: action.index,
          },
        });
      case types.KEY_METRICS_CLEAR_ACTIVE_INDEX:
        return update(state, {
          activeIndex: {
            $set: null,
          },
        });
      default:
        return state;
    }
  };

export default issueKeyMetricsReducer;
