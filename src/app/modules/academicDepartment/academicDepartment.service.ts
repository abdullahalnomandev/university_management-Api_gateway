
import { Request } from "express";
import { CoreService as HttpsService} from "../../../shared/axios"
import { IGenericResponse } from './../../../interfaces/common';


const insertIntoDB =async (req:Request):Promise<IGenericResponse> =>{

  const response: IGenericResponse = await HttpsService.post('/academic-department', req.body,
    {
      headers: {
        Authorization: req.headers.authorization
      }
    }
  );

  return response;
}

export const AcademicDepartmentService ={
    insertIntoDB
}