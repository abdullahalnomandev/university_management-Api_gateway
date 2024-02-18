import { NextFunction, Request, Response } from 'express';
import { AcademicFacultyService } from './academicFaculty.service';
import sendResponse from '../../../shared/response';


const insertIntoDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.insertIntoDB(req);
    sendResponse(res,result);
  } catch (error) {
    next(error);
  }
};

const getAllFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getAllFromDB(req)
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};

const getOneFromDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicFacultyService.getSingleFromDB(req);
    sendResponse(res, result);
  } catch (error) {
    next(error);
  }
};


export const AcademicFacultyController = {
  insertIntoDB,
  getAllFromDB,
  getOneFromDB
};