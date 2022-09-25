import moment from 'moment';

export const convertDate = (date: string) => {
  if (date !== null) {
    const newDate = moment(date).format('DD/MM/YYYY');

    return newDate;
  } else {
    return 'undefined';
  }
};
