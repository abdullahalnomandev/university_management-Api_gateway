import { Request } from 'express';
import { CoreService as HttpsService } from '../../../shared/axios';
import { IGenericResponse } from '../../../interfaces/common';


const getAllFromDB = async (req:Request):Promise<IGenericResponse> =>{
    const response: IGenericResponse = await HttpsService.get("/rooms",{
        params:req.params
    });
    return response;
}

const insertIntoDB = async (req:Request):Promise<IGenericResponse> =>{
    const response: IGenericResponse = await HttpsService.post("/rooms",req.body,{
        headers:{
            Authorization:req.headers.Authorization
        }
    });
    return response;
}


export const RoomService ={
    getAllFromDB,
    insertIntoDB
}