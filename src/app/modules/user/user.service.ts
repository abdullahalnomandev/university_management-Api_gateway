import { NextFunction, Request, Response } from "express";
import { FileUploadHelper } from "../../../helpers/FilteUploadHelper";
import { ICloudinaryResponse, IUploadFile } from "../../../interfaces/file";
import { AuthService  as HttpsRequest} from "../../../shared/axios";
import { IGenericErrorResponse, IGenericResponse } from "../../../interfaces/common";

const createStudent  =  async (req:Request):Promise<IGenericResponse>=>{

    const file = req.file as IUploadFile;
    const uploadedImage = await FileUploadHelper.uploadToCloudinary(file);

    if(uploadedImage){
        req.body.student.profileImage =uploadedImage.secure_url
    }

    const {academicDepartment,academicSemester,academicFaculty} =req.body.student;

    const academicDepartmentResponse = await HttpsRequest.get(`/academic-department?syncId=${academicDepartment}`)
    if(academicDepartmentResponse.data && Array.isArray(academicDepartmentResponse.data)){
        req.body.student.academicDepartment =  academicDepartmentResponse.data[0].id;
    }


    const academicFacultyResponse = await HttpsRequest.get(`/academic-faculty?syncId=${academicFaculty}`)
    if(academicFacultyResponse.data && Array.isArray(academicFacultyResponse.data)){
        req.body.student.academicFaculty =  academicFacultyResponse.data[0].id;
    }


    const academicSemesterResponse = await HttpsRequest.get(`/academic-semesters?syncId=${academicSemester}`)
    if(academicSemesterResponse.data && Array.isArray(academicSemesterResponse.data)){
        req.body.student.academicSemester =  academicSemesterResponse.data[0].id;
    }


    const response:IGenericResponse = await HttpsRequest.post('/users/create-student',req.body,{
        headers:{
            Authorization: req.headers.authorization
        }
    })

    return response;

}

export const UserService ={
    createStudent
}