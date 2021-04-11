import { Pagination } from '../../../interfaces/pagination.interface';
import { Asso } from './assos.interface';

export interface GetAssosList {
  data: Asso[];
  pagination: Pagination;
}
