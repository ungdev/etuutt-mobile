import { Embed } from '../../../interfaces/embed.interface';
import { Link } from '../../../interfaces/link.interface';

//tous assos simplifié + les autres trucs

export interface Asso {
  login: string;
  name: string;
  _links: Link[];
  _embed: Embed[];
}
