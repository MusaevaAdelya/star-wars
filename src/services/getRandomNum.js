const getRandomNum = (x, y) => {
  return Math.floor(Math.random() * (y - x + 1)) + x;
};

export default getRandomNum;
