export const getCurrentDateTime = () => {
  const today = new Date();
  const date = `${today.getFullYear()}-${
    today.getMonth() + 1
  }-${today.getDate()}`;
  const time = `${today.getHours()}:${today.getMinutes()}`;
  return `${date} ${time}`;
};
