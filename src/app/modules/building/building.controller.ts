import { NextFunction, Request, Response } from "express";
import { BuildingService } from "./building.service";
import sendResponse from "../../../shared/response";


const insertIntoDB = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const result = await BuildingService.insertIntoDB(req)
        sendResponse(res,result)
    } catch (error) {
        next(error);
    }
}
const getAllFromDB = async (req:Request,res:Response,next:NextFunction) => {
    try {
        const result = await BuildingService.getAllFromDB(req)
        sendResponse(res,result)
    } catch (error) {
        next(error);
    }
}

export const BuildingController = {
    insertIntoDB,
    getAllFromDB
}