// {"currentPage":1,"itemsPerPage":5,"totalItems":12,"totalPages":3}

export interface Pagination {
    currentPage: number;
    itemsPerPage: number;
    totalItems: number;
    totalPages: number;
}

export class PaginatedResult<T> {
    result: T;
    pagination: Pagination;
}
