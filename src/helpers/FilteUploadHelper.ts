import { v2 as cloudinary } from 'cloudinary';
import multer from 'multer';
import * as fs from 'fs';
import { ICloudinaryResponse, IUploadFile } from '../interfaces/file';
cloudinary.config({
  cloud_name: 'dzghsspe7',
  api_key: '311451141827357',
  api_secret: 'TE4QfJp3B-XCoORgNHD4ecw27rw'
});

const uploadToCloudinary = async (file:IUploadFile):Promise<ICloudinaryResponse | undefined > => {
  return new Promise((resolve, reject) => {
    cloudinary.uploader.upload(file.path,
      (error:Error,result:ICloudinaryResponse) =>{
        fs.unlinkSync(file.path)
        if(error) {
          reject(error);
        }else{
          resolve(result);
        }
      }
    );
  });
};

//MULTER_FILE_UPLOAD
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, 'uploads/');
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  }
});

const upload = multer({ storage: storage });

export const FileUploadHelper = {
  uploadToCloudinary,
  upload
};
