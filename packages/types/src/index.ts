export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T = unknown> {
  data: T[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface HealthResponse {
  status: 'ok' | 'error';
  service: string;
  timestamp: string;
  version?: string;
}

export enum UserRole {
  SUPER_ADMIN = 'SUPER_ADMIN',
  COMPANY_ADMIN = 'COMPANY_ADMIN',
  RESTAURANT_ADMIN = 'RESTAURANT_ADMIN',
  MANAGER = 'MANAGER',
  CASHIER = 'CASHIER',
  KITCHEN = 'KITCHEN',
  INVENTORY_MANAGER = 'INVENTORY_MANAGER',
  DELIVERY_MANAGER = 'DELIVERY_MANAGER',
  DRIVER = 'DRIVER',
  CUSTOMER = 'CUSTOMER',
}

export interface PaginationQuery {
  page?: number;
  limit?: number;
}
