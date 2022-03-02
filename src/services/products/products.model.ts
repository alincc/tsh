export interface Meta {
  totalItems: number;
  itemCount: number;
  itemsPerPage: number;
  totalPages: number;
  currentPage: number;
}

export interface Links {
  first: string;
  previous: string;
  next: string;
  last: string;
}

export interface ListResponse<T> {
  items: T[];
  meta: Meta;
  links: Links;
}

export interface ProductsQuery {
  searchValue: string;
  active: boolean;
  promo: boolean;
  limit: number;
  page: number;
}
