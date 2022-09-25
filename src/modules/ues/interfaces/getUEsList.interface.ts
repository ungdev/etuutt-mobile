import { Pagination } from '../../../interfaces/pagination.interface';
import { GetUE } from './getUE.interface';

export interface GetUEList {
  data: GetUE;
  pagination: Pagination;
}
