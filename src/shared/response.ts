import { Response } from 'express';

interface IResponse {
  status: string;
  statusCode: number;
  message?: string;
  meta?: {
    page: number;
    limit: number;
    total: number;
  };
  data?: unknown;
}

const sendResponse = <T>(
  res: Response,
  data: {
    status: string;
    statusCode: number;
    message?: string;
    meta?: {
      page: number;
      limit: number;
      total: number;
    };
    data?: T;
  }
) => {
  const response: IResponse = {
    status: data.status,
    statusCode: data.statusCode,
    message: data.message || 'Success',
    meta: data.meta,
    data: data.data || null
  };

  res.status(data.statusCode).json(response);
};

export default sendResponse;
