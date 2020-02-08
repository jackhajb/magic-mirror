export const isNight = (sunrise, sunset) => {
  const currentTime = Math.floor(Date.now() / 1000);

  return currentTime > sunrise && currentTime < sunset? false: true;
}