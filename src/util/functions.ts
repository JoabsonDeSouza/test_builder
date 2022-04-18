export const capitalize = (text: string) => {
  if (!text) {
    return '';
  }

  if (typeof text !== 'string') {
    return '';
  }
  return text.charAt(0).toUpperCase() + text.slice(1);
};

export function convertTemperature(temp: number): string {
  if (temp === undefined) {
    return '';
  }

  const convert = (temp - 273.15).toFixed(0);
  return convert;
}
