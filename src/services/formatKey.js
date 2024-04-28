const formatKey = (key) => {
  if (/^[A-Z]+$/.test(key)) {
    return key;
  } else {
    return key
      .replace(/([A-Z])/g, " $1")
      .replace(/^./, (str) => str.toUpperCase());
  }
};
export default formatKey;
