import { capitalize } from './functions';

export default function (): string {
  const date = new Date();
  const day = capitalize(date.toLocaleString('pt-br', { weekday: 'long' }));
  const month = capitalize(date.toLocaleString('pt-br', { month: 'long' }));

  return `${day}, ${date.getDate()} de ${month} de ${date.getFullYear()}, ${date.getHours()}:${date.getMinutes()}`;
}
