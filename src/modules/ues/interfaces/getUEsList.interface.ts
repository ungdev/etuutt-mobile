import { Pagination } from '../../../interfaces/pagination.interface';
import { UE } from './ue.interface';

export interface GetUEList {
  data: UE;
  pagination: Pagination;
}
