import { NextFunction, Request, Response } from "express";
import { RoomService } from "./room.service";
import sendResponse from "../../../shared/response";


const getAllFromDB = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const result = await RoomService.getAllFromDB(req);
         sendResponse(res,result);
    } catch (error) {
        next(error);
    }
}

const insertIntoDB = async (req:Request,res:Response,next:NextFunction) =>{
    try {
        const result = await RoomService.insertIntoDB(req);
         sendResponse(res,result);
    } catch (error) {
        next(error);
    }
}

export const RoomController ={
    getAllFromDB,
    insertIntoDB
}