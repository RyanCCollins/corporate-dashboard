const sortItemsByNumber = (x, field) =>
  x.sort((a, b) => {
    if (a[`${field}`] > b[`${field}`]) {
      return 1;
    }
    return -1;
  });

export default sortItemsByNumber;
