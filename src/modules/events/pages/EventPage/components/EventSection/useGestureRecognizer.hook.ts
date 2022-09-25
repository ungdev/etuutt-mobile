import moment from 'moment';
import { useState } from 'react';

const current = moment().format('YYYY-MM-DD');

export const useGestureRecognizer = () => {
  const [current, setCurrent] = useState(newDate);
  const swipeLeft = () =>
    setCurrent(moment(current, 'YYYY-MM-DD').add(1, 'month').format('YYYY-MM-DD'));
  const swipeRight = () =>
    setCurrent(moment(current, 'YYYY-MM-DD').subtract(1, 'month').format('YYYY-MM-DD'));
  return { current, swipeLeft, swipeRight };
};
