import config from '../../../../api/config';
import { Asso } from '../../../interfaces/assos.interface';

export const getImageLink = (asso: Asso) => {
  const link = asso._links.find((link) => link.rel === 'orga.image');
  const url = config.etu_utt_baseuri + (link ? link.uri : '');

  return url;
};
