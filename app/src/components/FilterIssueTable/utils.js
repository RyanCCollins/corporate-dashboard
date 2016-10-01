const canApply = (filter) => {
  let returnValue = false;
  Object
    .keys(filter)
    .forEach((key) => {
      if (key === 'employee' || key === 'customer') {
        if (filter[key] !== 'All') {
          returnValue = true;
        }
      }
    });
  return returnValue;
};

export {
  canApply,
};
