import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpsService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpsService.get('/offered-courses-class-schedules', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpsService.post(`/offered-courses-class-schedules`, req.body, {
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};


export const OfferedCourseClassScheduleService ={
    getAllFromDB,
    insertIntoDB
}