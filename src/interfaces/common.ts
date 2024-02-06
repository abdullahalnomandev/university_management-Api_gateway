export interface IGenericResponse {
  status: string;
  statusCode: number;
  message: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: any;
}

export interface IGenericErrorResponse {
  statusCode: number;
  message: string;
  errorMessages: {
    path: string;
    message: string;
  }[];
}
