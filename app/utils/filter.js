const shouldBeEnabled = (filter) =>
  Object
    .keys(filter)
    .map(i => filter[i])
    .filter(i => i !== 'All')
    .length > 0;

export default shouldBeEnabled;
