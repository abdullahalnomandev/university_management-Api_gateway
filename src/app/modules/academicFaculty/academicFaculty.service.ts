import { Request } from 'express';
import { CoreService as HttpsService } from '../../../shared/axios';

import { IGenericResponse } from '../../../interfaces/common';

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpsService.post(
    '/academic-faculty/create-academic-faculty',
    req.body
  );
  return response;
};

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpsService.get('/academic-faculty', {
    params: req.query
  });

  return response;
};

const getSingleFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpsService.get(
    `/academic-faculty/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};
export const AcademicFacultyService = {
  insertIntoDB,
  getAllFromDB,
  getSingleFromDB
};
