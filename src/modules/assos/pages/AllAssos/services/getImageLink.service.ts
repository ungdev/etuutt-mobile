import config from '../../../../api/config';
import { AssoListSimple } from '../../../interfaces/assosListSimple.interface';

export const getImageLink = (asso: AssoListSimple) => {
  const link = asso._links.find((link) => link.rel === 'orga.image');
  const url = config.etu_utt_baseuri + (link ? link.uri : '');

  return url;
};
