import {FC} from 'react';
import {DateTime} from 'luxon';
import plural from 'plural-ru';

type TPrettyDateProps = {
  date: Date;
};

const isToday = (date: Date): boolean => {
  const startOfDate = DateTime.fromJSDate(date).startOf('day');
  const today = DateTime.now().startOf('day');
  return startOfDate.toUnixInteger() === today.toUnixInteger();
}

const isYesterday = (date: Date): boolean => {
  const startOfDate = DateTime.fromJSDate(date).startOf('day');
  const today = DateTime.now().minus({day: 1}).startOf('day');
  return startOfDate.toUnixInteger() === today.toUnixInteger();
}

const diffDays = (date: Date): number => {
  return Math.floor(DateTime.now().diff(DateTime.fromJSDate(date), 'days').days);
}

export const getFormattedTime = (date: Date): string =>
    `${String(date.getHours()).padStart(2, '0')}:${String(date.getMinutes()).padStart(2, '0')}`;

export const PrettyDate: FC<TPrettyDateProps> = ({date}) => {
  let prettyDate;
  const time = getFormattedTime(date);
  if (isToday(date)) {
    prettyDate = `Сегодня, ${time}`;
  } else if (isYesterday(date)) {
    prettyDate = `Вчера, ${time}`;
  } else {
    prettyDate = `${plural(diffDays(date), '%d день', '%d дня', '%d дней')} назад, ${time}`;
  }

  return (
      <span className='text text_type_main-default text_color_inactive'>
        {prettyDate}
      </span>
  );
}
