export const getCurrentTimestamp = () => {
  const date = new Date();
  const hours = date.getHours().toString();
  const minutes = date.getMinutes().toString();
  return `${hours.length === 1 ? '0' + hours : hours}:${
    minutes.length === 1 ? '0' + minutes : minutes
  }`;
};
