import * as types from './constants';

export const setActiveIndex = (index) => ({
  type: types.KEY_METRICS_SET_ACTIVE_INDEX,
  index,
});

export const clearActiveIndex = () => ({
  type: types.KEY_METRICS_CLEAR_ACTIVE_INDEX,
});
