import React, { PropTypes } from 'react';
import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';

const Slider = ({
  onSlide,
  max,
  min,
  defaultValue,
  value,
}) => (
  <Form>
    <FormField
      help={`Current Value: ${value}ms`}
      label="Polling Interval"
      htmlFor="slider-1"
    >
      <input
        onChange={onSlide}
        value={value}
        id="slider-1"
        type="range"
        min={min}
        max={max}
        step={1000}
        defaultValue={defaultValue}
      />
    </FormField>
  </Form>
);

Slider.propTypes = {
  onSlide: PropTypes.func.isRequired,
  max: PropTypes.number.isRequired,
  min: PropTypes.number.isRequired,
  defaultValue: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

export default Slider;
