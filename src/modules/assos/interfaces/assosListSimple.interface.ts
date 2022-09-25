import { Link } from '../../../interfaces/link.interface';

export interface AssoListSimple {
  login: string;
  name: string;
  descriptionShort: string;
  _links: Link[];
}
