import { Request } from 'express';
import { CoreService as HttpsService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpsService.post('/buildings', req.body, {
    headers: {
      Authorization: req.headers.Authorization
    }
  });
  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  console.log('re',req.query);
  const response: IGenericResponse = await HttpsService.get('/buildings', {
    params: req.query
  });
  return response;
};

export const BuildingService = {
  insertIntoDB,
  getAllFromDB
};
