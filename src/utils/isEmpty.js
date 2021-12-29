const isEmpty = (data) =>
  data === undefined ||
  data === null ||
  (typeof data === "object" && Object.keys(data).length === 0) ||
  data.length === 0;

export default isEmpty;
