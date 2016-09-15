import {
  areaChartLabels,
} from './constants';

export const initialState = {
  areaChartLabels,
};

const keyMetricsReducer =
  (state = initialState, action) => {
    switch (action.type) {
      default:
        return state;
    }
  };

export default keyMetricsReducer;
