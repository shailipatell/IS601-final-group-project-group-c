import { parseISO, format, isValid } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  if (!isValid(date)) {
    console.error('Invalid date:', dateString);
    return null;
  }
  return <time dateTime={dateString}>{format(date, 'yyyy-MM-dd')}</time>;
}