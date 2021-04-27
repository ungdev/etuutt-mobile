import { Embed } from '../../../interfaces/embed.interface';
import { Link } from '../../../interfaces/link.interface';

export interface Asso {
  login: string;
  name: string;
  mail: string;
  phone: string;
  description: string;
  descriptionShort: string;
  website: string;
  _links: Link[];
  _embed: Embed[];
}
