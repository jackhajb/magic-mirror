export const convertKelvin = (kelvin) => {
  const subtract = kelvin - 273.15
  const fahrenheit = Math.round(subtract * 9/5 +32);
  return `${fahrenheit}°`;
}