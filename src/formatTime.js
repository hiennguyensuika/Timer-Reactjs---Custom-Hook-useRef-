export const formatTime = (time) => {
  const getSeconds = `0${time % 60}`.slice(-2);// lay so du tuc chi lay maximmum gia tri 60s
/*const minutes = `${Math.floor(time / 60)}`;
const getMinutes = `0${minutes % 60}`.slice(-2);*/
  const getMinutes = `0${Math.floor(time / 60)}`.slice(-2); // rewrite for minutes - line-3
  const getHours = `0${Math.floor(time / 3600)}`.slice(-2);

  return `${getHours} : ${getMinutes} : ${getSeconds}`; /*return a string*/
}

//time - parameter
