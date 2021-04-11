export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  perPage: number;
  previous: false | string;
  next: false | string;
}
