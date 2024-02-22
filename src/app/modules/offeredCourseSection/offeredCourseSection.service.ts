import { Request } from 'express';
import { IGenericResponse } from '../../../interfaces/common';
import { CoreService as HttpsService } from '../../../shared/axios';

const getAllFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpsService.get('/offered-courses-sections', {
    params: req.query,
    headers: {
      Authorization: req.headers.authorization
    }
  });
  return response;
};

const insertIntoDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpsService.post(
    `/offered-courses-sections`,
    req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );
  return response;
};

const getSingleFromDB = async (req: Request): Promise<IGenericResponse> => {
  const response: IGenericResponse = await HttpsService.get(
    `/offered-courses-sections/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

const deleteByIdFromDB = async (req: Request): Promise<IGenericResponse> => {
    console.log('object.deleteById',req.params.id);
  const response: IGenericResponse = await HttpsService.delete(
    `/offered-courses-sections/${req.params.id}`,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
};

export const OfferedCourseSectionService = {
  getSingleFromDB,
  deleteByIdFromDB,
  getAllFromDB,
  insertIntoDB
};
