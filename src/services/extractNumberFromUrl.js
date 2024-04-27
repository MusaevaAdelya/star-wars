const extractNumberFromUrl = (url) => parseInt(url?.match(/\d+/)[0]);

export default extractNumberFromUrl;